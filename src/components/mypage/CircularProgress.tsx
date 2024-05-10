// import { css } from '@styled-stytem/css'

import { css } from '@styled-stytem/css'

interface CircularProgressProps {
  size: number
  progress: number
}

const CircularProgress = ({ size, progress }: CircularProgressProps) => {
  const center = size / 2
  const radius = center - 15 / 2
  const circumference = 2 * Math.PI * radius

  // 진행 상태에 따라 stroke-dashoffset 값을 계산
  const progressOffset = ((100 - progress) / 100) * circumference

  return (
    <svg width={size} height={size}>
      <circle
        cx={center}
        cy={center}
        r={radius}
        className={css({
          stroke: 'lightGray.2',
          strokeWidth: { base: 15, mdDown: 6 },
          fill: 'none',
          strokeLinecap: 'round',
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
        className={css({ stroke: 'red.2', strokeWidth: { base: 15, mdDown: 6 }, strokeLinecap: 'round' })}
      />
      <text
        x={center}
        y={center}
        textAnchor="middle"
        dominantBaseline="middle"
        className={css({ fontSize: { base: 24, mdDown: 12 }, fontWeight: 600, fill: 'red.2' })} // 텍스트 크기를 조절합니다. 원의 크기에 따라 조정할 수 있습니다.
      >
        {progress}%
      </text>
    </svg>
  )
}

CircularProgress.defaultProps = {
  size: window.innerWidth < 768 ? 60 : 120,
  progress: 40, // 0 ~ 100 사이의 값
}

export default CircularProgress

// 원의 호를 SVG path 데이터로 변환하는 함수

// function describeArc(x, y, radius, startAngle, endAngle) {
//   const start = polarToCartesian(x, y, radius, endAngle)
//   const end = polarToCartesian(x, y, radius, startAngle)

//   const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'

//   const d = ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(' ')

//   return d
// }

// function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
//   const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0

//   return {
//     x: centerX + radius * Math.cos(angleInRadians),
//     y: centerY + radius * Math.sin(angleInRadians),
//   }
// }

// function Arcs() {
//   const gapSize = 1 // 간격 크기 조정 가능
//   const firstArcStartAngle = 1
//   const firstArcEndAngle = 150
//   const secondArcStartAngle = firstArcEndAngle + gapSize
//   const secondArcEndAngle = 360

//   return (
//     <svg width="200" height="200" viewBox="0 0 200 200">
//       <path
//         d={describeArc(100, 100, 75, firstArcStartAngle, firstArcEndAngle)}
//         fill="none"
//         stroke="blue"
//         strokeWidth="10"
//       />
//       <path
//         d={describeArc(100, 100, 75, secondArcStartAngle, secondArcEndAngle)}
//         fill="none"
//         stroke="red"
//         strokeWidth="10"
//       />
//     </svg>
//   )
// }

// export default Arcs
