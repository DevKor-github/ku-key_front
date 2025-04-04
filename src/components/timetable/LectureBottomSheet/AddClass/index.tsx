import { css } from '@styled-system/css'
import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { toast } from 'sonner'

import ErrorBoundarySuspense from '@/common/components/ErrorBoundarySuspense'
import ClassSelectModal from '@/components/timetable/LectureBottomSheet/AddClass/ClassSelectModal'
import {
  COURSE_CATEGORY_LIST,
  CourseQueryInterface,
} from '@/components/timetable/LectureBottomSheet/AddClass/constants'
import CourseSearchDataList from '@/components/timetable/LectureBottomSheet/AddClass/CourseSearchDataList'
import SearchArea from '@/components/timetable/LectureBottomSheet/AddClass/SearchArea'
import { LoadingSpinner } from '@/components/ui/spinner'
import Toast from '@/components/ui/toast'
import { SemesterType } from '@/types/timetable'
import { useQueryParams } from '@/util/hooks/useQueryParams'

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

  const [searchQuery, search] = useQueryParams<CourseQueryInterface>()

  useEffect(() => {
    setTimeout(() => {
      scrollSectionRef.current && scrollSectionRef.current.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, 100)
  }, [searchQuery])

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
        search({ keyword: '', category: 'All Class', classification: undefined })
        return
      }
      if (toIndex === 2) {
        // General
        search({ keyword: '', category: 'General Studies', classification: undefined })
        return
      }
    },
    [setCurCategory, setIsModalOpen, search],
  )

  const handleMajorBtn = useCallback(
    (classification: string) => {
      setIsModalOpen(false)
      search({ keyword: '', category: COURSE_CATEGORY_LIST[curCategory], classification })
    },
    [curCategory, search],
  )

  const handleSearchBoxOnSubmit = useCallback(
    (queryKeyword: string) => {
      if (queryKeyword.length !== 1) {
        // 글자수 충족 시
        search({ ...searchQuery, keyword: queryKeyword })
      } else
        toast.custom(() => <Toast message="Please enter at least two letters for your search term." type="default" />)
    },
    [search, searchQuery],
  )

  const handleQuitModal = useCallback(() => {
    setIsModalOpen(false)
    if (curCategory !== 0) setCurCategory(0)
  }, [curCategory])

  return (
    <>
      <div className={css({ display: 'flex', flexDir: 'column', h: '100%', gap: 2.5 })}>
        <SearchArea
          curCategory={curCategory}
          searchQuery={searchQuery}
          handleDropdown={handleDropdown}
          handleSearch={handleSearchBoxOnSubmit}
        />
        <ErrorBoundarySuspense
          fallback={
            <div className={css({ h: 'full', display: 'flex', justifyContent: 'center', alignItems: 'center' })}>
              <LoadingSpinner />
            </div>
          }
        >
          <CourseSearchDataList ref={scrollSectionRef} year={year} semester={semester} timetableId={timetableId} />
        </ErrorBoundarySuspense>
      </div>
      {isModalOpen &&
        createPortal(
          <ClassSelectModal
            category={COURSE_CATEGORY_LIST[curCategory]}
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
