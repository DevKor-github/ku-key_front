import { css } from '@styled-stytem/css'
import { useCallback, useState } from 'react'
import { createPortal } from 'react-dom'

import { usePostCourse } from '@/api/hooks/timetable'
import Dropdown from '@/components/timetable/Dropdown'
import ClassSelectModal from '@/components/timetable/LectureBottomSheet/AddClass/ClassSelectModal'
import FilterSelector from '@/components/timetable/LectureBottomSheet/AddClass/FilterSelector'
import SearchLectureCard from '@/components/timetable/LectureBottomSheet/AddClass/SearchLectureCard'
import SearchBox from '@/components/timetable/SearchBox'
import { FilterType } from '@/types/timetable'
import { filterTypeMap } from '@/util/timetableUtil'
import { useCourseSearch, useCourseSearchProps } from '@/util/useCourseSearch'

const categoryList = ['All Class', 'Major', 'General Studies', 'Academic Foundations'] as const

interface AddClassProps {
  timetableId: number
}
const AddClass = ({ timetableId }: AddClassProps) => {
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

  const { data: searchData, research } = useCourseSearch(query)
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
        // todo: filter state 어떻게 할지
        setIsSearchAvailable(false)
        setQuery({
          queryKeyword: '',
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

  const handleFilterSelector = useCallback(
    (filter: FilterType) => {
      switch (filter) {
        case 'code':
          setCurFilter('code')
          setCurCategory(0)
          setCurClassification(null)
          break
        case 'course':
        case 'professor':
          if (curCategory !== 0) {
            setCurFilter(filter)
          }
          break
      }
    },
    [curCategory],
  )

  const handleSearchBoxOnSubmit = useCallback(
    (queryKeyword: string) => {
      if (queryKeyword === query.queryKeyword) {
        research()
      }
      setQuery({
        queryKeyword,
        filter: curFilter,
        category: categoryList[curCategory],
        classification: curClassification,
      })
    },
    [curFilter, curCategory, curClassification, research, query],
  )

  const handleQuitModal = useCallback(() => {
    setIsModalOpen(false)
    if (curCategory !== 0 && curClassification === null) {
      setCurCategory(0)
    }
  }, [curCategory, curClassification])

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
            <FilterSelector
              curFilter={curFilter}
              curCategory={curCategory}
              handleFilterSelector={handleFilterSelector}
            />
          </div>
          {/* todo: 검색창 비활성화 디자인 */}
          {isSearchAvailable && <SearchBox placeholder={filterTypeMap[curFilter]} onSubmit={handleSearchBoxOnSubmit} />}
        </div>
        <div className={css({ overflow: 'scroll', display: 'flex', flexDir: 'column', gap: 5 })}>
          {searchData?.data.map((data, index) => <SearchLectureCard key={index} data={data} addCourse={addCourse} />)}
        </div>
      </div>
      {isModalOpen &&
        createPortal(
          <ClassSelectModal
            category={categoryList[curCategory]}
            handleMajorBtn={handleMajorBtn}
            handleQuitModal={handleQuitModal}
          />,
          document.body,
        )}
    </>
  )
}

export default AddClass
