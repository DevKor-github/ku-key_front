import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { css, cva, cx } from '@styled-system/css'
import { shadow } from '@styled-system/recipes'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const DropdownItemsStyle = cva({
  base: {
    display: 'flex',
    my: 2,
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
    isTimeSelector: {
      true: {
        h: 5,
        fontSize: 14,
      },
    },
  },
})

interface DropdownProps {
  dropdownList: readonly string[]
  curIndex: number
  setCurIndex: (toIndex: number) => void
  canReselect?: boolean
  isTimeSelector?: boolean
  disabled?: boolean
}

const Dropdown = ({
  dropdownList,
  curIndex,
  setCurIndex,
  canReselect = false,
  isTimeSelector = false,
  disabled = false,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu.Root modal={false} onOpenChange={open => setIsOpen(open)}>
      <DropdownMenu.Trigger asChild disabled={disabled}>
        <button
          className={cva({
            base: {
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
              bgColor: 'white',
              transition: 'border 0.256s',
              _hover: {
                borderColor: 'darkGray.2',
              },
            },
            variants: {
              isTimeSelector: {
                true: {
                  w: 26,
                },
              },
            },
          })({ isTimeSelector })}
        >
          <div
            className={css({ color: 'darkGray.2', fontSize: 20, fontWeight: 700, wordWrap: 'break-word', flexGrow: 1 })}
          >
            {dropdownList[curIndex]}
          </div>
          <motion.div animate={isOpen ? 'open' : 'close'} variants={{ open: { rotate: 180 }, close: { rotate: 0 } }}>
            <ChevronDown className={css({ color: 'darkGray.2' })} />
          </motion.div>
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content sideOffset={5} className={css({ zIndex: 105 })}>
          <motion.div
            animate={{
              height: 'fit-content',
            }}
            transition={{
              duration: 0.3,
            }}
            className={cx(
              cva({
                base: {
                  h: 0,
                  overflow: 'hidden',
                  w: 68,
                  bgColor: 'white',
                  rounded: 10,
                  py: 0.5,
                },
                variants: {
                  isTimeSelector: {
                    true: {
                      w: 26,
                    },
                  },
                },
              })({ isTimeSelector }),
              shadow(),
            )}
          >
            {dropdownList.map((content, index) => {
              return (
                <DropdownMenu.Item
                  key={index}
                  className={DropdownItemsStyle({ active: !canReselect && index == curIndex, isTimeSelector })}
                  onClick={() => {
                    setCurIndex(index)
                  }}
                >
                  {content}
                </DropdownMenu.Item>
              )
            })}
          </motion.div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default Dropdown
