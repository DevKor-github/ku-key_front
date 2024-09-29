import { css } from '@styled-system/css'

import { useGetNotice } from '@/api/hooks/notice'
import AttendanceBtn from '@/components/header/notification/AttendanceBtn'
import useIntersect from '@/util/useIntersect'

const NotifyContent = () => {
  const { data: noticeData, hasNextPage, isFetching, fetchNextPage } = useGetNotice()

  const fetchNextRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target)
    if (hasNextPage && !isFetching) fetchNextPage()
  })

  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 5 })}>
      <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}>
        <AttendanceBtn />
        <h2
          className={css({
            color: 'white',
            textAlign: 'center',
            fontSize: 24,
            fontWeight: 700,
            lineHeight: 1,
          })}
        >
          Alarm
        </h2>
      </div>
      {noticeData && noticeData.length !== 0 && (
        <div className={css({ display: 'flex', flexDir: 'column', maxH: '580px', overflow: 'scroll' })}>
          {noticeData.map((notice, index) => {
            return <div key={`notice-${index}`}>{notice.content}</div>
          })}
          <div ref={fetchNextRef} className={css({ height: 1 })} />
        </div>
      )}
    </div>
  )
}

export default NotifyContent
