import { useQuery } from '@tanstack/react-query'

import { GetTimeTableByTimeTableIdResponse, TimetableInfo } from '@/api/types/timetable'

const dummyTimetableList: TimetableInfo[] = [
  { tableID: 2132412832, tableName: '꾸잉', year: '2023', semester: 'Spring', isPin: true },
  { tableID: 5837422123, tableName: '뽀잉', year: '2023', semester: 'Fall', isPin: true },
  { tableID: 1347897282, tableName: '또잉', year: '2024', semester: 'Spring', isPin: true },
  { tableID: 4852836482, tableName: '끼잉', year: '2024', semester: 'Spring', isPin: false },
  { tableID: 2365718237, tableName: '싸잉', year: '2024', semester: 'Fall', isPin: true },
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

const getTimetable = async (timetableID: number) => {
  const ret = dummyTimetableData[timetableID]
  return ret
}

export const useGetTimetable = (timetableID: number) => {
  return useQuery({
    queryKey: ['timetable', timetableID],
    queryFn: () => {
      return getTimetable(timetableID)
    },
  })
}
