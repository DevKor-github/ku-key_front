import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { css } from '@styled-stytem/css'
import { ChevronDown } from 'lucide-react'

import { Semester } from '@/pages/Timetable/MyTimetablePage'

interface TimetableDropdownProps {
  semesterList: Semester[]
  curSemester: number
  setCurSemester: React.Dispatch<React.SetStateAction<number>>
}

const TimetableDropdown = ({ semesterList, curSemester, setCurSemester }: TimetableDropdownProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className={css({
            w: 65,
            rounded: 10,
            border: '1px {colors.lightGray.2} solid',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2.5,
            outline: 0,
            cursor: 'pointer',
          })}
        >
          <div className={css({ color: 'darkGray.2', fontSize: 20, fontWeight: 700, wordWrap: 'break-word' })}>
            {`${semesterList[curSemester].year} ${semesterList[curSemester].semester} semester`}
          </div>
          <ChevronDown className={css({ color: 'darkGray.2' })} />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={6}
          className={css({
            w: 65,
            border: '1px {colors.lightGray.1} solid',
            bgColor: 'bg',
            rounded: 10,
          })}
        >
          {semesterList.map((semester, ind) => {
            return (
              <DropdownMenu.Item
                key={ind}
                className={css({
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  py: 3.5,
                  color: 'darkGray.1',
                  fontSize: 18,
                  fontWeight: 500,
                  wordWrap: 'break-word',
                  rounded: 10,
                  border: ind == curSemester ? '1px {colors.darkGray.2} solid' : 'none',
                  outline: 0,
                  cursor: 'pointer',
                })}
                onClick={() => {
                  setCurSemester(ind)
                }}
              >{`${semester.year} ${semester.semester} semester`}</DropdownMenu.Item>
            )
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default TimetableDropdown
