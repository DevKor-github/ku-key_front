import { CourseType, DayType, Semester, SemesterType, TimetableInfo } from '@/types/timetable'

const dayToNumber: { [key in DayType]: number } = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 }

export const numberToSemester: SemesterType[] = ['Spring', 'Summer', 'Fall', 'Winter']

/**
 * HH:MM:SS 형태의 문자열을 두개 받아, 차이를 분으로 반환
 */
export const getDuration = (timeA: string, timeB: string) => {
  const dateA = new Date(`2024/05/27 ${timeA}`)
  const dateB = new Date(`2024/05/27 ${timeB}`)
  const diffMSec = dateA.getTime() - dateB.getTime()
  const diffMin = diffMSec / (60 * 1000)
  return diffMin
}

/**
 * 시간표 리스트를 받으면
 * 각 학기의 배열로 되어 있는 리스트로 변환
 */
export const timetablePreprocess = (data: TimetableInfo[] | undefined) => {
  // todo: 전반적인 리펙토링

  if (data === undefined) data = []

  // todo: hard coding 되어 있는 학기 리스트 자동화 매핑
  const supportedYear = ['2023', '2024']
  const ret: Semester[] = []

  supportedYear.map(year => {
    for (let i = 0; i < 4; i++) {
      ret.push({ year, semester: numberToSemester[i], timetables: [] })
    }
  })

  data.map(timetable => {
    for (let i = 0; i < ret.length; i++) {
      const { year, semester, timetables } = ret[i]
      if (timetable.year === year && timetable.semester == semester) {
        if (timetable.mainTimeTable) {
          timetables.unshift(timetable)
        } else {
          timetables.push(timetable)
        }
        break
      }
    }
  })

  return ret
}

/**
 * HH:MM:SS 형태의 문자열을 받아, 시작하는 Cell을 반환 (0 ~)
 */
const getStartCell = (startTime: string) => {
  return Number(startTime.slice(0, 2)) - 9
}

/**
 * CourseType Data와 요일, 시간 정보를 받아
 * 강의데이터가 임베딩되어 있는 Grid Cell 배열을 반환
 */
export const lectureDataPreprocess = (data: CourseType[], weekCnt: number, timeCnt: number) => {
  const cellCnt = timeCnt * weekCnt
  const lecGrid: Array<CourseType>[] = Array(cellCnt)
  for (let i = 0; i < cellCnt; i++) {
    lecGrid[i] = []
  }

  // 강의 데이터 Cell에 임베딩
  data.map(lecture => {
    const ind = weekCnt * getStartCell(lecture.startTime) + dayToNumber[lecture.day]
    lecGrid[ind - 1].push(lecture)
  })

  return lecGrid
}

/**
 * CourseType Data를 받아
 * 강의가 분포되어 있는 요일과 시간 정보를 반환
 */
export const getWeeknTimeList = (data: CourseType[]) => {
  let lastTime = 16
  let lastDay = 5

  data.map(lec => {
    lastTime = Math.max(lastTime, Number(lec.endTime.slice(0, 2)))
    if (dayToNumber[lec.day] > lastDay) {
      lastDay = dayToNumber[lec.day]
    }
  })

  const weekCandidate = ['MON', 'TUS', 'WEN', 'THR', 'FRI', 'SAT', 'SUN']

  const time = ['']
  const week = []

  for (let i = 0; i < lastDay; i++) {
    week.push(weekCandidate[i])
  }

  for (let i = 9; i <= lastTime; i++) {
    time.push(`${i}:00`)
  }

  return { time, week }
}
