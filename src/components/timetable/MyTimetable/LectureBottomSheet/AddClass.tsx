import { css, cva } from '@styled-stytem/css'
import { Search } from 'lucide-react'
import { useCallback, useState } from 'react'
import { createPortal } from 'react-dom'

import { useGetByCourseCode } from '@/api/hooks/course'
import { usePostCourse } from '@/api/hooks/timetable'
import SearchLectureCard from '@/components/timetable/MyTimetable/LectureBottomSheet/SearchLectureCard'
import TimetableDropdown from '@/components/timetable/TimetableDropdown'
import { filterTypeMap } from '@/util/timetableUtil'

const selectFilterBtnStyle = cva({
  base: {
    color: 'lightGray.1',
    fontSize: 18,
    fontWeight: 500,
    border: '1px solid {colors.lightGray.1}',
    px: 2.5,
    py: 1.5,
    rounded: 'full',
    bgColor: 'bg.gray',
    cursor: 'pointer',
    transition: 'background 0.256s, color 0.256s, border 0.256s',
  },
  variants: {
    active: {
      true: {
        bgColor: 'bg.red.1',
        color: 'red.1',
        borderColor: 'red.1',
      },
    },
  },
})

interface AddClassProps {
  timetableId: number
}

const AddClass = ({ timetableId }: AddClassProps) => {
  const categoryList = ['All Class', 'Major', 'General Studies', 'Academic Foundations']

  const [curCategory, setCurCategory] = useState(0)
  const [curFilter, setCurFilter] = useState<'course' | 'professor' | 'code'>('code')

  const [inputKeyword, setInputKeyword] = useState('')

  const [codeKeyword, setCodeKeyword] = useState('')

  const { data: searchByCodeData } = useGetByCourseCode({ courseCode: codeKeyword })
  const { mutate: postCourse } = usePostCourse()

  const addCourse = useCallback(
    (courseId: number) => {
      postCourse({ courseId, timetableId })
    },
    [postCourse, timetableId],
  )

  return (
    <>
      <div className={css({ display: 'flex', flexDir: 'column', h: '100%', gap: 2.5 })}>
        <div className={css({ display: 'flex', flexDir: 'column', gap: 2.5 })}>
          <div className={css({ display: 'flex', justifyContent: 'space-between' })}>
            <div className={css({ display: 'flex', gap: 3.5 })}>
              <TimetableDropdown dropdownList={categoryList} curIndex={curCategory} setCurIndex={setCurCategory} />
            </div>
            <div className={css({ display: 'flex', gap: 3.5, justifyContent: 'center' })}>
              <div
                className={css({
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'darkGray.2',
                  fontSize: 18,
                })}
              >
                Filtering
              </div>
              <div className={css({ display: 'flex', justifyContent: 'center', gap: 2.5, alignItems: 'center' })}>
                <button
                  className={selectFilterBtnStyle({ active: curFilter === 'course' })}
                  onClick={() => setCurFilter('course')}
                >
                  {filterTypeMap['course']}
                </button>
                <button
                  className={selectFilterBtnStyle({ active: curFilter === 'professor' })}
                  onClick={() => setCurFilter('professor')}
                >
                  {filterTypeMap['professor']}
                </button>
                <button
                  className={selectFilterBtnStyle({ active: curFilter === 'code' })}
                  onClick={() => setCurFilter('code')}
                >
                  {filterTypeMap['code']}
                </button>
              </div>
            </div>
          </div>
          <form
            className={css({
              display: 'flex',
              justifyContent: 'space-between',
              bgColor: 'bg.gray',
              rounded: 10,
              border: '1px {colors.lightGray.1} solid',
              px: 5,
              py: 3,
            })}
            onSubmit={e => {
              e.preventDefault()
              switch (curFilter) {
                case 'code':
                  setCodeKeyword(inputKeyword)
              }
              setInputKeyword('')
            }}
          >
            <input
              className={css({
                border: 'none',
                outline: 'none',
                color: 'black.2',
                fontSize: 18,
                fontWeight: 500,
                flexGrow: 1,
              })}
              onChange={e => setInputKeyword(e.target.value)}
              value={inputKeyword}
              placeholder={filterTypeMap[curFilter]}
            />
            <button type="submit" className={css({ cursor: 'pointer' })}>
              <Search />
            </button>
          </form>
        </div>
        <div className={css({ overflow: 'scroll', display: 'flex', flexDir: 'column', gap: 5 })}>
          {searchByCodeData?.map((data, index) => <SearchLectureCard key={index} data={data} addCourse={addCourse} />)}
        </div>
      </div>
      {curCategory !== 0 &&
        createPortal(
          <button
            className={css({
              position: 'fixed',
              top: 0,
              left: 0,
              display: 'flex',
              w: '100vw',
              h: '100vh',
              bgColor: '#00000066',
              zIndex: 105,
            })}
            onClick={() => setCurCategory(0)}
          ></button>,
          document.body,
        )}
    </>
  )
}

export default AddClass
