import { css } from '@styled-stytem/css'

import TypeChip from '@/components/mypage/Contents/PointHistory/TypeChip'
import dateFormatter from '@/util/dateFormatter'

interface PointHistoryRowProps {
  historyData: {
    date: string
    history: string
    changePoint: number
    resultPoint: number
  }
}
const PointHistoryRow = ({ historyData }: PointHistoryRowProps) => {
  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        py: { base: 7, mdDown: 3 },
        borderBottom: 'solid 1px {colors.lightGray.1}',
      })}
    >
      <span
        className={css({
          w: { base: 30, mdDown: 15 },
          flexShrink: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        })}
      >
        <TypeChip type={historyData.changePoint > 0} />
      </span>
      <span
        className={css({
          flexShrink: 0,
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          fontSize: { base: 20, mdDown: 10 },
          fontWeight: 500,
          pl: 1,
        })}
      >
        {historyData.history}
      </span>
      <span
        className={css({
          flexShrink: 0,
          w: { base: 21, mdDown: 10 },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: { base: 24, mdDown: 12 },
          fontWeight: 500,
        })}
      >
        {Math.abs(historyData.changePoint)}p
      </span>
      <span
        className={css({
          flexShrink: 0,
          w: { base: 47, mdDown: 23 },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: { base: 20, mdDown: 11 },
          fontWeight: 500,
          color: 'darkGray.1',
        })}
      >
        {dateFormatter({ date: new Date(historyData.date) })}
      </span>
    </div>
  )
}

export default PointHistoryRow
