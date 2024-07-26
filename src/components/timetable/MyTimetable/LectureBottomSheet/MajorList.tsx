import { css } from '@styled-stytem/css'
import { motion, Variants } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'

const CollegeCategoryStyle = css({
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
  curCategory: number
}
const MajorList = ({ college, majors, handleMajorBtn, curCategory }: MajorListProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const isAcademicFoundation = curCategory === 3

  return (
    <>
      <button
        key={college}
        className={CollegeCategoryStyle}
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
                className={CollegeCategoryStyle}
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
