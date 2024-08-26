import { css } from '@styled-stytem/css'

const HowToBox = css({
  flexGrow: 1,
  bgColor: 'white',
  h: '180px',
  display: 'flex',
  flexDir: 'column',
  gap: 5,
  px: 10,
  justifyContent: 'center',
})
const HowToTitle = css({
  fontSize: 24,
  fontWeight: 500,
})
const HowToContent = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '& > span': {
    color: 'red.1',
    fontSize: 14,
    fontWeight: 500,
  },
  '& > span:first-child': {
    fontSize: 16,
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
    fontSize: 14,
  },
})

interface PointStatusProps {
  name: string
  point: number
}
const PointStatus = ({ name, point }: PointStatusProps) => {
  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 2.5, alignItems: 'stretch' })}>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: '22px',
          px: '30px',
          bgColor: 'red.2',
          color: 'white',
        })}
      >
        <span className={css({ fontSize: 28, fontWeight: 600 })}>Hello, {name}</span>
        <span className={css({ fontSize: 26, display: 'flex', alignItems: 'center', gap: 5 })}>
          <span className={css({ fontWeight: 500 })}>your sugar</span>
          <span>|</span>
          <span className={css({ fontWeight: 600 })}>{point}</span>
        </span>
      </div>
      <div className={css({ display: 'flex', gap: 5 })}>
        <div className={HowToBox}>
          <h3 className={HowToTitle}>How to get</h3>
          <div className={css({ display: 'flex', flexDir: 'column', gap: 2 })}>
            <div className={HowToContent}>
              <span>Attendance</span>
              <span>30</span>
            </div>
            <div className={HowToContent}>
              <span>Writing lecture review</span>
              <span>100</span>
            </div>
            <div className={HowToContent}>
              <span>Hot board</span>
              <span>100</span>
            </div>
          </div>
        </div>
        <div className={HowToBox}>
          <h3 className={HowToTitle}>How to use</h3>
          <div className={css({ display: 'flex', flexDir: 'column', gap: 2 })}>
            <div className={HowToContent}>
              <span>Reading lecture reviews</span>
              <span className={CostInterval}>
                100 <span>-</span> 30
              </span>
            </div>
            <div className={HowToContent}>
              <span>Evolving characters</span>
              <span className={CostInterval}>
                400 <span>-</span> 30
              </span>
            </div>
            <div className={HowToContent}>
              <span>Changing characters</span>
              <span>200</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PointStatus
