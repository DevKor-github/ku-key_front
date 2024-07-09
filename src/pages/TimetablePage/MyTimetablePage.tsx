import { css } from '@styled-stytem/css'
import { toPng } from 'html-to-image'
import { Download } from 'lucide-react'
import { useCallback, useRef, useState } from 'react'

import { useDeleteTimetable, useGetUserTimetableList } from '@/api/hooks/timetable'
import TimeTable from '@/components/timetable'
import StatusBar from '@/components/timetable/MyTimetable/StatusBar'
import NullTable from '@/components/timetable/NullTable'
import ShareBtn from '@/components/timetable/ShareBtn'
import TimetableDropdown from '@/components/timetable/TimetableDropdown'
import { timetablePreprocess } from '@/util/timetableUtil'

const MyTimetablePage = () => {
  const { data: timetableList } = useGetUserTimetableList()
  const { mutate: deleteTimetable } = useDeleteTimetable()

  const imgRef = useRef<HTMLDivElement>(null)
  const [curSemester, setCurSemester] = useState(0)
  const [curIndex, setCurIndex] = useState(0)

  const semesterList = timetablePreprocess(timetableList)

  const setSemesterIndex = useCallback(
    (toIndex: number) => {
      setCurSemester(toIndex)
    },
    [setCurSemester],
  )
  const setTableIndex = useCallback(
    (toIndex: number) => {
      setCurIndex(toIndex)
    },
    [setCurIndex],
  )

  const deleteTimetableHandler = useCallback(
    (timetableId: number) => {
      if (curIndex !== 0) {
        setCurIndex(prev => prev - 1)
      }
      deleteTimetable({ timetableId })
    },
    [setCurIndex, deleteTimetable, curIndex],
  )

  const convertHtmlToImage = useCallback(() => {
    if (imgRef.current) {
      toPng(imgRef.current, { cacheBust: false })
        .then(dataUrl => {
          const link = document.createElement('a')
          link.download = 'my-timetable.png'
          link.href = dataUrl
          link.click()
        })
        .catch(() => {
          // todo: 에러 핸들링
        })
    }
  }, [])

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
            setCurSemester={setSemesterIndex}
            setCurIndexZero={() => setTableIndex(0)}
          />
        </div>
        <div className={css({ display: 'flex', flexDir: 'row', gap: 2.5 })}>
          <ShareBtn icon={true} shareHandler={convertHtmlToImage}>
            <Download />
          </ShareBtn>
        </div>
      </div>
      <StatusBar curSemester={semesterList[curSemester]} curIndex={curIndex} setCurIndex={setTableIndex} />
      {semesterList[curSemester].timetables.length === 0 ? (
        <NullTable />
      ) : (
        <TimeTable
          ref={imgRef}
          timetable={semesterList[curSemester].timetables[curIndex]}
          deleteTimetableHandler={deleteTimetableHandler}
        />
      )}
    </>
  )
}

export default MyTimetablePage
