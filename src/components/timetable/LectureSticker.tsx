import { css } from '@styled-stytem/css'
import { CircleUser, MapPin } from 'lucide-react'

const LectureDetail = css({
  fontSize: { base: 14, mdDown: 10 },
  fontWeight: 400,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: 0.5,
  width: '100%',
})

const EllipsisText = css({
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
})

interface LectureStickerProps {
  name: string
  runningTime: number // 분 단위
  professor: string | null
  room: string
  bgColor: string
  startTime: number
}

const LectureSticker = ({ name, runningTime, professor, room, bgColor, startTime }: LectureStickerProps) => {
  return (
    <div
      className={css({
        color: 'white',
        position: 'absolute',
        w: 'calc(100% + 1px)',
        p: '0.75rem 0.625rem',
        rounded: { base: 10, mdDown: 5 },
        zIndex: 10,
        display: 'flex',
        flexDir: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
      })}
      style={{
        top: `${(startTime / 60) * 100}%`,
        height: `calc(${(runningTime / 60) * 100}% + ${runningTime / 60}px)`, // 시간표 사이 선 보간
        backgroundColor: bgColor,
      }}
    >
      <div
        className={css({
          fontSize: { base: 18, mdDown: 12 },
          fontWeight: '500',
          wordWrap: 'break-word',
          overflow: 'hidden',
          lineClamp: { base: 2, mdDown: 3 },
          textOverflow: 'ellipsis',
        })}
      >
        {name}
      </div>
      <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'flex-end' })}>
        {professor && (
          <div className={LectureDetail}>
            <CircleUser size={12} />
            <span className={EllipsisText}>{professor}</span>
          </div>
        )}
        {room && (
          <div className={LectureDetail}>
            <MapPin size={12} />
            <span className={EllipsisText}>{room}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default LectureSticker
