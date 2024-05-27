import { useQuery } from '@tanstack/react-query'

import { GetTimeTableByTimeTableIdResponse, TimetableInfo } from '@/types/timetable'

const dummyTimetableList: TimetableInfo[] = [
  { timetableID: '2132412832', name: '꾸잉', year: '2023', semester: 'Spring', isPin: true },
  { timetableID: '5837422123', name: '뽀잉', year: '2023', semester: 'Fall', isPin: true },
  { timetableID: '1347897282', name: '또잉', year: '2024', semester: 'Spring', isPin: true },
  { timetableID: '4852836482', name: '끼잉', year: '2024', semester: 'Spring', isPin: false },
  { timetableID: '2365718237', name: '싸잉', year: '2024', semester: 'Fall', isPin: true },
]

const dummyTimetableData: { [key: string]: GetTimeTableByTimeTableIdResponse } = {
  '2132412832': [],
  '5837422123': [],
  '1347897282': [],
  '4852836482': [],
  '2365718237': [],
}

const getTimetableList = async () => {
  return dummyTimetableList
}

export const useGetTimetableList = () => {
  return useQuery({ queryKey: ['timetableList'], queryFn: getTimetableList })
}

const getTimetable = async (timetableID: string) => {
  const ret = dummyTimetableData[timetableID]
  return ret
}

export const useGetTimetable = (timetableID: string) => {
  return useQuery({
    queryKey: ['timetable', timetableID],
    queryFn: () => {
      return getTimetable(timetableID)
    },
  })
}
