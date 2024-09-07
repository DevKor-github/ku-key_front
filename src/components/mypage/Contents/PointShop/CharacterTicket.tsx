import { css, cva, cx } from '@styled-stytem/css'
import { shadow } from '@styled-stytem/recipes'

import Sugar from '@/assets/Sugar_sm.png'
import AlertModal from '@/components/ui/modal/AlertModal'
import { useModal } from '@/util/useModal'

const COST = [200, 0, 30, 100, 200, 300, 400]

const ButtonStyle = cva({
  base: {
    fontSize: 16,
    fontWeight: 600,
    bgColor: 'red.2',
    py: '3px',
    px: 3,
    rounded: 'full',
    color: 'white',
    cursor: 'pointer',
  },
  variants: {
    visible: {
      true: {
        visibility: 'visible',
      },
      false: {
        visibility: 'hidden',
      },
    },
  },
})

interface CharacterTicketProps {
  level: number
  myLevel?: number
  selectedLevel?: number
  purchase: (cost: number, type: 'CHARACTER_EVOLUTION' | 'CHARACTER_TYPE_CHANGE') => void
  handleApply: (target: number) => void
}
const CharacterTicket = ({ level, myLevel = 0, purchase, selectedLevel = 0, handleApply }: CharacterTicketProps) => {
  const { modalRef, isOpen, handleOpen, handleLayoutClose, handleButtonClose } = useModal()

  const canBuy = level === myLevel + 1 || level === 0

  const handleClick = () => {
    if (canBuy) {
      handleOpen()
    }
  }

  const handlePurchase = () => {
    if (level === 0) {
      purchase(COST[level], 'CHARACTER_TYPE_CHANGE')
    } else if (level === myLevel + 1) {
      purchase(COST[level], 'CHARACTER_EVOLUTION')
    }
    handleButtonClose()
  }

  return (
    <>
      <div className={css({ display: 'flex', flexDir: 'column', gap: 2, alignItems: 'center' })}>
        <div
          className={cx(
            css({
              w: '189px',
              h: '189px',
              bgColor: 'white',
              rounded: 10,
              position: 'relative',
            }),
            shadow(),
          )}
        >
          {level !== 0 && (
            <div
              className={css({
                position: 'absolute',
                top: 2.5,
                left: 2.5,
                rounded: 6,
                bgColor: 'darkGray.1',
                px: '9px',
                py: '2px',
                fontSize: 16,
                fontWeight: 600,
                color: 'white',
              })}
            >
              Lv.{level}
            </div>
          )}
          {(level === 0 || level > myLevel) && (
            <div
              className={css({
                position: 'absolute',
                top: 2.5,
                right: 2.5,
                px: '6px',
                color: 'black',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              })}
            >
              <img src={Sugar} alt="sugar" />
              <span className={css({ fontSize: 18, fontWeight: 700, lineHeight: 1 })}>{COST[level]}</span>
            </div>
          )}
          {canBuy && (
            <button
              className={cx(
                ButtonStyle(),
                css({ position: 'absolute', bottom: '18px', left: '50%', transform: 'translate3d(-50%, 0, 0)' }),
              )}
              onClick={handleClick}
            >
              Buy
            </button>
          )}
        </div>
        {
          <button
            className={ButtonStyle({ visible: selectedLevel !== level && level <= myLevel })}
            onClick={() => handleApply(level)}
          >
            Apply
          </button>
        }
      </div>
      <AlertModal
        modalRef={modalRef}
        title="Would you like to purchase this item?"
        content={`This item will begin as soon as you purchase it.`}
        closeText="Cancel"
        confirmText="BUY"
        onConfirm={handlePurchase}
        isOpen={isOpen}
        handleLayoutClose={handleLayoutClose}
        handleButtonClose={handleButtonClose}
      />
    </>
  )
}

export default CharacterTicket
