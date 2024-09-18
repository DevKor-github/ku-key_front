import { css } from '@styled-system/css'
import { CircleAlert } from 'lucide-react'

import Sugar from '@/assets/Sugar_sm.png'
import Button from '@/components/ui/button'
import ModalCard from '@/components/ui/modal'
import ModalPortal, { ModalPortalProps } from '@/components/ui/modal/ModalPortal'

const HowToBox = css({
  flexGrow: 1,
  bgColor: 'white',
  h: '180px',
  display: 'flex',
  flexDir: 'column',
  gap: 5,
  px: { base: 10, mdDown: 1 },
  py: 4,
  justifyContent: 'center',
})
const HowToTitle = css({
  fontSize: { base: 24, mdDown: 13 },
  fontWeight: 500,
  lineHeight: 1,
})
const HowToContent = css({
  display: 'flex',
  w: { base: '320px', mdDown: '120px' },
  justifyContent: 'space-between',
  alignItems: 'center',
  lineHeight: 1.2,
  '& > span': {
    color: 'black',
    fontSize: { base: 14, mdDown: 10 },
    fontWeight: 500,
  },
  '& > span:first-child': {
    fontSize: { base: 16, mdDown: 12 },
    fontWeight: 400,
    color: 'darkGray.1',
  },
})
const CostInterval = css({
  display: 'flex',
  alignItems: 'center',
  gap: 2,
  '& > span': {
    color: 'darkGray.2',
    fontSize: { base: 14, mdDown: 10 },
  },
})

interface SugarModalProps extends Omit<ModalPortalProps, 'children'> {
  modalRef: React.RefObject<HTMLDivElement>
  handleButtonClose?: () => void
}
const SugarModal = (props: SugarModalProps) => {
  const { modalRef, isOpen, handleLayoutClose, handleButtonClose } = props
  return (
    <ModalPortal isOpen={isOpen} handleLayoutClose={handleLayoutClose}>
      <ModalCard
        variant="alert"
        ref={modalRef}
        className={css({
          px: { base: '60px', mdDown: 5 },
          py: { base: '50px', mdDown: 5 },
          gap: { base: '30px', mdDown: 3 },
        })}
      >
        <div className={css({ display: 'flex', flexDir: 'column', gap: 6, alignItems: 'center' })}>
          <div className={css({ display: 'flex', alignItems: 'center', bgColor: 'white', gap: 1 })}>
            <CircleAlert size={58} className={css({ fill: 'red.3', color: 'white' })} />
            <div className={css({ fontWeight: 700, color: 'red.3', fontSize: { base: 36, mdDown: 18 } })}>
              What is sugar?
            </div>
          </div>
          <div
            className={css({
              fontWeight: 500,
              fontSize: { base: 20, mdDown: 12 },
              textAlign: 'center',
              color: 'darkGray.1',
            })}
          >
            Sugar is a point unit used in KU-key.
            <br />
            You can get sugar by following the activities shown below.
          </div>
        </div>
        <div className={css({ display: 'flex', gap: 2.5 })}>
          <div className={HowToBox}>
            <h3 className={HowToTitle}>How to get</h3>
            <div className={css({ display: 'flex', flexDir: 'column', gap: 2 })}>
              <div className={HowToContent}>
                <span>Attendance</span>
                <span>
                  <img src={Sugar} alt="sugar" />
                  30
                </span>
              </div>
              <div className={HowToContent}>
                <span>Writing lecture review</span>
                <span>
                  <img src={Sugar} alt="sugar" />
                  100
                </span>
              </div>
              <div className={HowToContent}>
                <span>Hot board</span>
                <span>
                  <img src={Sugar} alt="sugar" />
                  100
                </span>
              </div>
            </div>
          </div>
          <div className={HowToBox}>
            <h3 className={HowToTitle}>How to use</h3>
            <div className={css({ display: 'flex', flexDir: 'column', gap: 2 })}>
              <div className={HowToContent}>
                <span>Reading lecture reviews</span>
                <span className={CostInterval}>
                  <div>
                    <img src={Sugar} alt="sugar" />
                    100
                  </div>
                  <span>-</span>
                  <div>
                    <img src={Sugar} alt="sugar" />
                    30
                  </div>
                </span>
              </div>
              <div className={HowToContent}>
                <span>Evolving characters</span>
                <span className={CostInterval}>
                  <div>
                    <img src={Sugar} alt="sugar" />
                    400
                  </div>
                  <span>-</span>
                  <div>
                    <img src={Sugar} alt="sugar" />
                    30
                  </div>
                </span>
              </div>
              <div className={HowToContent}>
                <span>Changing characters</span>
                <span>
                  <img src={Sugar} alt="sugar" />
                  200
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={css({ display: 'flex', gap: 5 })}>
          {handleButtonClose && (
            <Button variant="confirm" onClick={handleButtonClose}>
              Okay
            </Button>
          )}
        </div>
      </ModalCard>
    </ModalPortal>
  )
}

export default SugarModal
