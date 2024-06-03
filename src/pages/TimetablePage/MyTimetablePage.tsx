import { css, cva } from '@styled-stytem/css'
import { Check, Download, Plus } from 'lucide-react'
import { useState } from 'react'

import { useGetTimetableList, usePostTimetable, useUpdateMainTable } from '@/api/hooks/timetable'
import TimeTable from '@/components/timetable'
import SelectTimetableBtn from '@/components/timetable/SelectTimetableBtn'
import TimetableDropdown from '@/components/timetable/TimetableDropdown'
import { ShareBtn } from '@/pages/TimetablePage'
import { timetablePreprocess } from '@/util/timetableUtil'

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
    transition: 'border 0.256s, color 0.256s',
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

const MyTimetablePage = () => {
  const [curSemester, setCurSemester] = useState(0)
  const [curIndex, setCurIndex] = useState(0)
  const { data: timetableList, isPending } = useGetTimetableList()
  const semesterList = timetablePreprocess(timetableList)
  const { mutate: createTimetable, isPending: isCreateTimetablePending } = usePostTimetable()
  const { mutate: updateMainTable } = useUpdateMainTable()

  const handleCreateTimetableBtn = () => {
    createTimetable({
      tableName: '새 시간표',
      semester: semesterList[curSemester].semester,
      year: semesterList[curSemester].year,
    })
  }

  if (isPending) {
    return <div>로딩 중</div>
  }

  const curSemesterTimetableLen = semesterList[curSemester].timetables.length

  if (!isCreateTimetablePending && curSemesterTimetableLen === 0) {
    // 이거 왜 isCreateTimetablePending 옵션 빼면 52번이나 실행되는거지
    createTimetable({
      tableName: '임의로만든',
      semester: semesterList[curSemester].semester,
      year: semesterList[curSemester].year,
    })
    return <div>로딩 중. 시간표 없음</div>
  }

  const curTimetable = semesterList[curSemester].timetables[curIndex]

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
              transition: 'box-shadow 0.256s',
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
                  totalLen={curSemesterTimetableLen}
                />
              )
            })}
          </div>
        </div>
        <button
          className={MainPinBtn({ main: curTimetable.mainTimeTable })}
          onClick={() => {
            if (!curTimetable.mainTimeTable) {
              updateMainTable({
                semester: curTimetable.semester,
                year: curTimetable.year,
                timeTableId: curTimetable.tableId,
              })
            }
          }}
        >
          <Check size={22} />
          Main
        </button>
      </div>
      <TimeTable timetable={curTimetable} />
    </>
  )
}

export default MyTimetablePage
