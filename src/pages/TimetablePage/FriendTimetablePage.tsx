import { css } from '@styled-stytem/css'
import { Download } from 'lucide-react'
import { useCallback, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { FriendPageBtnStyle } from '@/components/timetable/Friend/FriendsList'
import FriendTimetable from '@/components/timetable/Friend/FriendTimetable'
import ShareBtn from '@/components/timetable/ShareBtn'
import TimetableDropdown from '@/components/timetable/TimetableDropdown'
import { convertHtmlToImage, timetablePreprocess } from '@/util/timetableUtil'

const FriendTimetablePage = () => {
  const params = useParams()
  const user = params.userHandler

  const imgRef = useRef(null)
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
          <TimetableDropdown dropdownList={semesterList} curIndex={curSemester} setCurIndex={setSemesterIndex} />
        </div>
        <div className={css({ display: 'flex', flexDir: 'row', gap: 2.5 })}>
          <ShareBtn icon={true} shareHandler={() => convertHtmlToImage(imgRef.current, `${user}_timetable`)}>
            <Download />
          </ShareBtn>
        </div>
      </div>
      <div className={css({ display: 'flex', flexDir: 'column', gap: 5 })}>
        <Link className={FriendPageBtnStyle()} to="/timetable/friend">
          All Friend
        </Link>
        <FriendTimetable
          user={user!}
          semester={semesterList[curSemester].semester}
          year={semesterList[curSemester].year}
          ref={imgRef}
        />
      </div>
    </>
  )
}

export default FriendTimetablePage
