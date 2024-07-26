import { css } from '@styled-stytem/css'
import { Plus } from 'lucide-react'

interface CreateTimetableBtnProps {
  handleCreateTimetableBtn: () => void
}
const CreateTimetableBtn = ({ handleCreateTimetableBtn }: CreateTimetableBtnProps) => {
  return (
    <button
      onClick={handleCreateTimetableBtn}
      className={css({
        h: 9,
        w: 9,
        cursor: 'pointer',
        bgColor: 'red.2',
        display: { base: 'flex', mdDown: 'none' },
        justifyContent: 'center',
        alignItems: 'center',
        rounded: 10,
        color: 'white',
        overflow: 'hidden',
        position: 'relative',
        transition: 'box-shadow 0.256s',
        _hover: {
          boxShadow: '0px 0px 4px rgba(231, 0, 0, 0.70)',
        },
      })}
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
      <Plus className={css({ zIndex: 2 })} />
    </button>
  )
}

export default CreateTimetableBtn
