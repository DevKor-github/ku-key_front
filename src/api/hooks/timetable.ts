import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import {
  CreateTimetableRequest,
  DeleteTimetableRequest,
  GetTimetableByTimetableIdRequest,
  GetTimetableByTimetableIdResponse,
  GetTimetableByUserIdResponse,
  PostCourseRequest,
  UpdateMainTimetableRequest,
  UpdateTimetableColorRequest,
  UpdateTimetableColorResponse,
  UpdateTimetableNameRequest,
} from '@/api/types/timetable'
import { apiInterface } from '@/util/axios/custom-axios'

const getTimetableByUser = async () => {
  const response = await apiInterface.get<GetTimetableByUserIdResponse>(`/timetable/user`)
  return response.data
}

/**
 * 해당 유저가 가지고 있는 시간표의 ID 리스트, 각각의 학기, 대표 시간표 여부, 시간표 이름을 반환합니다.
 */
export const useGetUserTimetableList = () => {
  return useQuery({
    queryKey: ['timetableList'],
    queryFn: getTimetableByUser,
  })
}

const getTimetableByID = async ({ timetableId }: GetTimetableByTimetableIdRequest) => {
  if (timetableId === -1)
    return {
      courses: [],
      schedules: [],
      color: 'Red',
    } as GetTimetableByTimetableIdResponse

  const response = await apiInterface.get<GetTimetableByTimetableIdResponse>(`/timetable/${timetableId}`)
  return response.data
}

/**
 * 시간표 ID로 해당 시간표와 관련된 강의 정보를 반환합니다.
 */
export const useGetTimetable = ({ timetableId }: GetTimetableByTimetableIdRequest) => {
  return useQuery({
    queryKey: ['timetable', timetableId],
    queryFn: () => getTimetableByID({ timetableId }),
    initialData: {
      courses: [],
      schedules: [],
      color: 'Red',
    },
  })
}

const postTimetable = async ({ timetableName, semester, year }: CreateTimetableRequest) => {
  const response = await apiInterface.post('/timetable', { timetableName, semester, year })
  return response.data
}

/**
 * 해당 연도, 학기에 시간표를 생성합니다. 처음 만들어진 시간표가 대표시간표가 되며, 한 학기에 최대 3개까지 시간표 생성이 가능합니다.
 */
export const usePostTimetable = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: postTimetable,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timetableList'] })
    },
  })
}

const deleteTimetable = async ({ timetableId }: DeleteTimetableRequest) => {
  const response = await apiInterface.delete(`/timetable/${timetableId}`)
  return response
}

/**
 * 특정 시간표를 삭제합니다. 삭제 시 해당 시간표에 등록된 모든 강의도 삭제됩니다.
 */
export const useDeleteTimetable = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: deleteTimetable,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timetableList'] })
    },
  })
}

const patchTimetableName = async ({ timetableId, timetableName }: UpdateTimetableNameRequest) => {
  const response = await apiInterface.patch(`/timetable/name/${timetableId}`, { timetableName })
  return response
}

/**
 * 특정 시간표의 이름을 변경합니다.
 */
export const useUpdateTimetableName = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: patchTimetableName,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timetableList'] })
    },
  })
}

const patchMainTimetable = async ({ semester, year, timetableId }: UpdateMainTimetableRequest) => {
  const response = await apiInterface.patch(`/timetable/${timetableId}`, { semester, year })
  return response
}

/**
 * 특정 시간표를 대표 시간표로 변경합니다. 기존에 이미 대표시간표이면 변경되지 않습니다.
 */
export const useUpdateMainTimetable = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: patchMainTimetable,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timetableList'] })
    },
  })
}

const patchColor = async ({ timetableColor, timetableId }: UpdateTimetableColorRequest) => {
  const response = await apiInterface.patch<UpdateTimetableColorResponse>(`/timetable/color/${timetableId}`, {
    timetableColor,
  })
  return response.data
}

/**
 * 시간표의 색상을 변경합니다.
 */
export const useUpdateTimetableColor = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: patchColor,
    onSuccess: response => {
      queryClient.setQueryData<GetTimetableByTimetableIdResponse>(['timetable', response.id], prevData => {
        if (prevData !== undefined) {
          return { ...prevData, color: response.color }
        }
      })
    },
  })
}

const postCourse = async ({ timetableId, courseId }: PostCourseRequest) => {
  const response = await apiInterface.post(`/timetable/course`, null, {
    params: { timetableId, courseId },
  })
  return response
}

/**
 * 시간표에 특정 강의를 추가합니다. 해당 시간에 이미 등록된 개인 스케쥴이나 강의가 있을 경우 추가되지 않습니다.
 */
export const usePostCourse = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: postCourse,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timetable'] })
    },
  })
}

const deleteCourse = async (params: PostCourseRequest) => {
  const response = await apiInterface.delete<{ deleted: boolean }>('/timetable/course', { params })
  return response.data
}

/**
 * 해당 시간표에 등록한 특정 강의를 삭제합니다.
 */
export const useDeleteCourse = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: deleteCourse,
    onSuccess: (response, request) => {
      if (response.deleted) {
        queryClient.setQueryData<GetTimetableByTimetableIdResponse>(['timetable', request.timetableId], prevData => {
          if (prevData !== undefined) {
            return {
              ...prevData,
              courses: prevData.courses.filter(course => {
                return course.courseId !== request.courseId
              }),
            }
          }
        })
      }
    },
  })
}
