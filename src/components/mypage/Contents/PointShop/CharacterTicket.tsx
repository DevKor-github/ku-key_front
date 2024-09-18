import { css, cva, cx } from '@styled-system/css'
import { shadow } from '@styled-system/recipes'

import Sugar from '@/assets/Sugar_sm.png'
import AlertModal from '@/components/ui/modal/AlertModal'
import { characterConfig } from '@/components/ui/profile/CharacterConfig'
import { CharacterType } from '@/types/community'
import { useModal } from '@/util/useModal'

const COST = [200, 0, 30, 100, 200, 300, 400]

const ButtonStyle = cva({
  base: {
    fontSize: { base: 16, mdDown: 11 },
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
  myCharacterType: CharacterType
}
const CharacterTicket = ({
  level,
  myLevel = 0,
  purchase,
  selectedLevel = 0,
  handleApply,
  myCharacterType,
}: CharacterTicketProps) => {
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
              w: { base: '189px', mdDown: '120px' },
              h: { base: '189px', mdDown: '120px' },
              bgColor: 'white',
              rounded: 10,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }),
            shadow(),
          )}
        >
          {/* 캐릭터 이미지 */}
          {characterConfig[myCharacterType][level] && (
            <img
              src={characterConfig[myCharacterType][level]}
              alt="character ticket"
              className={css({ w: '150px', zIndex: 1 })}
            />
          )}
          {/* 미구매 항목 블러 */}
          {(myLevel < level || level === 0) && (
            <div
              className={cva({
                base: {
                  position: 'absolute',
                  zIndex: 2,
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                },
                variants: {
                  isEvolution: {
                    true: {
                      bg: 'rgba(0, 0, 0, 0.30)',
                      backdropFilter: 'blur(7.5px)',
                    },
                    false: {
                      bgColor: '#c2abab',
                    },
                  },
                },
              })({ isEvolution: level !== 0 })}
            />
          )}
          {/* 캐릭터 없는 애들 한 해 상품명 */}
          {(level === 6 || level === 0) && (
            <p
              className={css({
                fontFamily: 'SBAggroB',
                zIndex: 3,
                color: 'white',
                textAlign: 'center',
                fontSize: { base: 20, mdDown: 12 },
                fontWeight: 400,
                letterSpacing: '-0.4px',
                lineHeight: 1.1,
              })}
            >
              {level === 0 ? (
                <>
                  NEW
                  <br />
                  COOKIE
                </>
              ) : (
                <>SPECIAL</>
              )}
            </p>
          )}
          {/* 레벨 태그 */}
          {level !== 0 && (
            <div
              className={css({
                position: 'absolute',
                top: { base: 2.5, mdDown: 1 },
                left: { base: 2.5, mdDown: 1 },
                rounded: 6,
                bgColor: 'darkGray.1',
                px: '9px',
                py: '2px',
                fontSize: { base: 16, mdDown: 11 },
                fontWeight: 600,
                color: 'white',
                zIndex: 3,
              })}
            >
              Lv.{level}
            </div>
          )}
          {/* 가격 태그 */}
          {(level === 0 || level > myLevel) && (
            <div
              className={css({
                position: 'absolute',
                top: { base: 2.5, mdDown: 1 },
                right: { base: 2.5, mdDown: 1 },
                px: '6px',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: { base: 1, mdDown: 0.25 },
                zIndex: 3,
              })}
            >
              <img src={Sugar} alt="sugar" />
              <span className={css({ fontSize: { base: 18, mdDown: 11 }, fontWeight: 700, lineHeight: 1 })}>
                {COST[level]}
              </span>
            </div>
          )}
          {/* 구매 버튼 */}
          {canBuy && (
            <button
              className={cx(
                ButtonStyle(),
                css({
                  position: 'absolute',
                  bottom: { base: '18px', mdDown: 2 },
                  left: '50%',
                  transform: 'translate3d(-50%, 0, 0)',
                  zIndex: 3,
                }),
              )}
              onClick={handleClick}
            >
              Buy
            </button>
          )}
        </div>
        <button
          className={ButtonStyle({ visible: selectedLevel !== level && level <= myLevel })}
          onClick={() => handleApply(level)}
        >
          Apply
        </button>
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
