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
        pl: 64,
        display: 'flex',
        alignItems: 'center',
        color: 'black.2',
        fontWeight: 800,
        fontSize: 32,
        bgColor: 'bg.gray',
      })}
    >
      {title}
    </div>
  )
}

export default ReviewBanner
