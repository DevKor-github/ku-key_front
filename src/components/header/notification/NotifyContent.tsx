import { css } from '@styled-system/css'

import { useGetNotice } from '@/api/hooks/notice'
import AttendanceBtn from '@/components/header/notification/AttendanceBtn'
import NoticeCard from '@/components/header/notification/NoticeCard'
import getFormattedNotice from '@/util/getFormattedNotice'
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
        <div
          className={css({
            display: 'flex',
            flexDir: 'column',
            maxH: '580px',
            overflow: 'scroll',
            color: 'white',
            gap: 2.5,
          })}
        >
          {getFormattedNotice(noticeData).map(({ createDate, notices }) => {
            return (
              <div key={`notice-date-${createDate}`} className={css({ display: 'flex', flexDir: 'column', gap: 5 })}>
                <div
                  className={css({
                    fontSize: 12,
                    fontWeight: 700,
                    lineHeight: 1.2,
                  })}
                >
                  {createDate}
                </div>
                <div className={css({ display: 'flex', flexDir: 'column', gap: 2.5 })}>
                  {notices.map(notice => (
                    <NoticeCard key={notice.id} noticeData={notice} />
                  ))}
                  <div ref={fetchNextRef} className={css({ height: 1 })} />
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default NotifyContent
