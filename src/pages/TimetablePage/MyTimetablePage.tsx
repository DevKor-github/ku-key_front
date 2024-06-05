import { css } from '@styled-stytem/css'
import { Download } from 'lucide-react'
import { useState } from 'react'

import { useGetTimetableList, usePostTimetable } from '@/api/hooks/timetable'
import TimeTable from '@/components/timetable'
import StatusBar from '@/components/timetable/MyTimetable/StatusBar'
import TimetableDropdown from '@/components/timetable/TimetableDropdown'
import { ShareBtn } from '@/pages/TimetablePage'
import { timetablePreprocess } from '@/util/timetableUtil'

const MyTimetablePage = () => {
  const { data: timetableList, isPending } = useGetTimetableList()
  const { mutate: createTimetable, isPending: isCreateTimetablePending } = usePostTimetable()

  const [curSemester, setCurSemester] = useState(0)
  const [curIndex, setCurIndex] = useState(0)

  if (isPending) {
    return <div>로딩 중</div>
  }

  const semesterList = timetablePreprocess(timetableList)

  if (!isCreateTimetablePending && semesterList[curSemester].timetables.length === 0) {
    // 이거 왜 isCreateTimetablePending 옵션 빼면 52번이나 실행되는거지
    createTimetable({
      tableName: '새 시간표',
      semester: semesterList[curSemester].semester,
      year: semesterList[curSemester].year,
    })
    return <div>로딩 중</div>
  }

  return (
    <>
      <div className={css({ display: 'flex', flexDir: 'row', justifyContent: 'space-between', my: 11 })}>
        <div className={css({ display: 'flex', flexDir: 'row', gap: 5 })}>
          <div className={css({ color: 'black.2', fontSize: 32, fontWeight: '800', wordWrap: 'break-word' })}>
            My schedule
          </div>
          <TimetableDropdown
            semesterList={semesterList}
            curSemester={curSemester}
            setCurSemester={setCurSemester}
            setCurIndex={setCurIndex}
          />
        </div>
        <div className={css({ display: 'flex', flexDir: 'row', gap: 2.5 })}>
          <div className={css(ShareBtn.raw())}>Link</div>
          <div className={css(ShareBtn.raw({ icon: true }))}>
            <Download />
          </div>
        </div>
      </div>
      <StatusBar curSemester={semesterList[curSemester]} curIndex={curIndex} setCurIndex={setCurIndex} />
      <TimeTable timetable={semesterList[curSemester].timetables[curIndex]} />
    </>
  )
}

export default MyTimetablePage
