import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

import {
  CreateTimetableRequest,
  DeleteTimetableRequest,
  GetTimetableByTimetableIdRequest,
  GetTimetableByTimetableIdResponse,
  GetTimetableByUserIdResponse,
  PostCourseRequest,
  UpdateMainTimetableRequest,
  UpdateTimetableColorRequest,
  UpdateTimetableNameRequest,
} from '@/api/types/timetable'

const getTimetableByUser = async (authHeader: string | null) => {
  const response = await axios.get<GetTimetableByUserIdResponse>(`${import.meta.env.VITE_API_URL}/timetable/user`, {
    headers: { Authorization: authHeader },
  })
  return response.data
}

/**
 * 해당 유저가 가지고 있는 시간표의 ID 리스트, 각각의 학기, 대표 시간표 여부, 시간표 이름을 반환합니다.
 */
export const useGetUserTimetableList = () => {
  const authHeader = useAuthHeader()
  return useQuery({
    queryKey: ['timetableList'],
    queryFn: () => getTimetableByUser(authHeader),
    initialData: [],
  })
}

const getTimetableByID = async ({ authHeader, timetableId }: GetTimetableByTimetableIdRequest) => {
  const response = await axios.get<GetTimetableByTimetableIdResponse>(
    `${import.meta.env.VITE_API_URL}/timetable/${timetableId}`,
    {
      headers: { Authorization: authHeader },
    },
  )
  return response.data
}

/**
 * 시간표 ID로 해당 시간표와 관련된 강의 정보를 반환합니다.
 */
export const useGetTimetable = ({ timetableId }: Pick<GetTimetableByTimetableIdRequest, 'timetableId'>) => {
  const authHeader = useAuthHeader()
  return useQuery({
    queryKey: ['timetable', timetableId],
    queryFn: () => getTimetableByID({ authHeader, timetableId }),
    initialData: {
      courses: [],
      schedules: [],
      color: 'Red',
    },
  })
}

const postTimetable = async ({ authHeader, timetableName, semester, year }: CreateTimetableRequest) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/timetable`,
    { timetableName, semester, year },
    { headers: { Authorization: authHeader } },
  )
  return response.data
}

/**
 * 해당 연도, 학기에 시간표를 생성합니다. 처음 만들어진 시간표가 대표시간표가 되며, 한 학기에 최대 3개까지 시간표 생성이 가능합니다.
 */
export const usePostTimetable = () => {
  const authHeader = useAuthHeader()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (props: Omit<CreateTimetableRequest, 'authHeader'>) => postTimetable({ authHeader, ...props }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timetableList'] })
    },
  })
}

const deleteTimetable = async ({ authHeader, timetableId }: DeleteTimetableRequest) => {
  const response = await axios.delete(`${import.meta.env.VITE_API_URL}/timetable/${timetableId}`, {
    headers: { Authorization: authHeader },
  })
  return response
}

/**
 * 특정 시간표를 삭제합니다. 삭제 시 해당 시간표에 등록된 모든 강의도 삭제됩니다.
 */
export const useDeleteTimetable = () => {
  const authHeader = useAuthHeader()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ timetableId }: Pick<DeleteTimetableRequest, 'timetableId'>) =>
      deleteTimetable({ authHeader, timetableId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timetableList'] })
    },
  })
}

const patchTimetableName = async ({ authHeader, timetableId, timetableName }: UpdateTimetableNameRequest) => {
  const response = await axios.patch(
    `${import.meta.env.VITE_API_URL}/timetable/name/${timetableId}`,
    { timetableName },
    {
      headers: { Authorization: authHeader },
    },
  )
  return response
}

/**
 * 특정 시간표의 이름을 변경합니다.
 */
export const useUpdateTimetableName = () => {
  const authHeader = useAuthHeader()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (props: Omit<UpdateTimetableNameRequest, 'authHeader'>) => patchTimetableName({ authHeader, ...props }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timetableList'] })
    },
  })
}

const patchMainTimetable = async ({ authHeader, semester, year, timetableId }: UpdateMainTimetableRequest) => {
  const response = await axios.patch(
    `${import.meta.env.VITE_API_URL}/timetable/${timetableId}`,
    { semester, year },
    {
      headers: { Authorization: authHeader },
    },
  )
  return response
}

/**
 * 특정 시간표를 대표 시간표로 변경합니다. 기존에 이미 대표시간표이면 변경되지 않습니다.
 */
export const useUpdateMainTimetable = () => {
  const authHeader = useAuthHeader()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (props: Omit<UpdateMainTimetableRequest, 'authHeader'>) => {
      return patchMainTimetable({ authHeader, ...props })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timetableList'] })
    },
  })
}

const patchColor = async ({ authHeader, timetableColor, timetableId }: UpdateTimetableColorRequest) => {
  const response = await axios.patch(
    `${import.meta.env.VITE_API_URL}/timetable/color/${timetableId}`,
    { timetableColor },
    { headers: { Authorization: authHeader } },
  )
  return response
}

/**
 * 시간표의 색상을 변경합니다.
 */
export const useUpdateTimetableColor = () => {
  const authHeader = useAuthHeader()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (props: Omit<UpdateTimetableColorRequest, 'authHeader'>) => {
      return patchColor({ authHeader, ...props })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timetable'] })
    },
  })
}

const postCourse = async ({ authHeader, timetableId, courseId }: PostCourseRequest) => {
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/timetable/course`, null, {
    headers: { Authorization: authHeader },
    params: { timetableId, courseId },
  })
  return response
}

/**
 * 시간표에 특정 강의를 추가합니다. 해당 시간에 이미 등록된 개인 스케쥴이나 강의가 있을 경우 추가되지 않습니다.
 */
export const usePostCourse = () => {
  const authHeader = useAuthHeader()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (props: Omit<PostCourseRequest, 'authHeader'>) => {
      return postCourse({ authHeader, ...props })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timetable'] })
    },
  })
}
