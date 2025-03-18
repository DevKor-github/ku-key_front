import { css } from '@styled-system/css'
import { ArrowLeft } from 'lucide-react'
import { useCallback, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import ShareBtn from '@/components/timetable/Button/ShareBtn'
import Dropdown from '@/components/timetable/Dropdown'
import { FriendPageBtnStyle } from '@/components/timetable/Friend/FriendsList'
import FriendTimetable from '@/components/timetable/Friend/FriendTimetable'
import { convertHtmlToImage, makeSemesterDropdownList, timetablePreprocess } from '@/util/timetableUtil'

const FriendTimetablePage = () => {
  const params = useParams()
  const user = params.username

  const imgRef = useRef(null)
  const [curSemester, setCurSemester] = useState(2)
  const semesterList = timetablePreprocess([])

  const setSemesterIndex = useCallback(
    (toIndex: number) => {
      setCurSemester(toIndex)
    },
    [setCurSemester],
  )

  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        px: { base: 64, mdDown: 4 },
        mb: 40,
        alignItems: 'center',
      })}
    >
      <div className={css({ display: 'flex', flexDir: 'column', maxW: '1131px', width: '100%' })}>
        <div className={css({ display: 'flex', flexDir: 'row', justifyContent: 'space-between', my: 11 })}>
          <div className={css({ display: 'flex', flexDir: 'row', gap: 5 })}>
            <div className={css({ color: 'black.2', fontSize: 32, fontWeight: '800', wordWrap: 'break-word' })}>
              {user}
            </div>
            <Dropdown
              dropdownList={makeSemesterDropdownList(semesterList)}
              curIndex={curSemester}
              setCurIndex={setSemesterIndex}
            />
          </div>
          <div className={css({ display: 'flex', flexDir: 'row', gap: 2.5 })}>
            <ShareBtn shareHandler={() => convertHtmlToImage(imgRef.current, `${user}_timetable`)} />
          </div>
        </div>
        <div className={css({ display: 'flex', flexDir: 'column', gap: 5 })}>
          <Link className={FriendPageBtnStyle({ prev: true })} to="/friend">
            <ArrowLeft />
            PREV
          </Link>
          <FriendTimetable
            user={user!}
            semester={semesterList[curSemester].semester}
            year={semesterList[curSemester].year}
            ref={imgRef}
          />
        </div>
      </div>
    </div>
  )
}

export default FriendTimetablePage
