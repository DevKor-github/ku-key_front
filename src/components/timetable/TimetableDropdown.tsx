import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { css, cva, cx } from '@styled-stytem/css'
import { shadow } from '@styled-stytem/recipes'
import { ChevronDown } from 'lucide-react'

import { Semester } from '@/types/timetable'

interface TimetableDropdownProps {
  semesterList: Semester[]
  curSemester: number
  setCurSemester: (toIndex: number) => void
  setCurIndexZero: () => void
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
    transition: 'background 0.256s',
    _hover: {
      bgColor: 'bg.gray',
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

const TimetableDropdown = ({ semesterList, curSemester, setCurSemester, setCurIndexZero }: TimetableDropdownProps) => {
  return (
    <DropdownMenu.Root modal={false}>
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
            transition: 'border 0.256s',
            _hover: {
              borderColor: 'darkGray.2',
            },
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
          className={cx(
            css({
              w: 68,
              bgColor: 'white',
              rounded: 10,
              zIndex: 20,
              pb: 2.5,
              pt: '49px',
            }),
            shadow(),
          )}
        >
          {semesterList.map((semester, index) => {
            return (
              <DropdownMenu.Item
                key={index}
                className={DropdownItemsStyle({ active: index == curSemester })}
                onClick={() => {
                  setCurSemester(index)
                  setCurIndexZero()
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
