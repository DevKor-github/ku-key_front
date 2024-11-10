import { css, cx } from '@styled-system/css'
import { CircleAlert } from 'lucide-react'

import { useGetPointHistory } from '@/api/hooks/user'
import PointHistoryRow from '@/components/mypage/Contents/PointHistory/PointHistoryRow'
import SugarModal from '@/components/ui/modal/SugarModal'
import { useModal } from '@/util/hooks/useModal'

const CellHeaderStyle = css({
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  fontSize: { base: 24, mdDown: 12 },
  fontWeight: 600,
  justifyContent: 'center',
})

const PointHistory = () => {
  const { modalRef, isOpen, handleLayoutClose, handleButtonClose, handleOpen } = useModal()
  const { data } = useGetPointHistory()

  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 10, maxW: { base: '818px', mdDown: '400px' } })}>
      <div className={css({ display: 'flex', alignItems: 'center', gap: 2.5 })}>
        <h1 className={css({ fontSize: { base: 30, mdDown: 15 }, fontWeight: 700 })}>Point history</h1>
        <button className={css({ cursor: 'pointer' })} onClick={handleOpen}>
          <CircleAlert className={css({ mdDown: { w: '15px', h: '15px' } })} />
        </button>
      </div>
      <div className={css({ display: 'flex', flexDir: 'column' })}>
        <div
          className={css({ display: 'flex', alignItems: 'center', bgColor: 'lightGray.2', py: { base: 5, mdDown: 1 } })}
        >
          <span className={cx(CellHeaderStyle, css({ w: { base: 30, mdDown: 15 } }))}>Category</span>
          <span className={cx(CellHeaderStyle, css({ flexGrow: 1, mdDown: { display: 'none' } }))}>Item</span>
          <span className={cx(CellHeaderStyle, css({ w: { base: 21, mdDown: 10 } }))}>Point</span>
          <span className={cx(CellHeaderStyle, css({ w: { base: 47, mdDown: 23 } }))}>Date</span>
        </div>
        {data.map((historyData, ind) => (
          <PointHistoryRow key={`history-${ind}`} historyData={historyData} />
        ))}
      </div>
      <SugarModal
        modalRef={modalRef}
        isOpen={isOpen}
        handleButtonClose={handleButtonClose}
        handleLayoutClose={handleLayoutClose}
      />
    </div>
  )
}

export default PointHistory
