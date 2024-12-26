import { css, cva } from '@styled-system/css'
import { motion, Variants } from 'framer-motion'
import { ChevronRight, Dot } from 'lucide-react'
import { useState } from 'react'

const CollegeCategoryStyle = cva({
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    bgColor: 'bg.gray',
    border: '1px solid {colors.lightGray.1}',
    rounded: 10,
    px: 2.5,
    py: 2,
    color: 'lightGray.1',
    fontSize: 16,
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'background 0.2s, color 0.2s, border 0.2s',
  },
  variants: {
    isOpen: {
      true: {
        bgColor: 'lightGray.2',
      },
    },
    childCategory: {
      true: {
        bgColor: 'white',
      },
    },
    isSelected: {
      true: {
        bgColor: 'darkGray.2',
        borderColor: 'darkGray.2',
        color: 'white',
      },
    },
  },
})

const ChevronVar: Variants = {
  open: {
    rotate: 90,
  },
  closed: {
    rotate: 0,
  },
}

interface MajorListProps {
  college: string
  majors: string[]
  handleMajorBtn: (classification: string) => void
  isAcademicFoundation: boolean
  curClassification: string | undefined
}

const MajorList = ({ college, majors, handleMajorBtn, isAcademicFoundation, curClassification }: MajorListProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        key={college}
        className={CollegeCategoryStyle({ isOpen, isSelected: isAcademicFoundation && curClassification === college })}
        onClick={event => {
          event.stopPropagation()
          if (isAcademicFoundation) {
            // 학문의 기초라면 추가 depth 없음
            handleMajorBtn(college)
          } else {
            setIsOpen(prev => !prev)
          }
        }}
      >
        <span
          className={css({
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          })}
        >
          {college}
        </span>
        {!isAcademicFoundation && (
          <motion.div animate={isOpen ? 'open' : 'closed'} variants={ChevronVar}>
            <ChevronRight />
          </motion.div>
        )}
      </button>
      {isOpen && (
        <>
          {majors.map((major, ind) => {
            return (
              // 모션 좀 손보기
              <motion.button
                key={ind}
                className={CollegeCategoryStyle({ childCategory: true, isSelected: curClassification === major })}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={event => {
                  event.stopPropagation()
                  handleMajorBtn(major)
                }}
              >
                <span
                  className={css({
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                  })}
                >
                  <Dot />
                  {major}
                </span>
              </motion.button>
            )
          })}
        </>
      )}
    </>
  )
}
export default MajorList
