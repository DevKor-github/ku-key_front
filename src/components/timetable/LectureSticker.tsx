import { css } from '@styled-stytem/css'
import { CircleUser, MapPin } from 'lucide-react'

const LectureDetail = css({
  fontSize: 14,
  fontWeight: 400,
  wordWrap: 'break-word',
  display: 'flex',
  flexDir: 'row',
  alignItems: 'center',
  gap: 0.5,
})

interface LectureStickerProps {
  name: string
  runningTime: number // min
  professor: string
  room: string
}

const LectureSticker = ({ name, runningTime, professor, room }: LectureStickerProps) => {
  return (
    <div
      className={css({
        bgColor: 'rgba(243.45, 120.87, 120.87, 0.50)',
        color: 'white',
        position: 'absolute',
        w: 'calc(100% + 1px)',
        p: '0.75rem 0.625rem',
        rounded: 10,
        zIndex: 10,
        display: 'flex',
        flexDir: 'column',
        justifyContent: 'space-between',
      })}
      style={{
        height: `calc(${(runningTime / 60) * 100}% + ${runningTime / 60}px)`,
      }}
    >
      <div className={css({ fontSize: 18, fontWeight: '500', wordWrap: 'break-word' })}>{name}</div>
      <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'flex-end' })}>
        <div className={LectureDetail}>
          <CircleUser size={12} />
          {professor}
        </div>
        <div className={LectureDetail}>
          <MapPin size={12} />
          {room}
        </div>
      </div>
    </div>
  )
}

export default LectureSticker
