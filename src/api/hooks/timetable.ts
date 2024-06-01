import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

import { CreateTimeTableRequest, TimetableInfo } from '@/api/types/timetable'
import { SemesterType } from '@/types/timetable'

const getTimetableList = async (authHeader: string): Promise<TimetableInfo[]> => {
  console.log(authHeader)
  const response = await axios.get(`http://${import.meta.env.VITE_API_SERVER}/timetable/user`, {
    headers: { Authorization: authHeader },
  })
  return response.data
}

export const useGetTimetableList = () => {
  let authHeader = useAuthHeader()
  return useQuery({
    queryKey: ['timetableList'],
    queryFn: () => {
      if (authHeader === null) authHeader = ''
      return getTimetableList(authHeader)
    },
  })
}

const getTimetable = async ({ authHeader, tableId }: { authHeader: string; tableId: number }) => {
  const response = await axios.get(`http://${import.meta.env.VITE_API_SERVER}/timetable/${tableId}`, {
    headers: { Authorization: authHeader },
  })
  return response.data
}

export const useGetTimetable = ({ tableId }: { tableId: number }) => {
  let authHeader = useAuthHeader()
  return useQuery({
    queryKey: ['timetable', tableId],
    queryFn: () => {
      if (authHeader === null) {
        authHeader = ''
      }
      return getTimetable({ authHeader, tableId })
    },
  })
}

const postTimetabe = async ({ authHeader, tableName, semester, year }: CreateTimeTableRequest) => {
  const response = await axios.post(
    `http://${import.meta.env.VITE_API_SERVER}/timetable`,
    { tableName, semester, year },
    { headers: { Authorization: authHeader } },
  )
  return response.data
}

export const usePostTimetable = () => {
  let authHeader = useAuthHeader()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ tableName, semester, year }: { tableName: string; semester: SemesterType; year: string }) => {
      if (authHeader === null) {
        authHeader = ''
      }
      return postTimetabe({ authHeader, tableName, semester, year })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timetableList'] })
    },
  })
}

const deleteTimetable = async ({ authHeader, tableId }: { authHeader: string; tableId: number }) => {
  const response = await axios.delete(`http://${import.meta.env.VITE_API_SERVER}/timetable/${tableId}`, {
    headers: { Authorization: authHeader },
  })
  return response
}

export const useDeleteTimetable = ({ tableId }: { tableId: number }) => {
  let authHeader = useAuthHeader()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: () => {
      if (authHeader === null) {
        authHeader = ''
      }
      return deleteTimetable({ authHeader, tableId })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timetableList'] })
    },
  })
}
