import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { css, cva } from '@styled-stytem/css'
import { ChevronDown } from 'lucide-react'

import { Semester } from '@/types/timetable'

interface TimetableDropdownProps {
  semesterList: Semester[]
  curSemester: number
  setCurSemester: React.Dispatch<React.SetStateAction<number>>
  setCurIndex: React.Dispatch<React.SetStateAction<number>>
}

const DropdownItemsStyle = cva({
  base: {
    display: 'flex',
    mt: 2.5,
    mx: 2.5,
    h: 13,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'lightGray.1',
    fontSize: 18,
    fontWeight: 700,
    wordWrap: 'break-word',
    rounded: 10,
    outline: 0,
    cursor: 'pointer',
    _hover: {
      bgColor: 'bg',
    },
  },
  variants: {
    active: {
      true: {
        bgColor: 'lightGray.1',
        color: 'white',
        pointerEvents: 'none',
      },
    },
  },
})

const TimetableDropdown = ({ semesterList, curSemester, setCurSemester, setCurIndex }: TimetableDropdownProps) => {
  return (
    <DropdownMenu.Root>
      {/* todo :: open시에 다시 닫는 ^ 기능 만들기 */}
      <DropdownMenu.Trigger asChild>
        <button
          className={css({
            w: 68,
            h: '49px',
            rounded: 10,
            border: '1px {colors.lightGray.1} solid',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2.5,
            outline: 0,
            cursor: 'pointer',
            zIndex: 30,
            bgColor: 'white',
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
          sideOffset={-49}
          className={css({
            w: 68,
            bgColor: 'white',
            rounded: 10,
            zIndex: 20,
            pb: 2.5,
            pt: '49px',
            boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
          })}
        >
          {semesterList.map((semester, ind) => {
            return (
              <DropdownMenu.Item
                key={ind}
                className={DropdownItemsStyle({ active: ind == curSemester })}
                onClick={() => {
                  setCurSemester(ind)
                  setCurIndex(0)
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
