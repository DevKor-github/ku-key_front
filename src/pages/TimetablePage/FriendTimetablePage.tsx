import { css } from '@styled-stytem/css'
import { Download } from 'lucide-react'
import { useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'

import { FriendPageBtn } from '@/components/timetable/Friend/FriendsList'
import FriendTimetable from '@/components/timetable/Friend/FriendTimetable'
import ShareBtn from '@/components/timetable/ShareBtn'
import TimetableDropdown from '@/components/timetable/TimetableDropdown'
import { timetablePreprocess } from '@/util/timetableUtil'

const FriendTimetablePage = () => {
  const params = useParams()
  const user = params.userHandler

  const [curSemester, setCurSemester] = useState(0)
  const semesterList = timetablePreprocess([])

  const setSemesterIndex = useCallback(
    (toIndex: number) => {
      setCurSemester(toIndex)
    },
    [setCurSemester],
  )

  return (
    <>
      <div className={css({ display: 'flex', flexDir: 'row', justifyContent: 'space-between', my: 11 })}>
        <div className={css({ display: 'flex', flexDir: 'row', gap: 5 })}>
          <div className={css({ color: 'black.2', fontSize: 32, fontWeight: '800', wordWrap: 'break-word' })}>
            {user}
          </div>
          <TimetableDropdown semesterList={semesterList} curSemester={curSemester} setCurSemester={setSemesterIndex} />
        </div>
        <div className={css({ display: 'flex', flexDir: 'row', gap: 2.5 })}>
          <ShareBtn>Link</ShareBtn>
          <ShareBtn icon={true}>
            <Download />
          </ShareBtn>
        </div>
      </div>
      <div className={css({ display: 'flex', flexDir: 'column', gap: 5 })}>
        <FriendPageBtn />
        <FriendTimetable
          user={user!}
          semester={semesterList[curSemester].semester}
          year={semesterList[curSemester].year}
        />
      </div>
    </>
  )
}

export default FriendTimetablePage
