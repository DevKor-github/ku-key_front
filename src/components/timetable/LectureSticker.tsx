import { css } from '@styled-stytem/css'
import { MapPin, UserRound } from 'lucide-react'

const LectureDetail = css({
  color: 'darkGray.2',
  fontSize: 14,
  fontWeight: '400',
  wordWrap: 'break-word',
  display: 'flex',
  flexDir: 'row',
  alignItems: 'center',
  gap: '3px',
})

interface LectureStickerProps {
  name: string
  runningTime: number //시간을 분 단위로 받기
  professor: string
  room: string
}

const LectureSticker = ({ name, runningTime, professor, room }: LectureStickerProps) => {
  return (
    <div
      className={css({
        bgColor: '#FFF8F8',
        position: 'absolute',
        w: 'calc(100% - 32px)',
        m: '6px 16px',
        p: '12px 10px',
        borderRadius: 10,
        zIndex: 10,
        border: '1px #FFC6C6 solid',
        display: 'flex',
        flexDir: 'column',
        justifyContent: 'space-between',
      })}
      style={{
        height: `calc(${runningTime * 1.66}% - 6px)`,
      }}
    >
      <div className={css({ color: 'darkGray.2', fontSize: 18, fontWeight: '500', wordWrap: 'break-word' })}>
        {name}
      </div>
      <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'flex-end' })}>
        <div className={LectureDetail}>
          <UserRound size={14} />
          {professor}
        </div>
        <div className={LectureDetail}>
          <MapPin size={14} />
          {room}
        </div>
      </div>
    </div>
  )
}

export default LectureSticker
