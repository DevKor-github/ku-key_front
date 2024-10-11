// import { css } from '@styled-system/css'

import { css } from '@styled-system/css'

import { useMediaQueryByName } from '@/util/useMediaQueryByName'

interface CircularProgressProps {
  progress: number
}

const CircularProgress = ({ progress }: CircularProgressProps) => {
  const matchesSmDown = useMediaQueryByName('smDown')
  const size = matchesSmDown ? 60 : 120
  const center = size / 2
  const radius = center - 15 / 2
  const circumference = 2 * Math.PI * radius

  // 진행 상태에 따라 stroke-dashoffset 값을 계산
  const progressOffset = ((100 - progress) / 100) * circumference

  return (
    <div
      className={css({
        smDown: {
          px: 4,
        },
      })}
    >
      <svg width={size} height={size}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          className={css({
            stroke: 'lightGray.2',
            strokeWidth: { base: 15, smDown: 7 },
            fill: 'none',
          })}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          transform={`rotate(-90 ${center} ${center})`}
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          className={css({ stroke: 'red.2', strokeWidth: { base: 15, smDown: 7 }, strokeLinecap: 'round' })}
        />
        <text
          x={center}
          y={center}
          textAnchor="middle"
          dominantBaseline="middle"
          className={css({ fontSize: { base: 24, smDown: 12 }, fontWeight: 600, fill: 'red.2' })} // 텍스트 크기를 조절합니다. 원의 크기에 따라 조정할 수 있습니다.
        >
          {progress}%
        </text>
      </svg>
    </div>
  )
}

export default CircularProgress
