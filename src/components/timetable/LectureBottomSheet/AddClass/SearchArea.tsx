import { css } from '@styled-system/css'

import Dropdown from '@/components/timetable/Dropdown'
import { COURSE_CATEGORY_LIST } from '@/components/timetable/LectureBottomSheet/AddClass/constants'
import SearchBox from '@/components/timetable/SearchBox'
import { CourseQueryInterface } from '@/util/hooks/useCourseSearch'

interface Props {
  curCategory: number
  searchQuery: CourseQueryInterface
  handleDropdown: (toIndex: number) => void
  handleSearch: (queryKeyword: string) => void
}
const SearchArea = ({ curCategory, searchQuery, handleDropdown, handleSearch }: Props) => {
  return (
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
            dropdownList={COURSE_CATEGORY_LIST}
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
      <SearchBox onSubmit={handleSearch} resetKeys={[searchQuery.category, searchQuery.classification]} />
    </div>
  )
}

export default SearchArea
