import { css } from '@styled-system/css'

interface ReviewBannerProps {
  title: string
}
const ReviewBanner = ({ title }: ReviewBannerProps) => {
  return (
    <div
      className={css({
        h: 35,
        w: '100%',
        display: 'flex',
        alignItems: 'center',
        color: 'black.2',
        fontWeight: 800,
        fontSize: { base: 32, mdDown: 26, xsDown: 22 },
        bgColor: 'bg.gray',
        px: { base: 60, lgDown: 26, mdDown: 5 },
      })}
    >
      {title}
    </div>
  )
}

export default ReviewBanner
