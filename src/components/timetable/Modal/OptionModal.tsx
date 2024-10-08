import { css, cva, cx } from '@styled-system/css'
import { shadow } from '@styled-system/recipes'
import { CaseSensitive, MessageSquare, Palette, Pencil, SquareGanttChart, Trash2 } from 'lucide-react'
import { CSSProperties, forwardRef, ReactNode } from 'react'

import ModalCard from '@/components/ui/modal'

const optBlock = css({
  w: 56,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  h: 12,
  cursor: 'pointer',
  rounded: 10,
  transition: 'background 0.256s',
  _hover: {
    bgColor: 'bg.gray',
  },
})

const optBlockInfo = css({
  display: 'flex',
  alignItems: 'center',
  gap: 2.5,
  color: 'lightGray.1',
  fontSize: 18,
  fontWeight: 700,
})

const ICON_MAP: { [key in string]: ReactNode } = {
  'Course plan': <SquareGanttChart />,
  Review: <MessageSquare />,
  Delete: <Trash2 />,
  Edit: <Pencil />,
  Color: <Palette />,
  Name: <CaseSensitive />,
}

interface OptionModalProps {
  optionHandler: { title: string; onClick: () => void }[]
  modalTitle?: string
  customStyle?: CSSProperties
  p10?: boolean
}

const OptionModal = forwardRef<HTMLDivElement, OptionModalProps>(
  ({ optionHandler, customStyle = {}, modalTitle, p10 = false }, ref) => {
    return (
      <div style={customStyle}>
        <ModalCard
          ref={ref}
          className={cx(
            cva({
              base: {
                bgColor: 'white',
                border: 'none',
                display: 'flex',
                flexDir: 'column',
                alignItems: 'center',
                gap: 2.5,
                p: 2.5,
              },
              variants: {
                p10: {
                  true: {
                    px: 10,
                    py: 7,
                  },
                },
              },
            })({ p10 }),
            shadow(),
          )}
        >
          {modalTitle && (
            <div
              className={css({
                fontSize: 24,
                fontWeight: 700,
                color: 'black.2',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textAlign: 'center',
                w: 56,
              })}
            >
              {modalTitle}
            </div>
          )}
          {optionHandler.map(({ title, onClick }, index) => (
            <button key={index} className={optBlock} onClick={onClick}>
              <div className={optBlockInfo}>
                {ICON_MAP[title]}
                {title}
              </div>
            </button>
          ))}
        </ModalCard>
      </div>
    )
  },
)

export default OptionModal
