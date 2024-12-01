import { css } from '@styled-system/css'
import { isAxiosError } from 'axios'
import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { usePostCourse } from '@/api/hooks/timetable'
import Dropdown from '@/components/timetable/Dropdown'
import ClassSelectModal from '@/components/timetable/LectureBottomSheet/AddClass/ClassSelectModal'
import SearchLectureCard from '@/components/timetable/LectureBottomSheet/AddClass/SearchLectureCard'
import SearchBox from '@/components/timetable/SearchBox'
import { SemesterType } from '@/types/timetable'
import { useCourseSearch } from '@/util/hooks/useCourseSearch'
import useIntersect from '@/util/hooks/useIntersect'

const categoryList = ['All Class', 'Major', 'General Studies', 'Academic Foundations'] as const

const SearchMessageStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'darkGray.2',
  fontSize: 16,
  fontWeight: 600,
})

interface AddClassProps {
  timetableId: number
  year: string
  semester: SemesterType
}
const AddClass = ({ timetableId, year, semester }: AddClassProps) => {
  const scrollSectionRef = useRef<HTMLDivElement>(null)

  // 포괄 카테고리 (0:All, 1:Major, 2:General, 3:Academic)
  const [curCategory, setCurCategory] = useState(0)
  // 세부 카테고리 지정 모달의 열림 여부
  const [isModalOpen, setIsModalOpen] = useState(false)

  const {
    data: searchData,
    searchQuery,
    search,
    fetchNextPage,
    hasNextPage,
    isFetching,
    error,
  } = useCourseSearch({ year, semester })
  const { mutate: postCourse } = usePostCourse()

  const fetchNextRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target)
    if (hasNextPage && !isFetching) fetchNextPage()
  })

  useEffect(() => {
    setTimeout(() => {
      scrollSectionRef.current && scrollSectionRef.current.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, 100)
  }, [searchQuery])

  const addCourse = useCallback((courseId: number) => postCourse({ courseId, timetableId }), [postCourse, timetableId])

  const handleDropdown = useCallback(
    (toIndex: number) => {
      setCurCategory(toIndex)
      if (toIndex === 1 || toIndex === 3) {
        // Major or Academic Foundation
        setIsModalOpen(true)
        return
      }
      if (toIndex === 0) {
        // All
        search(prev => ({ ...prev, category: 'All Class', classification: null }))
        return
      }
      if (toIndex === 2) {
        // General
        search(prev => ({ ...prev, category: 'General Studies', classification: null }))
        return
      }
    },
    [setCurCategory, setIsModalOpen, search],
  )

  const handleMajorBtn = useCallback(
    (classification: string) => {
      setIsModalOpen(false)
      search(prev => ({ ...prev, category: categoryList[curCategory], classification }))
    },
    [curCategory, search],
  )

  const handleSearchBoxOnSubmit = useCallback(
    (queryKeyword: string) => search(prev => ({ ...prev, keyword: queryKeyword })),
    [search],
  )

  const handleQuitModal = useCallback(() => {
    setIsModalOpen(false)
    if (curCategory !== 0) setCurCategory(0)
  }, [curCategory])

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
              <Dropdown
                dropdownList={categoryList}
                curIndex={curCategory}
                setCurIndex={handleDropdown}
                canReselect={true}
              />
              {searchQuery.classification && (
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
                    maxW: '600px',
                  })}
                >
                  {searchQuery.classification}
                </div>
              )}
            </div>
          </div>
          <SearchBox onSubmit={handleSearchBoxOnSubmit} />
        </div>
        {isAxiosError(error) ? (
          <div className={SearchMessageStyle}>{error.response?.data.message}</div>
        ) : searchData.length ? (
          <div
            ref={scrollSectionRef}
            className={css({
              overflowY: 'auto',
              display: 'flex',
              flexDir: 'column',
              gap: 5,
              overscrollBehavior: 'contain',
            })}
          >
            {searchData.map((data, index) => (
              <SearchLectureCard key={index} data={data} addCourse={addCourse} />
            ))}
            <div ref={fetchNextRef} className={css({ height: 1 })} />
          </div>
        ) : (
          <div className={SearchMessageStyle}>There are no classes available for exchange students.</div>
        )}
      </div>
      {isModalOpen &&
        createPortal(
          <ClassSelectModal
            category={categoryList[curCategory]}
            handleMajorBtn={handleMajorBtn}
            handleQuitModal={handleQuitModal}
            curClassification={searchQuery.classification}
          />,
          document.body,
        )}
    </>
  )
}

export default AddClass
