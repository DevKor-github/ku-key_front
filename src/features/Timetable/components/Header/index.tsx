import { RefObject } from 'react'

import * as s from './style.css'

import ShareBtn from '@/components/timetable/Button/ShareBtn'
import Dropdown from '@/components/timetable/Dropdown'
import { Semester } from '@/types/timetable'
import { convertHtmlToImage, makeSemesterDropdownList } from '@/util/timetableUtil'

interface Props {
  semesterList: Semester[]
  curSemester: number
  setCurSemester: (target: number) => void
  imgRef: RefObject<HTMLDivElement>
}
const Header = ({ semesterList, curSemester, setCurSemester, imgRef }: Props) => {
  const getImageFromTimetable = () => {
    convertHtmlToImage(imgRef.current, 'my_timetable')
  }

  return (
    <div className={s.Wrapper}>
      <div className={s.Contents}>
        <div className={s.Control}>
          <h2 className={s.Title}>My schedule</h2>
          <Dropdown
            dropdownList={makeSemesterDropdownList(semesterList)}
            curIndex={curSemester}
            setCurIndex={setCurSemester}
          />
        </div>
        <div className={s.Share}>
          <ShareBtn shareHandler={getImageFromTimetable} />
        </div>
      </div>
    </div>
  )
}
export default Header
