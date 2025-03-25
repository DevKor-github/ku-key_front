import { useState } from 'react'

import * as s from './style.css'

import Dropdown from '@/components/timetable/Dropdown'
import CloseButton from '@/domain/Timetable/components/LectureBottomSheet/CloseButton'
import { COURSE_CATEGORY_LIST, CourseQueryInterface } from '@/domain/Timetable/constants'
import Input from '@/ui/Input'
import { useDeepCompareEffect } from '@/util/hooks/useDeepCompare'

interface Props {
  curCategory: number
  searchQuery: CourseQueryInterface
  handleDropdown: (toIndex: number) => void
  handleSearch: (queryKeyword: string) => void
  closeModal: () => void
}
const SearchArea = ({ curCategory, searchQuery, handleDropdown, handleSearch, closeModal }: Props) => {
  const [inputKeyword, setInputKeyword] = useState('')

  useDeepCompareEffect(() => {
    setInputKeyword('')
  }, [searchQuery.category, searchQuery.classification])

  return (
    <div className={s.Wrapper}>
      <div className={s.Section}>
        <Dropdown
          dropdownList={COURSE_CATEGORY_LIST}
          curIndex={curCategory}
          setCurIndex={handleDropdown}
          canReselect={true}
        />
        {searchQuery.classification && <div className={s.CategoryChip}>{searchQuery.classification}</div>}
      </div>
      <div className={s.Section}>
        <form
          className={s.Input}
          onSubmit={event => {
            event.preventDefault()
            handleSearch(inputKeyword)
          }}
        >
          <Input
            value={inputKeyword}
            placeholder="Search by course name, professor, or course code"
            onChange={event => setInputKeyword(event.target.value)}
            variant="search"
          />
        </form>
        <CloseButton onClick={closeModal} />
      </div>
    </div>
  )
}

export default SearchArea
