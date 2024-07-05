import { css } from '@styled-stytem/css'
import { Download } from 'lucide-react'
import { useParams } from 'react-router-dom'

import ShareBtn from '@/components/timetable/ShareBtn'
// import TimetableDropdown from '@/components/timetable/TimetableDropdown'

const FriendTimetablePage = () => {
  const params = useParams()
  const user = params.userHandler

  // const { data: timetableList, isPending } = useGetUserTimetableList()

  return (
    <>
      <div className={css({ display: 'flex', flexDir: 'row', justifyContent: 'space-between', my: 11 })}>
        <div className={css({ display: 'flex', flexDir: 'row', gap: 5 })}>
          <div className={css({ color: 'black.2', fontSize: 32, fontWeight: '800', wordWrap: 'break-word' })}>
            {user}
          </div>
          {/* <TimetableDropdown
            semesterList={semesterList}
            curSemester={curSemester}
            setCurSemester={setCurSemester}
            setCurIndex={setCurIndex}
          /> */}
        </div>
        <div className={css({ display: 'flex', flexDir: 'row', gap: 2.5 })}>
          <ShareBtn>Link</ShareBtn>
          <ShareBtn icon={true}>
            <Download />
          </ShareBtn>
        </div>
      </div>
      <div className={css({ display: 'flex', flexDir: 'row', gap: 5 })}>친구 시간표</div>
    </>
  )
}

export default FriendTimetablePage
