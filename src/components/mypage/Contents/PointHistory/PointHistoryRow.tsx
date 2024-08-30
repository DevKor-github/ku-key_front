import { css } from '@styled-stytem/css'

import TypeChip from '@/components/mypage/Contents/PointHistory/TypeChip'

interface PointHistoryRowProps {
  historyData: {
    date: string
    history: string
    changePoint: number
    resultPoint: number
  }
}
const PointHistoryRow = ({ historyData }: PointHistoryRowProps) => {
  const dateData = new Date(historyData.date)
  return (
    <div
      className={css({ display: 'flex', alignItems: 'center', py: 7, borderBottom: 'solid 1px {colors.lightGray.1}' })}
    >
      <span className={css({ w: 30, flexShrink: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' })}>
        <TypeChip type={historyData.changePoint > 0} />
      </span>
      <span
        className={css({
          flexShrink: 0,
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          fontSize: 20,
          fontWeight: 500,
          pl: 1,
        })}
      >
        {historyData.history}
      </span>
      <span
        className={css({
          flexShrink: 0,
          w: 21,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 24,
          fontWeight: 500,
        })}
      >
        {Math.abs(historyData.changePoint)}p
      </span>
      <span
        className={css({
          flexShrink: 0,
          w: 47,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          fontWeight: 500,
          color: 'darkGray.1',
        })}
      >
        {`${dateData.getFullYear()}.${String(dateData.getMonth() + 1).padStart(2, '0')}.${String(dateData.getDate()).padStart(2, '0')}`}
      </span>
    </div>
  )
}

export default PointHistoryRow
