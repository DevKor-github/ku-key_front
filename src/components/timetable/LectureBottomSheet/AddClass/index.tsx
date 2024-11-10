import { css } from '@styled-system/css'
import { isAxiosError } from 'axios'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { match } from 'ts-pattern'

import { usePostCourse } from '@/api/hooks/timetable'
import Dropdown from '@/components/timetable/Dropdown'
import ClassSelectModal from '@/components/timetable/LectureBottomSheet/AddClass/ClassSelectModal'
import FilterSelector from '@/components/timetable/LectureBottomSheet/AddClass/FilterSelector'
import SearchLectureCard from '@/components/timetable/LectureBottomSheet/AddClass/SearchLectureCard'
import SearchBox from '@/components/timetable/SearchBox'
import { FilterType, SemesterType } from '@/types/timetable'
import { useCourseSearch, useCourseSearchProps } from '@/util/hooks/useCourseSearch'
import useIntersect from '@/util/hooks/useIntersect'
import { filterTypeMap } from '@/util/timetableUtil'

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
  const initialQuery: useCourseSearchProps = useMemo(
    () => ({
      category: 'All Class',
      filter: 'code',
      queryKeyword: '',
      classification: null,
      year,
      semester,
    }),
    [year, semester],
  )

  const [isSearchAvailable, setIsSearchAvailable] = useState(true)
  // 검색 Filter
  const [curFilter, setCurFilter] = useState<'course' | 'professor' | 'code'>('code')
  // 포괄 카테고리 (0:All, 1:Major, 2:General, 3:Academic)
  const [curCategory, setCurCategory] = useState(0)
  // 세부 카테고리 (포괄 카테고리가 1 / 3 일때만 존재, 그 이외에는 null)
  const [curClassification, setCurClassification] = useState<string | null>(null)
  // 세부 카테고리 지정 모달의 열림 여부
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [query, setQuery] = useState<useCourseSearchProps>(initialQuery)

  const { data: searchData, error, fetchNextPage, hasNextPage, isFetching } = useCourseSearch(query)
  const { mutate: postCourse } = usePostCourse()

  const fetchNextRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target)
    if (hasNextPage && !isFetching) fetchNextPage()
  })

  useEffect(() => {
    setQuery(prevQuery => ({
      ...prevQuery,
      year,
      semester,
    }))
  }, [year, semester])

  useEffect(() => {
    setTimeout(() => {
      scrollSectionRef.current && scrollSectionRef.current.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, 100)
  }, [query])

  const addCourse = useCallback(
    (courseId: number) => {
      postCourse(
        { courseId, timetableId },
        {
          onError: error => {
            if (isAxiosError(error)) alert(error.response?.data.message)
          },
        },
      )
    },
    [postCourse, timetableId],
  )

  const handleDropdown = useCallback(
    (toIndex: number) => {
      setCurCategory(toIndex)
      if (toIndex === 1 || toIndex === 3) {
        // Major or Academic Foundation
        setIsModalOpen(true)
      } else {
        setCurClassification(null)
        setIsSearchAvailable(true)
        if (toIndex === 0) {
          // All
          setQuery(initialQuery)
          setCurFilter('code')
        } else if (toIndex === 2) {
          // General
          setQuery({ ...initialQuery, category: 'General Studies' })
          setCurFilter('course')
        }
      }
    },
    [setCurCategory, setCurClassification, setIsModalOpen, initialQuery],
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
          year,
          semester,
        })
      } else {
        setQuery({
          queryKeyword: '',
          filter: 'course',
          category: 'Major',
          classification,
          year,
          semester,
        })
        setIsSearchAvailable(true)
        setCurFilter('course')
      }
    },
    [curCategory, year, semester],
  )

  const handleFilterSelector = useCallback(
    (filter: FilterType) => {
      match(filter)
        .with('code', () => {
          setCurFilter('code')
          setCurCategory(0)
          setCurClassification(null)
          setQuery(initialQuery)
        })
        .otherwise(targetFilter => {
          setCurFilter(targetFilter)
          if (curCategory === 0) {
            setCurCategory(2)
            setQuery({ ...initialQuery, filter: targetFilter, category: 'General Studies' })
          } else {
            setQuery({
              queryKeyword: '',
              filter: targetFilter,
              category: categoryList[curCategory],
              classification: curClassification,
              year,
              semester,
            })
          }
        })
    },
    [curCategory, curClassification, year, semester, initialQuery],
  )

  const handleSearchBoxOnSubmit = useCallback(
    (queryKeyword: string) => {
      setQuery({
        queryKeyword,
        filter: curFilter,
        category: categoryList[curCategory],
        classification: curClassification,
        year,
        semester,
      })
    },
    [curFilter, curCategory, curClassification, year, semester],
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
                    maxW: '150px',
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
          {isSearchAvailable && <SearchBox placeholder={filterTypeMap[curFilter]} onSubmit={handleSearchBoxOnSubmit} />}
        </div>
        {isAxiosError(error) ? (
          <div className={SearchMessageStyle}>{error.response?.data.message}</div>
        ) : searchData === undefined ? (
          <div className={SearchMessageStyle}></div>
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
            curClassification={curClassification}
          />,
          document.body,
        )}
    </>
  )
}

export default AddClass
