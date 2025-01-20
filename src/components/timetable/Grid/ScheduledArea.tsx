import { css, cva } from '@styled-system/css'

import LectureSticker from '@/components/timetable/Grid/LectureSticker'
import { COLOR_INFO } from '@/lib/constants/timetableColors'
import { ColorType, GridType } from '@/types/timetable'

const TimeCell = cva({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'darkGray.1',
    fontSize: { base: 18, mdDown: 12 },
    fontWeight: '500',
    wordWrap: 'break-word',
    h: { base: 27, mdDown: 18 },
    borderRight: '1px solid {colors.lightGray.1}',
    borderBottom: '1px solid {colors.lightGray.1}',
    position: 'relative',
  },
  variants: {
    header: {
      true: {
        h: 10,
      },
    },
    sidebar: {
      true: {
        bgColor: 'bg.gray',
        w: { base: '4.125rem', mdDown: 9 },
      },
    },
    end: {
      leftEnd: {
        roundedBottomLeft: 10,
      },
      rightEnd: {
        roundedBottomRight: 10,
      },
    },
    lectureGrid: {
      true: {
        display: 'block',
      },
    },
  },
})

interface Props {
  data: GridType[][]
  colorTheme: ColorType
  timetableId?: number
  isMine: boolean
  time: string[]
  week: string[]
}
const ScheduledArea = ({ data, colorTheme, timetableId, isMine, time, week }: Props) => {
  const weekCnt = week.length
  const timeCnt = time.length - 1

  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'row',
        borderLeft: '1px solid {colors.lightGray.1}',
        roundedBottom: 10,
        bgColor: 'white',
      })}
    >
      <div className={css({ display: 'flex', flexDir: 'column' })}>
        {time.map((val, index) => {
          return (
            <div
              key={index}
              className={TimeCell({
                sidebar: true,
                header: index === 0,
                end: index === time.length - 1 ? 'leftEnd' : undefined,
              })}
            >
              {val}
            </div>
          )
        })}
      </div>
      <div className={css({ display: 'flex', flexDir: 'column', flex: 1 })}>
        <div className={css({ display: 'flex', flexDir: 'row' })}>
          {week.map((days, index) => {
            return (
              <div key={index} className={css({ flex: 1 }, TimeCell.raw({ header: true }))}>
                {days}
              </div>
            )
          })}
        </div>
        <div className={css({ display: 'grid' })} style={{ gridTemplateColumns: `repeat(${weekCnt}, 1fr)` }}>
          {data.map((lectures, gridInd) => {
            return (
              <div
                key={gridInd}
                className={TimeCell({
                  lectureGrid: true,
                  end: gridInd === weekCnt * timeCnt - 1 ? 'rightEnd' : undefined,
                })}
              >
                {lectures.map((lecture, lecInd) => {
                  return (
                    <LectureSticker
                      key={lecInd}
                      timetableId={timetableId}
                      data={lecture}
                      bgColor={COLOR_INFO[colorTheme]['rand'][lecInd % COLOR_INFO[colorTheme]['rand'].length]}
                      isMine={isMine}
                    />
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default ScheduledArea
