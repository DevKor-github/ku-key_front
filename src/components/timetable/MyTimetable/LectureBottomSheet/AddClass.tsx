import { css, cva, cx } from '@styled-stytem/css'
import { shadow } from '@styled-stytem/recipes'
import { Search } from 'lucide-react'
import { useCallback, useState } from 'react'
import { createPortal } from 'react-dom'

import { usePostCourse } from '@/api/hooks/timetable'
import MajorList from '@/components/timetable/MyTimetable/LectureBottomSheet/MajorList'
import SearchLectureCard from '@/components/timetable/MyTimetable/LectureBottomSheet/SearchLectureCard'
import TimetableDropdown from '@/components/timetable/TimetableDropdown'
import { categoryObject } from '@/lib/constants/category'
import { generateRandomString } from '@/util/generateRandomString'
import { filterTypeMap } from '@/util/timetableUtil'
import { useCourseSearch, useCourseSearchProps } from '@/util/useCourseSearch'

const SelectFilterBtnStyle = cva({
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
    state: {
      active: {
        bgColor: 'bg.red.1',
        color: 'red.1',
        borderColor: 'red.1',
      },
      disabled: { cursor: 'auto' },
    },
  },
})

interface AddClassProps {
  timetableId: number
}
const AddClass = ({ timetableId }: AddClassProps) => {
  const categoryList = ['All Class', 'Major', 'General Studies', 'Academic Foundations'] as const

  const [isSearchAvailable, setIsSearchAvailable] = useState(true)
  // 검색 Filter
  const [curFilter, setCurFilter] = useState<'course' | 'professor' | 'code'>('code')
  // 포괄 카테고리 (0:All, 1:Major, 2:General, 3:Academic)
  const [curCategory, setCurCategory] = useState(0)
  // 세부 카테고리 (포괄 카테고리가 1 / 3 일때만 존재, 그 이외에는 null)
  const [curClassification, setCurClassification] = useState<string | null>(null)
  // 세부 카테고리 지정 모달의 열림 여부
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [query, setQuery] = useState<useCourseSearchProps>({
    category: categoryList[0],
    filter: 'code',
    queryKeyword: '',
    classification: null,
  })
  const [inputKeyword, setInputKeyword] = useState('')

  const searchData = useCourseSearch(query)
  const { mutate: postCourse } = usePostCourse()

  const addCourse = useCallback(
    (courseId: number) => {
      postCourse({ courseId, timetableId })
    },
    [postCourse, timetableId],
  )

  const handleDropdown = useCallback(
    (toIndex: number) => {
      setCurClassification(null)
      setCurCategory(toIndex)
      if (toIndex === 1 || toIndex === 3) {
        // Major or Academic Foundation
        setIsModalOpen(true)
      } else {
        setIsSearchAvailable(true)
        if (toIndex === 0) {
          // All
          setCurFilter('code')
        } else if (toIndex === 2) {
          // General
          setCurFilter('course')
        }
      }
    },
    [setCurCategory, setCurClassification, setIsModalOpen],
  )

  const handleMajorBtn = useCallback(
    (classification: string) => {
      setIsModalOpen(false)
      setCurClassification(classification)
      if (curCategory === 3) {
        // Academic Foundation의 경우 검색이 존재하지 않음
        setIsSearchAvailable(false)
        setQuery({
          queryKeyword: generateRandomString(10),
          filter: 'course',
          category: 'Academic Foundations',
          classification,
        })
      } else {
        setIsSearchAvailable(true)
        setCurFilter('course')
      }
    },
    [curCategory],
  )

  return (
    <>
      <div className={css({ display: 'flex', flexDir: 'column', h: '100%', gap: 2.5 })}>
        <div className={css({ display: 'flex', flexDir: 'column', gap: 2.5 })}>
          <div className={css({ display: 'flex', justifyContent: 'space-between' })}>
            <div
              className={css({
                display: 'flex',
                gap: 3.5,
                alignItems: 'center',
              })}
            >
              <TimetableDropdown
                dropdownList={categoryList}
                curIndex={curCategory}
                setCurIndex={handleDropdown}
                canReselect={true}
              />
              {curClassification && (
                <div
                  className={css({
                    rounded: 'full',
                    bgColor: 'darkGray.2',
                    px: 2.5,
                    py: 1,
                    fontWeight: 700,
                    color: 'white',
                    fontSize: 12,
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    maxW: 50,
                  })}
                >
                  {curClassification}
                </div>
              )}
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
                  className={SelectFilterBtnStyle({
                    state: curFilter === 'course' ? 'active' : curCategory === 0 ? 'disabled' : undefined,
                  })}
                  onClick={() => {
                    if (curCategory !== 0) {
                      setCurFilter('course')
                    }
                  }}
                >
                  {filterTypeMap['course']}
                </button>
                <button
                  className={SelectFilterBtnStyle({
                    state: curFilter === 'professor' ? 'active' : curCategory === 0 ? 'disabled' : undefined,
                  })}
                  onClick={() => {
                    if (curCategory !== 0) {
                      setCurFilter('professor')
                    }
                  }}
                >
                  {filterTypeMap['professor']}
                </button>
                <button
                  className={SelectFilterBtnStyle({ state: curFilter === 'code' ? 'active' : undefined })}
                  onClick={() => {
                    setCurFilter('code')
                    setCurCategory(0)
                    setCurClassification(null)
                  }}
                >
                  {filterTypeMap['code']}
                </button>
              </div>
            </div>
          </div>
          {/* todo: 검색창 비활성화 디자인 */}
          {isSearchAvailable && (
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
                setQuery({
                  queryKeyword: inputKeyword,
                  filter: curFilter,
                  category: categoryList[curCategory],
                  classification: curClassification,
                })
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
          )}
        </div>
        <div className={css({ overflow: 'scroll', display: 'flex', flexDir: 'column', gap: 5 })}>
          {searchData?.data.map((data, index) => <SearchLectureCard key={index} data={data} addCourse={addCourse} />)}
        </div>
      </div>
      {isModalOpen &&
        createPortal(
          <div // eslint-disable-line
            className={css({
              position: 'fixed',
              top: 0,
              left: 0,
              display: 'flex',
              w: '100vw',
              h: '100vh',
              bgColor: '#00000066',
              zIndex: 105,
              justifyContent: 'center',
              alignItems: 'center',
            })}
            onClick={() => {
              setIsModalOpen(false)
              if (curCategory !== 0 && curClassification === null) {
                setCurCategory(0)
              }
            }}
          >
            <div
              className={cx(
                shadow(),
                css({
                  rounded: 20,
                  display: 'flex',
                  flexDir: 'column',
                  bgColor: 'white',
                  py: 8,
                  px: 3,
                  gap: 5,
                  alignItems: 'center',
                }),
              )}
            >
              <div className={css({ color: 'darkGray.2', fontWeight: 700, fontSize: 24 })}>
                {categoryList[curCategory]}
              </div>
              <ul
                className={css({ h: 60, overflow: 'scroll', display: 'flex', flexDir: 'column', gap: 1, px: 7, w: 94 })}
              >
                {Object.entries(categoryObject).map(([college, majors], ind) => (
                  <MajorList
                    key={ind}
                    college={college}
                    majors={majors}
                    handleMajorBtn={handleMajorBtn}
                    curCategory={curCategory}
                  />
                ))}
              </ul>
            </div>
          </div>,
          document.body,
        )}
    </>
  )
}

export default AddClass
