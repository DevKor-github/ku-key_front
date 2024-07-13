import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { css, cva, cx } from '@styled-stytem/css'
import { shadow } from '@styled-stytem/recipes'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

import { Semester } from '@/types/timetable'

interface TimetableDropdownProps {
  semesterList: Semester[]
  curSemester: number
  setCurSemester: (toIndex: number) => void
  setCurIndexZero?: () => void
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
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu.Root modal={false} onOpenChange={open => setIsOpen(open)}>
      <DropdownMenu.Trigger asChild>
        <button
          className={css({
            w: 68,
            h: '49px',
            rounded: 10,
            border: '1px {colors.lightGray.1} solid',
            display: 'flex',
            justifyContent: 'space-between',
            px: 2,
            alignItems: 'center',
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
          <div
            className={css({ color: 'darkGray.2', fontSize: 20, fontWeight: 700, wordWrap: 'break-word', flexGrow: 1 })}
          >
            {`${semesterList[curSemester].year} ${semesterList[curSemester].semester} semester`}
          </div>
          <motion.div animate={isOpen ? 'open' : 'close'} variants={{ open: { rotate: 180 }, close: { rotate: 0 } }}>
            <ChevronDown className={css({ color: 'darkGray.2' })} />
          </motion.div>
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content sideOffset={-49}>
          <motion.div
            animate={{
              height: 'fit-content',
            }}
            transition={{
              duration: 0.3,
            }}
            className={cx(
              css({
                h: 0,
                overflow: 'hidden',
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
                    setCurIndexZero && setCurIndexZero()
                  }}
                >{`${semester.year} ${semester.semester} semester`}</DropdownMenu.Item>
              )
            })}
          </motion.div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default TimetableDropdown
