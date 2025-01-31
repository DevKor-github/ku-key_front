import { Palette } from 'lucide-react'

import * as s from './style.css'

import ColorSelector from '@/components/timetable/Button/ColorSelector'
import { ColorType } from '@/types/timetable'
import { ColorTypeArr } from '@/util/timetableUtil'

const ColorChangeModal = ({
  closeModal,
  timetableId,
  curColor,
}: {
  closeModal: () => void
  timetableId: number
  curColor: ColorType
}) => {
  return (
    <>
      <div className={s.TitleWrapper}>
        <Palette size={58} className={s.Icon} />
        <div className={s.Title}>Color</div>
      </div>
      <div className={s.Contents}>
        {ColorTypeArr.map((color, index) => {
          return (
            <ColorSelector
              key={index}
              colorTheme={color}
              closeModal={closeModal}
              timetableId={timetableId}
              isSelected={curColor === color}
            />
          )
        })}
      </div>
    </>
  )
}

export default ColorChangeModal
