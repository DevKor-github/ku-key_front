import { useQuery } from '@tanstack/react-query'

import { GetTimeTableByTimeTableIdResponse, GetTimeTableByUserIdResponse, TimetableInfo } from '@/api/types/timetable'
import { semesterMap } from '@/util/timetableUtil'

const dummyTimetableList: GetTimeTableByUserIdResponse[] = [
  { tableID: 2132412832, tableName: '꾸잉', year: '2023', semester: 1, isPin: true },
  { tableID: 5837422123, tableName: '뽀잉', year: '2023', semester: 3, isPin: true },
  { tableID: 1347897282, tableName: '또잉', year: '2024', semester: 1, isPin: true },
  { tableID: 4852836482, tableName: '끼잉', year: '2024', semester: 1, isPin: false },
  { tableID: 2365718237, tableName: '싸잉', year: '2024', semester: 3, isPin: true },
]

const dummyTimetableData: { [key: string]: GetTimeTableByTimeTableIdResponse } = {
  '2132412832': [
    {
      professorName: '박정우',
      courseName: '개구리의 먹이사슬',
      courseCode: 'FROG101',
      day: 'Mon',
      startTime: '10:00:00',
      endTime: '11:30:00',
      classroom: '대모산',
    },
    {
      professorName: '하승준',
      courseName: '일반까치학및연습I',
      courseCode: 'MGPI101',
      day: 'Wed',
      startTime: '11:00:00',
      endTime: '12:30:00',
      classroom: '안암역',
    },
    {
      professorName: '이지원',
      courseName: '디지털기획을위한데이터처리와분석',
      courseCode: 'DGDB101',
      day: 'Tue',
      startTime: '09:00:00',
      endTime: '13:10:00',
      classroom: '카페안암동',
    },
    {
      professorName: '차승민',
      courseName: 'Frontend 심화반',
      courseCode: 'FREN101',
      day: 'Fri',
      startTime: '14:00:00',
      endTime: '15:20:00',
      classroom: '정보관B101',
    },
  ],
  '5837422123': [
    {
      professorName: '차승민',
      courseName: 'Frontend 심화반',
      courseCode: 'FREN101',
      day: 'Fri',
      startTime: '16:00:00',
      endTime: '18:20:00',
      classroom: '정보관B101',
    },
    {
      professorName: '하승준',
      courseName: '일반까치학및연습I',
      courseCode: 'MGPI101',
      day: 'Wed',
      startTime: '11:00:00',
      endTime: '13:00:00',
      classroom: '안암역',
    },
  ],
  '1347897282': [],
  '4852836482': [
    {
      professorName: '차승민',
      courseName: 'Frontend 심화반',
      courseCode: 'FREN101',
      day: 'Sat',
      startTime: '16:00:00',
      endTime: '18:20:00',
      classroom: '정보관B101',
    },
    {
      professorName: '차승민',
      courseName: 'Frontend 심화반',
      courseCode: 'FREN101',
      day: 'Mon',
      startTime: '16:00:00',
      endTime: '18:59:00',
      classroom: '정보관B101',
    },
  ],
  '2365718237': [],
}

const getTimetableList = async (): Promise<TimetableInfo[]> => {
  return dummyTimetableList.map(timetable => {
    return { ...timetable, semester: semesterMap[timetable.semester] }
  })
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
