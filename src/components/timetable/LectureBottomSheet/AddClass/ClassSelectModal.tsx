import { css, cx } from '@styled-stytem/css'
import { shadow } from '@styled-stytem/recipes'

import MajorList from '@/components/timetable/LectureBottomSheet/AddClass/MajorList'
import { categoryObject } from '@/lib/constants/category'

interface ClassSelectModalProps {
  category: 'All Class' | 'Major' | 'General Studies' | 'Academic Foundations'
  handleMajorBtn: (classification: string) => void
  handleQuitModal: () => void
}
const ClassSelectModal = ({ category, handleMajorBtn, handleQuitModal }: ClassSelectModalProps) => {
  return (
    <div // eslint-disable-line
      className={css({
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        w: '100vw',
        h: '100vh',
        bgColor: '#00000066',
        zIndex: 105,
        justifyContent: 'center',
        alignItems: 'center',
      })}
      onClick={() => handleQuitModal()}
    >
      <div
        className={cx(
          shadow(),
          css({
            rounded: 20,
            display: 'flex',
            flexDir: 'column',
            bgColor: 'white',
            py: 8,
            px: 3,
            gap: 5,
            alignItems: 'center',
          }),
        )}
      >
        <div className={css({ color: 'darkGray.2', fontWeight: 700, fontSize: 24 })}>{category}</div>
        <ul className={css({ h: 60, overflow: 'scroll', display: 'flex', flexDir: 'column', gap: 1, px: 7, w: 94 })}>
          {Object.entries(categoryObject).map(([college, majors], ind) => (
            <MajorList
              key={ind}
              college={college}
              majors={majors}
              handleMajorBtn={handleMajorBtn}
              isAcademicFoundation={category === 'Academic Foundations'}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ClassSelectModal
