import html2canvas from 'html2canvas'

import {
  ColorType,
  CourseType,
  DayType,
  GridType,
  ScheduleType,
  Semester,
  TimetableContentsType,
  TimetableInfo,
} from '@/types/timetable'

const dayToNumber: { [key in DayType]: number } = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 }

export const numberToSemester: string[] = ['_', 'Spring', 'Summer', 'Fall', 'Winter']

export const ColorTypeArr: ColorType[] = ['Red', 'Blue', 'Green', 'Gray', 'Purple']

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
 * HH:MM:SS 형태의 문자열을 받아, 정시로부터 몇분 지났는지 반환
 */
export const getStartTime = (time: string) => {
  const date = new Date(`2024/05/27 ${time}`)
  return date.getMinutes()
}

export const getCurSemester = () => {
  const todayKST = new Date()
  const year = todayKST.getFullYear()
  const month = todayKST.getMonth() + 1

  if (month === 1) {
    // 겨울학기
    return { year: year - 1, semester: 4 }
  }
  if (1 < month && month <= 6) {
    // 1학기
    return { year, semester: 1 }
  }
  if (6 < month && month <= 7) {
    // 여름학기
    return { year, semester: 2 }
  }

  // 2학기
  return { year, semester: 3 }
}

/**
 * 현재 학기, 현재 학기 이전의 2학기, 현재 학기 이후의 3학기 지원
 * 총 6개 학기의 Semester[] 반환
 */
const calcSemester = (): Semester[] => {
  const KSTtoday = new Date()
  const year = KSTtoday.getFullYear()
  const month = KSTtoday.getMonth() + 1
  const ret: Semester[] = []

  if (month === 1) {
    // 겨울학기
    for (let semester = 2; semester <= 4; semester++) {
      ret.push({ year: `${year - 1}`, semester, timetables: [] })
    }
    for (let semester = 1; semester <= 3; semester++) {
      ret.push({ year: `${year}`, semester, timetables: [] })
    }
  } else if (1 < month && month <= 6) {
    // 1학기
    for (let semester = 3; semester <= 4; semester++) {
      ret.push({ year: `${year - 1}`, semester, timetables: [] })
    }
    for (let semester = 1; semester <= 4; semester++) {
      ret.push({ year: `${year}`, semester, timetables: [] })
    }
  } else if (6 < month && month <= 7) {
    // 여름학기
    ret.push({ year: `${year - 1}`, semester: 4, timetables: [] })
    for (let semester = 1; semester <= 4; semester++) {
      ret.push({ year: `${year}`, semester, timetables: [] })
    }
    ret.push({ year: `${year + 1}`, semester: 1, timetables: [] })
  } else {
    // 2학기
    for (let semester = 1; semester <= 4; semester++) {
      ret.push({ year: `${year}`, semester, timetables: [] })
    }
    for (let semester = 1; semester <= 2; semester++) {
      ret.push({ year: `${year + 1}`, semester, timetables: [] })
    }
  }
  return ret
}

/**
 * 시간표 리스트를 받으면
 * 각 학기의 배열로 되어 있는 리스트로 변환
 */
export const timetablePreprocess = (data: TimetableInfo[]) => {
  const ret = calcSemester()

  data.map(timetable => {
    for (let i = 0; i < ret.length; i++) {
      const { year, semester, timetables } = ret[i]
      if (timetable.year === year && timetable.semester == semester) {
        if (timetable.mainTimetable) {
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
 * CourseType, ScheduleType Data와 요일, 시간 정보를 받아
 * 강의데이터가 임베딩되어 있는 Grid Cell 배열을 반환
 */
export const lectureDataPreprocess = (
  courseData: CourseType[],
  scheduleData: ScheduleType[],
  weekCnt: number,
  timeCnt: number,
) => {
  const cellCnt = timeCnt * weekCnt
  const lecGrid: Array<GridType>[] = Array(cellCnt)
  for (let i = 0; i < cellCnt; i++) {
    lecGrid[i] = []
  }
  const noScheduled: TimetableContentsType[] = []

  // 강의 데이터 Cell에 임베딩
  courseData.map(lecture => {
    const timetableContents: TimetableContentsType = {
      scheduleType: 'Course',
      scheduleId: lecture.courseId,
      title: lecture.courseName,
      location: lecture.classroom,
      courseCode: lecture.courseCode,
      professorName: lecture.professorName,
      syllabus: lecture.syllabus,
    }
    if (lecture.day !== null && lecture.startTime && lecture.endTime) {
      const index = weekCnt * getStartCell(lecture.startTime) + dayToNumber[lecture.day]
      lecGrid[index - 1].push({
        ...timetableContents,
        day: lecture.day,
        startTime: lecture.startTime,
        endTime: lecture.endTime,
      })
    } else {
      noScheduled.push(timetableContents)
    }
  })

  scheduleData.map(schedule => {
    const index = weekCnt * getStartCell(schedule.scheduleStartTime) + dayToNumber[schedule.scheduleDay]
    lecGrid[index - 1].push({
      scheduleType: 'Schedule',
      scheduleId: schedule.scheduleId,
      title: schedule.scheduleTitle,
      location: schedule.location,
      day: schedule.scheduleDay,
      startTime: schedule.scheduleStartTime,
      endTime: schedule.scheduleEndTime,
    })
  })

  return { lectureGrid: lecGrid, noScheduled }
}

/**
 * CourseType, ScheduleType Data를 받아
 * 강의가 분포되어 있는 요일과 시간 정보를 반환
 */
export const getWeeknTimeList = (courseData: CourseType[], scheduleData: ScheduleType[]) => {
  let lastTime = 16
  let lastDay = 5

  courseData.map(lec => {
    if (lec.day && lec.endTime) {
      lastTime = Math.max(lastTime, Number(lec.endTime.slice(0, 2)))
      if (dayToNumber[lec.day] > lastDay) {
        lastDay = dayToNumber[lec.day]
      }
    }
  })
  scheduleData.map(schedule => {
    lastTime = Math.max(lastTime, Number(schedule.scheduleEndTime.slice(0, 2)))
    if (dayToNumber[schedule.scheduleDay] > lastDay) {
      lastDay = dayToNumber[schedule.scheduleDay]
    }
  })

  const weekCandidate = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

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

/**
 * HTMLDivElement와 filename을 인자로 받아
 * 사진으로 저장함
 */
export const convertHtmlToImage = (ref: HTMLDivElement | null, fileName: string) => {
  if (ref) {
    html2canvas(ref).then(canvas => {
      const link = document.createElement('a')
      link.href = canvas.toDataURL()
      link.download = `${fileName}`
      link.click()
    })
  } else {
    // todo: null (시간표가 없는 경우 처리)
  }
}

export const makeSemesterDropdownList = (semesterList: Semester[]) => {
  return semesterList.map(semester => `${semester.year} ${numberToSemester[semester.semester]} semester`)
}
