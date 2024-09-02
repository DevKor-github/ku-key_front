import { css } from '@styled-stytem/css'

import AlertModal from '@/components/ui/modal/AlertModal'
import { useModal } from '@/util/useModal'

const COST = [200, 30, 100, 200, 300, 400]

interface CharacterTicketProps {
  level?: number
  purchase: (cost: number, type: 'CHARACTER_EVOLUTION' | 'CHARACTER_TYPE_CHANGE') => void
}
const CharacterTicket = ({ level = 0, purchase }: CharacterTicketProps) => {
  const { modalRef, isOpen, handleOpen, handleLayoutClose, handleButtonClose } = useModal()

  return (
    <>
      <button
        className={css({
          display: 'flex',
          p: '30px',
          gap: '30px',
          bgColor: 'white',
          rounded: 10,
          border: '{colors.lightGray.1} 1px solid',
          w: '400px',
          cursor: 'pointer',
          alignItems: 'stretch',
        })}
        onClick={handleOpen}
      >
        <div className={css({ w: '110px', h: '110px', bgColor: 'red.3', rounded: 5, flexShrink: 0 })} />
        <div className={css({ display: 'flex', flexDir: 'column', justifyContent: 'space-between' })}>
          <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'flex-start' })}>
            <h3
              className={css({
                fontSize: 24,
                fontWeight: 500,
              })}
            >
              {level !== 0 ? `Evolution Lv.${level + 1}` : 'Character change'}
            </h3>
            <p
              className={css({ color: 'darkGray.1', fontSize: 16, fontWeight: 400, lineHeight: 1, textAlign: 'left' })}
            >
              {level !== 0 ? 'it evolves your character' : 'It changes your character into a different type'}
            </p>
          </div>
          <div className={css({ my: 1, display: 'flex', gap: 3, alignItems: 'center' })}>
            <div className={css({ w: 6, h: 6, bgColor: 'red.3', rounded: 'full' })} />
            <div className={css({ color: 'red.1', fontSize: 20, fontWeight: 600 })}>{COST[level]}</div>
          </div>
        </div>
      </button>
      <AlertModal
        modalRef={modalRef}
        title="Would you like to purchase this item?"
        content={`This item will begin as soon as you purchase it.`}
        closeText="Cancel"
        confirmText="BUY"
        onConfirm={() => {
          purchase(COST[level], level === 0 ? 'CHARACTER_TYPE_CHANGE' : 'CHARACTER_EVOLUTION')
          handleButtonClose()
        }}
        isOpen={isOpen}
        handleLayoutClose={handleLayoutClose}
        handleButtonClose={handleButtonClose}
      />
    </>
  )
}

export default CharacterTicket
