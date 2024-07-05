import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

import {
  CreateTimeTableRequest,
  DeleteTimeTableRequest,
  GetTimeTableByTimeTableIdRequest,
  GetTimeTableByTimeTableIdResponse,
  GetTimeTableByUserIdResponse,
  UpdateMainTimeTableRequest,
  UpdateTableColorRequest,
  UpdateTimeTableNameRequest,
} from '@/api/types/timetable'

const getTimetableByUser = async (authHeader: string | null) => {
  const response = await axios.get<GetTimeTableByUserIdResponse>(
    `${import.meta.env.VITE_API_SERVER}/timetable/user`,
    {
      headers: { Authorization: authHeader },
    },
  )
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

const getTimetableByID = async ({ authHeader, timetableId }: GetTimeTableByTimeTableIdRequest) => {
  const response = await axios.get<GetTimeTableByTimeTableIdResponse>(
    `${import.meta.env.VITE_API_SERVER}/timetable/${timetableId}`,
    {
      headers: { Authorization: authHeader },
    },
  )
  return response.data
}

/**
 * 시간표 ID로 해당 시간표와 관련된 강의 정보를 반환합니다.
 */
export const useGetTimetable = ({ timetableId }: Pick<GetTimeTableByTimeTableIdRequest, 'timetableId'>) => {
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

const postTimetable = async ({ authHeader, tableName, semester, year }: CreateTimeTableRequest) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_SERVER}/timetable`,
    { tableName, semester, year },
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
    mutationFn: (props: Omit<CreateTimeTableRequest, 'authHeader'>) => postTimetable({ authHeader, ...props }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timetableList'] })
    },
  })
}

const deleteTimetable = async ({ authHeader, timetableId }: DeleteTimeTableRequest) => {
  const response = await axios.delete(`${import.meta.env.VITE_API_SERVER}/timetable/${timetableId}`, {
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
    mutationFn: ({ timetableId }: Pick<DeleteTimeTableRequest, 'timetableId'>) =>
      deleteTimetable({ authHeader, timetableId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timetableList'] })
    },
  })
}

const patchTableName = async ({ authHeader, timeTableId, tableName }: UpdateTimeTableNameRequest) => {
  const response = await axios.patch(
    `${import.meta.env.VITE_API_SERVER}/timetable/name/${timeTableId}`,
    { tableName },
    {
      headers: { Authorization: authHeader },
    },
  )
  return response
}

/**
 * 특정 시간표의 이름을 변경합니다.
 */
export const useUpdateTableName = () => {
  const authHeader = useAuthHeader()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (props: Omit<UpdateTimeTableNameRequest, 'authHeader'>) => patchTableName({ authHeader, ...props }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timetableList'] })
    },
  })
}

const patchMainTable = async ({ authHeader, semester, year, timeTableId }: UpdateMainTimeTableRequest) => {
  const response = await axios.patch(
    `${import.meta.env.VITE_API_SERVER}/timetable/${timeTableId}`,
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
export const useUpdateMainTable = () => {
  const authHeader = useAuthHeader()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (props: Omit<UpdateMainTimeTableRequest, 'authHeader'>) => {
      return patchMainTable({ authHeader, ...props })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timetableList'] })
    },
  })
}

const patchColor = async ({ authHeader, tableColor, timeTableId }: UpdateTableColorRequest) => {
  const response = await axios.patch(
    `${import.meta.env.VITE_API_SERVER}/timetable/color/${timeTableId}`,
    { tableColor },
    { headers: { Authorization: authHeader } },
  )
  return response
}

/**
 * 시간표의 색상을 변경합니다.
 */
export const useUpdateTableColor = () => {
  const authHeader = useAuthHeader()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (props: Omit<UpdateTableColorRequest, 'authHeader'>) => {
      return patchColor({ authHeader, ...props })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timetable'] })
    },
  })
}
