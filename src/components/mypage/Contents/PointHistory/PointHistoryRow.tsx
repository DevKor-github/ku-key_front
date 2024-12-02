import { css } from '@styled-system/css'

import TypeChip from '@/components/mypage/Contents/PointHistory/TypeChip'
import dateFormatter from '@/util/dateFormatter'
import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'

interface PointHistoryRowProps {
  historyData: {
    date: string
    history: string
    changePoint: number
    resultPoint: number
  }
}
const PointHistoryRow = ({ historyData }: PointHistoryRowProps) => {
  const formattedDate = dateFormatter({ date: new Date(historyData.date) })

  if (useMediaQueryByName('smDown'))
    return (
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          bgColor: 'white',
          h: 15,
          rounded: 10,
          w: 'full',
          px: '14px',
        })}
      >
        <span className={css({ fontSize: 14, fontWeight: 500, lineHeight: 1.2 })}>{historyData.history}</span>
        <span className={css({ display: 'flex', alignItems: 'center', gap: 2 })}>
          <span
            className={css({
              w: 9,
              fontSize: 14,
              fontWeight: 700,
              lineHeight: 1.2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            })}
          >
            {historyData.changePoint}p
          </span>
          <span className={css({ fontSize: 12, fontWeight: 400, lineHeight: 1.2, color: 'darkGray.1' })}>
            {formattedDate}
          </span>
        </span>
      </div>
    )

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
          mdDown: {
            display: 'none',
          },
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
        {formattedDate}
      </span>
    </div>
  )
}

export default PointHistoryRow
