import { useQueryClient } from '@tanstack/react-query'

import { useErrorHandledMutation } from '@/api/hooks/useErrorHandledMutation'
import {
  DeleteScheduleRequest,
  PatchScheduleRequest,
  PostScheduleRequest,
  PostScheduleResponse,
} from '@/api/types/schedule'
import { GetTimetableByTimetableIdResponse } from '@/api/types/timetable'
import { apiInterface } from '@/util/axios/custom-axios'

const postSchedule = async ({ timetableId, title, day, startTime, endTime, location }: PostScheduleRequest) => {
  const response = await apiInterface.post<PostScheduleResponse>('/schedule', {
    timetableId,
    title,
    day,
    startTime,
    endTime,
    location,
  })
  return response.data
}

export const usePostSchedule = () => {
  const queryClient = useQueryClient()
  return useErrorHandledMutation({
    mutationFn: postSchedule,
    onSuccess: response => {
      queryClient.setQueryData<GetTimetableByTimetableIdResponse>(
        ['timetable', String(response.timetableId)],
        prevData => {
          if (prevData !== undefined && prevData.timetable !== null) {
            return {
              timetable: {
                ...prevData.timetable,
                schedules: prevData.timetable.schedules.concat([
                  {
                    location: response.location,
                    scheduleDay: response.day,
                    scheduleEndTime: response.endTime,
                    scheduleId: response.id,
                    scheduleStartTime: response.startTime,
                    scheduleTitle: response.title,
                  },
                ]),
              },
            }
          }
        },
      )
    },
  })
}

const deleteSchedule = async ({ scheduleId }: DeleteScheduleRequest) => {
  const response = await apiInterface.delete(`/schedule/${scheduleId}`)
  return response
}

/**
 * 시간표에 등록된 개인 스케쥴을 삭제합니다.
 */
export const useDeleteSchedule = () => {
  const queryClient = useQueryClient()
  return useErrorHandledMutation({
    mutationFn: deleteSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timetable'] })
    },
  })
}

const patchSchedule = async ({
  scheduleId,
  day,
  endTime,
  startTime,
  timetableId,
  title,
  location,
}: PatchScheduleRequest) => {
  const response = await apiInterface.patch<PostScheduleResponse>(`/schedule/${scheduleId}`, {
    timetableId,
    title,
    day,
    startTime,
    endTime,
    location,
  })
  return response.data
}

/**
 * 시간표에 등록된 개인 스케쥴을 수정합니다.
 */
export const usePatchSchedule = () => {
  const queryClient = useQueryClient()
  return useErrorHandledMutation({
    mutationFn: patchSchedule,
    onSuccess: response => {
      queryClient.setQueryData<GetTimetableByTimetableIdResponse>(
        ['timetable', String(response.timetableId)],
        prevData => {
          if (prevData !== undefined && prevData.timetable !== null) {
            return {
              timetable: {
                ...prevData.timetable,
                schedules: prevData.timetable.schedules.map(schedule => {
                  if (schedule.scheduleId === response.id) {
                    return {
                      location: response.location,
                      scheduleDay: response.day,
                      scheduleEndTime: response.endTime,
                      scheduleId: response.id,
                      scheduleStartTime: response.startTime,
                      scheduleTitle: response.title,
                    }
                  }
                  return schedule
                }),
              },
            }
          }
        },
      )
    },
  })
}
