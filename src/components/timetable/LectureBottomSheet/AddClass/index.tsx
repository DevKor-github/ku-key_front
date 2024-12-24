import { css } from '@styled-system/css'
import { Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { toast } from 'sonner'

import ClassSelectModal from '@/components/timetable/LectureBottomSheet/AddClass/ClassSelectModal'
import { COURSE_CATEGORY_LIST } from '@/components/timetable/LectureBottomSheet/AddClass/constants'
import CourseSearchDataList from '@/components/timetable/LectureBottomSheet/AddClass/CourseSearchDataList'
import SearchArea from '@/components/timetable/LectureBottomSheet/AddClass/SearchArea'
import { LoadingSpinner } from '@/components/ui/spinner'
import Toast from '@/components/ui/toast'
import { SemesterType } from '@/types/timetable'
import { useCourseSearchQuery } from '@/util/hooks/courseSearch/useCourseSearchQuery'

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

  const { searchQuery, search } = useCourseSearchQuery()

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
        search(() => ({ keyword: '', category: 'All Class', classification: null }))
        return
      }
      if (toIndex === 2) {
        // General
        search(() => ({ keyword: '', category: 'General Studies', classification: null }))
        return
      }
    },
    [setCurCategory, setIsModalOpen, search],
  )

  const handleMajorBtn = useCallback(
    (classification: string) => {
      setIsModalOpen(false)
      search(() => ({ keyword: '', category: COURSE_CATEGORY_LIST[curCategory], classification }))
    },
    [curCategory, search],
  )

  const handleSearchBoxOnSubmit = useCallback(
    (queryKeyword: string) => {
      if ((queryKeyword.length === 0 && searchQuery.category !== 'All Class') || queryKeyword.length > 2)
        // All Class가 아닌 Category에서 빈 글자 입력
        // 또는 2글자 이상 검색
        search(prev => ({ ...prev, keyword: queryKeyword }))
      else
        toast.custom(() => <Toast message="Please enter at least two letters for your search term." type="default" />)
    },
    [search, searchQuery.category],
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
        <Suspense
          fallback={
            <div className={css({ h: 'full', display: 'flex', justifyContent: 'center', alignItems: 'center' })}>
              <LoadingSpinner />
            </div>
          }
        >
          <CourseSearchDataList
            year={year}
            semester={semester}
            searchQuery={searchQuery}
            timetableId={timetableId}
            isInitial={searchQuery.category === 'All Class' && searchQuery.keyword.length === 0}
          />
        </Suspense>
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
