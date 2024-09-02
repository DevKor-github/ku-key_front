import { css, cx } from '@styled-stytem/css'

import { useGetPointHistory } from '@/api/hooks/user'
import PointHistoryRow from '@/components/mypage/Contents/PointHistory/PointHistoryRow'

const CellHeaderStyle = css({
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  fontSize: 24,
  fontWeight: 600,
  justifyContent: 'center',
})

const PointHistory = () => {
  const { data } = useGetPointHistory()

  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 10, maxW: '818px' })}>
      <h1 className={css({ fontSize: 30, fontWeight: 700 })}>Point history</h1>
      <div className={css({ display: 'flex', flexDir: 'column' })}>
        <div className={css({ display: 'flex', alignItems: 'center', bgColor: 'lightGray.2', py: 5 })}>
          <span className={cx(CellHeaderStyle, css({ w: 30 }))}>Category</span>
          <span className={cx(CellHeaderStyle, css({ flexGrow: 1 }))}>Item</span>
          <span className={cx(CellHeaderStyle, css({ w: 21 }))}>Point</span>
          <span className={cx(CellHeaderStyle, css({ w: 47 }))}>Date</span>
        </div>
        {data.map((historyData, ind) => (
          <PointHistoryRow key={`history-${ind}`} historyData={historyData} />
        ))}
      </div>
    </div>
  )
}

export default PointHistory
