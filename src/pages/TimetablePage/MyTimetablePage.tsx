import { css, cva } from '@styled-stytem/css'
import { Check, Download, Plus } from 'lucide-react'
import { useState } from 'react'

import TimeTable from '@/components/timetable'
import SelectTimetableBtn from '@/components/timetable/SelectTimetableBtn'
import TimetableDropdown from '@/components/timetable/TimetableDropdown'
import { ToolbarBtn } from '@/pages/TimetablePage'
import { TimetableInfo } from '@/types/timetable'
import { timetablePreprocess } from '@/util/timetableUtil'

// todo: 해당 학기에 존재하는 timeTable이 하나도 없을 시에, createTimetable 요청 로직

const dummyTimetableList: TimetableInfo[] = [
  { timetableID: '2132412832', name: 'timetable1', year: '2023', semester: 'Spring', isPin: true },
  { timetableID: '5837422123', name: 'timetable1', year: '2023', semester: 'Fall', isPin: true },
  { timetableID: '1347897282', name: 'timetable1', year: '2024', semester: 'Spring', isPin: true },
  { timetableID: '4852836482', name: 'timetable2', year: '2024', semester: 'Spring', isPin: false },
  { timetableID: '2365718237', name: 'timetable1', year: '2024', semester: 'Fall', isPin: true },
]

const MainPinBtn = cva({
  base: {
    fontSize: 18,
    fontWeight: 500,
    rounded: 30,
    bgColor: 'bg',
    px: 2.5,
    h: 9,
    display: 'flex',
    flexDir: 'row',
    gap: 1,
    alignItems: 'center',
    border: 'solid 1px {colors.lightGray.1}',
    color: 'lightGray.1',
    cursor: 'pointer',
  },
  variants: {
    main: {
      true: {
        color: 'red.1',
        borderColor: 'red.1',
        bgColor: 'bg.red',
      },
      false: {
        _hover: {
          borderColor: 'darkGray.2',
          color: 'darkGray.2',
        },
      },
    },
  },
})

const handleCreateTimetableBtn = () => {
  // todo : 시간표 추가 로직
  alert('시간표 추가!')
}

const MyTimetablePage = () => {
  const [curSemester, setCurSemester] = useState(0)
  const [curIndex, setCurIndex] = useState(0)
  const semesterList = timetablePreprocess(dummyTimetableList)

  return (
    <>
      <div className={css({ display: 'flex', flexDir: 'row', justifyContent: 'space-between', my: 11 })}>
        <div className={css({ display: 'flex', flexDir: 'row', gap: 5 })}>
          <div className={css({ color: 'black.2', fontSize: 32, fontWeight: '800', wordWrap: 'break-word' })}>
            My schedule
          </div>
          <TimetableDropdown semesterList={semesterList} curSemester={curSemester} setCurSemester={setCurSemester} />
        </div>
        <div className={css({ display: 'flex', flexDir: 'row', gap: 2.5 })}>
          <div className={css(ToolbarBtn.raw({ back: 'white' }))}>Link</div>
          <div className={css(ToolbarBtn.raw({ back: 'white', icon: true }))}>
            <Download />
          </div>
        </div>
      </div>
      <div
        className={css({
          display: 'flex',
          flexDir: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 5,
          h: 11,
        })}
      >
        <div className={css({ display: 'flex', flexDir: 'row', gap: 5, alignItems: 'center' })}>
          <button
            onClick={handleCreateTimetableBtn}
            className={css({
              h: 9,
              w: 9,
              cursor: 'pointer',
              bgColor: 'red.2',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              rounded: 10,
              color: 'white',
              overflow: 'hidden',
              position: 'relative',
              _hover: {
                boxShadow: '0px 0px 4px rgba(231, 0, 0, 0.70)',
              },
            })}
          >
            <div
              className={css({
                position: 'absolute',
                h: 9,
                w: 9,
                bg: 'linear-gradient(0deg, black 35%, rgba(0, 0, 0, 0.20) 88%)',
                opacity: 0.2,
                zIndex: 1,
              })}
            />
            <Plus className={css({ zIndex: 2 })} />
          </button>
          <div className={css({ display: 'flex', flexDir: 'row', gap: 2.5 })}>
            {semesterList[curSemester].timetables.map((timetable, ind) => {
              return (
                <SelectTimetableBtn
                  key={ind}
                  timetableInfo={timetable}
                  curInd={curIndex}
                  timetableInd={ind}
                  setCurIndex={setCurIndex}
                />
              )
            })}
          </div>
        </div>
        <button className={MainPinBtn({ main: semesterList[curSemester].timetables[curIndex].isPin })}>
          <Check size={22} />
          Main
        </button>
      </div>
      <TimeTable
        semester={semesterList[curSemester].semester}
        year={semesterList[curSemester].year}
        timetableID={semesterList[curSemester].timetables[curIndex].timetableID}
      />
    </>
  )
}

export default MyTimetablePage
