import { css, cva, cx } from '@styled-stytem/css'
import { shadow } from '@styled-stytem/recipes'
import { motion } from 'framer-motion'
import { ChevronRight, Search } from 'lucide-react'
import { useCallback, useState } from 'react'
import { createPortal } from 'react-dom'

import { useGetByCourseCode, useGetByCourseNameInGeneral } from '@/api/hooks/course'
import { usePostCourse } from '@/api/hooks/timetable'
import SearchLectureCard from '@/components/timetable/MyTimetable/LectureBottomSheet/SearchLectureCard'
import TimetableDropdown from '@/components/timetable/TimetableDropdown'
import { categoryObject, generalStudies } from '@/lib/constants/category'
import { filterTypeMap } from '@/util/timetableUtil'

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

const CollegeCategoryStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  bgColor: 'bg.gray',
  border: '1px solid {colors.lightGray.1}',
  rounded: 10,
  px: 2.5,
  py: 2,
  color: 'lightGray.1',
  fontSize: 16,
  fontWeight: 500,
  cursor: 'pointer',
})

interface AddClassProps {
  timetableId: number
}
const AddClass = ({ timetableId }: AddClassProps) => {
  const categoryList = ['All Class', 'Major', 'General Studies', 'Academic Foundations'] as const
  const [isModalOpen, setIsModalOpen] = useState(false)
  // 대략 카테고리(0:All, 1:Major, 2:General, 3:Academic)
  const [curCategory, setCurCategory] = useState(0)
  // 세부 카테고리
  const [curClassification, setCurClassification] = useState<string | null>(null)

  const [curFilter, setCurFilter] = useState<'course' | 'professor' | 'code'>('code')

  const [inputKeyword, setInputKeyword] = useState('')

  const [codeKeyword, setCodeKeyword] = useState('')
  const [generalCourseKeyword, setGeneralCourseKeyword] = useState('')

  const { data: searchByCodeData } = useGetByCourseCode({ courseCode: codeKeyword })
  const { data: searchByCourseInKeywordData } = useGetByCourseNameInGeneral({ courseName: generalCourseKeyword })
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
      if (toIndex !== 0) setIsModalOpen(true)
    },
    [setCurCategory, setCurClassification, setIsModalOpen],
  )

  const resetKeywords = useCallback(() => {
    setCodeKeyword('')
    setGeneralCourseKeyword('')
  }, [setCodeKeyword, setGeneralCourseKeyword])

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
              <TimetableDropdown dropdownList={categoryList} curIndex={curCategory} setCurIndex={handleDropdown} />
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
              resetKeywords()
              switch (curFilter) {
                case 'code':
                  setCodeKeyword(inputKeyword)
                  break
                case 'course':
                  switch (curCategory) {
                    case 1:
                      // 전공-강의명
                      break
                    case 2:
                      // 교양-강의명
                      setGeneralCourseKeyword(inputKeyword)
                      break
                  }
                  break
                case 'professor':
                  switch (curCategory) {
                    case 1:
                      // 전공-교수명
                      break
                    case 2:
                      // 교양-교수명
                      break
                  }
                  break
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
          {searchByCourseInKeywordData?.data.map((data, index) => (
            <SearchLectureCard key={index} data={data} addCourse={addCourse} />
          ))}
          {searchByCodeData?.data.map((data, index) => (
            <SearchLectureCard key={index} data={data} addCourse={addCourse} />
          ))}
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
              <div
                className={css({ h: 60, overflow: 'scroll', display: 'flex', flexDir: 'column', gap: 1, px: 7, w: 94 })}
              >
                {curCategory === 2
                  ? generalStudies.map(category => {
                      return (
                        <button
                          key={category}
                          className={CollegeCategoryStyle}
                          onClick={event => {
                            event.stopPropagation()
                            setIsModalOpen(false)
                            setCurClassification(category)
                            setCurFilter('course')
                          }}
                        >
                          <span
                            className={css({
                              whiteSpace: 'nowrap',
                              textOverflow: 'ellipsis',
                              overflow: 'hidden',
                            })}
                          >
                            {category}
                          </span>
                        </button>
                      )
                    })
                  : Object.entries(categoryObject).map(([college]) => {
                      return (
                        <>
                          <button key={college} className={CollegeCategoryStyle}>
                            <span
                              className={css({
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                              })}
                            >
                              {college}
                            </span>
                            <motion.div>
                              <ChevronRight />
                            </motion.div>
                          </button>
                          {categoryObject[college].map(() => {
                            return <div></div>
                          })}
                        </>
                      )
                    })}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  )
}

export default AddClass
