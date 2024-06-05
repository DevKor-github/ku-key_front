import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

import {
  CreateTimeTableRequest,
  DeleteTimeTableRequest,
  GetTimeTableByTimeTableIdRequest,
  UpdateMainTimeTableRequest,
  UpdateTimeTableNameRequest,
} from '@/api/types/timetable'

const getTimetableList = async (authHeader: string | null) => {
  const response = await axios.get(`http://${import.meta.env.VITE_API_SERVER}/timetable/user`, {
    headers: { Authorization: authHeader },
  })
  return response.data
}

export const useGetTimetableList = () => {
  const authHeader = useAuthHeader()
  return useQuery({
    queryKey: ['timetableList'],
    queryFn: () => getTimetableList(authHeader),
  })
}

const getTimetable = async ({ authHeader, tableId }: GetTimeTableByTimeTableIdRequest) => {
  const response = await axios.get(`http://${import.meta.env.VITE_API_SERVER}/timetable/${tableId}`, {
    headers: { Authorization: authHeader },
  })
  return response.data
}

export const useGetTimetable = (props: Omit<GetTimeTableByTimeTableIdRequest, 'authHeader'>) => {
  const authHeader = useAuthHeader()
  return useQuery({
    queryKey: ['timetable', props.tableId],
    queryFn: () => getTimetable({ authHeader, ...props }),
  })
}

const postTimetable = async ({ authHeader, tableName, semester, year }: CreateTimeTableRequest) => {
  const response = await axios.post(
    `http://${import.meta.env.VITE_API_SERVER}/timetable`,
    { tableName, semester, year },
    { headers: { Authorization: authHeader } },
  )
  return response.data
}

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

const deleteTimetable = async ({ authHeader, tableId }: DeleteTimeTableRequest) => {
  const response = await axios.delete(`http://${import.meta.env.VITE_API_SERVER}/timetable/${tableId}`, {
    headers: { Authorization: authHeader },
  })
  return response
}

export const useDeleteTimetable = () => {
  const authHeader = useAuthHeader()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (props: Omit<DeleteTimeTableRequest, 'authHeader'>) => deleteTimetable({ authHeader, ...props }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timetableList'] })
    },
  })
}

const updateTableName = async ({ authHeader, timeTableId, tableName }: UpdateTimeTableNameRequest) => {
  const response = await axios.patch(
    `http://${import.meta.env.VITE_API_SERVER}/timetable/name/${timeTableId}`,
    { tableName },
    {
      headers: { Authorization: authHeader },
    },
  )
  return response
}

export const useUpdateTableName = () => {
  const authHeader = useAuthHeader()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (props: Omit<UpdateTimeTableNameRequest, 'authHeader'>) => updateTableName({ authHeader, ...props }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timetableList'] })
    },
  })
}

const updateMainTable = async ({ authHeader, semester, year, timeTableId }: UpdateMainTimeTableRequest) => {
  const response = await axios.patch(
    `http://${import.meta.env.VITE_API_SERVER}/timetable/${timeTableId}`,
    { semester, year },
    {
      headers: { Authorization: authHeader },
    },
  )
  return response
}

export const useUpdateMainTable = () => {
  const authHeader = useAuthHeader()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (props: Omit<UpdateMainTimeTableRequest, 'authHeader'>) => {
      return updateMainTable({ authHeader, ...props })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timetableList'] })
    },
  })
}
