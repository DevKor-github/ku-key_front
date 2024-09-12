import { css, cva } from '@styled-stytem/css'
import { Plus } from 'lucide-react'

interface CreateTimetableBtnProps {
  type: 'timetable' | 'lecture'
  handleCreate: () => void
}
const CreateTimetableBtn = ({ type, handleCreate }: CreateTimetableBtnProps) => {
  return (
    <button
      onClick={handleCreate}
      className={cva({
        base: {
          cursor: 'pointer',
          display: { base: 'flex', mdDown: 'none' },
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          overflow: 'hidden',
          position: 'relative',
          transition: 'box-shadow 0.2s',
        },
        variants: {
          type: {
            timetable: {
              h: '30px',
              w: '30px',
              bgColor: 'lightGray.1',
              rounded: 'full',
              _hover: {
                boxShadow: '0px 2px 6px 0px rgba(0, 0, 0, 0.25) inset',
              },
            },
            lecture: {
              h: 9,
              w: 9,
              bgColor: 'red.2',
              rounded: 10,
              _hover: {
                boxShadow: '0px 0px 4px rgba(231, 0, 0, 0.70)',
              },
            },
          },
        },
      })({ type })}
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
