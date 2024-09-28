import { css, cva } from '@styled-system/css'
import { Plus } from 'lucide-react'

interface CreateTimetableBtnProps {
  handleCreate: () => void
  hide?: boolean
}
const CreateTimetableBtn = ({ handleCreate, hide = false }: CreateTimetableBtnProps) => {
  return (
    <button
      onClick={handleCreate}
      className={cva({
        base: {
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          overflow: 'hidden',
          position: 'relative',
          transition: 'box-shadow 0.2s',
          h: '30px',
          w: '30px',
          bgColor: 'lightGray.1',
          rounded: 'full',
          _hover: {
            boxShadow: '0px 2px 6px 0px rgba(0, 0, 0, 0.25) inset',
          },
        },
        variants: {
          hide: {
            true: {
              display: 'none',
            },
          },
        },
      })({ hide })}
    >
      <div
        className={css({
          position: 'absolute',
          h: 9,
          w: 9,
          bg: 'linear-gradient(0deg, black 35%, rgba(0, 0, 0, 0.20) 88%)',
          opacity: 0.2,
          zIndex: 1,
        })}
      />
      <Plus className={css({ zIndex: 2 })} size={16} strokeWidth={3} />
    </button>
  )
}

export default CreateTimetableBtn
