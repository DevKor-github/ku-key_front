import { css } from '@styled-stytem/css'

import Toky from '@/assets/toky.svg'
import { CarouselCardProps } from '@/types/carousel-card'
const CarouselCard = ({ title, content, date, selected }: CarouselCardProps) => {
  return (
    <div
      className={css({
        display: 'flex',
        w: '608px',
        h: 75,
        rounded: 20,
        bgColor: selected ? 'red.2' : 'red.1',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 608px',
        marginLeft: 5,
        minW: 0,
        transition: 'background-color 0.3s ease-in-out',
      })}
    >
      <div className={css({ display: 'inline-flex', flexDir: 'column', alignItems: 'flex-start', gap: 10 })}>
        <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'flex-start', gap: 1.5 })}>
          <p className={css({ fontSize: 26, fontWeight: 600 })}>{title}</p>
          <p className={css({ fontSize: 20, fontWeight: 500 })}>{content}</p>
        </div>
        <p className={css({ fontSize: 18, fontWeight: 500 })}>{date}</p>
      </div>
      <img src={Toky} alt="tokyImage" className={css({ display: 'flex', alignSelf: 'flex-end', w: '157px' })} />
    </div>
  )
}

export default CarouselCard
