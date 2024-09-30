import { css, cx } from '@styled-system/css'
import { shadow } from '@styled-system/recipes'
import { formatDistanceToNowStrict } from 'date-fns'

import { NOTICE_TYPE_DESCRIPTION } from '@/lib/constants/notice'
import { NoticeInterface } from '@/types/notice'

interface NoticeCardProps {
  noticeData: NoticeInterface
}
const NoticeCard = ({ noticeData: notice }: NoticeCardProps) => {
  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 2.5, px: 2.5, pt: 2.5, pb: 5 })}>
      <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
        <div
          className={cx(
            css({
              px: 2.5,
              py: 1,
              rounded: 'full',
              bgColor: '#FFFFFF33',
              color: 'lightGray.1',
              fontSize: 12,
              fontWeight: 700,
              lineHeight: 1.2,
            }),
            shadow(),
          )}
        >
          {NOTICE_TYPE_DESCRIPTION[notice.type]}
        </div>
        <div className={css({ color: 'lightGray.2', fontSize: 12, fontWeight: 700, lineHeight: 1.2 })}>
          {formatDistanceToNowStrict(new Date(notice.createdAt), { addSuffix: true })}
        </div>
      </div>
      <div className={css({ fontSize: 16, fontWeight: 400, lineHeight: 1.2 })}>{notice.content}</div>
    </div>
  )
}

export default NoticeCard
