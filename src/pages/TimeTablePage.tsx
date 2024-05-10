import { css, cva } from '@styled-stytem/css'

import TimeTable from '@/components/timetable/TimeTable'

const ToolbarBtn = cva({
  base: {
    h: '49px',
    p: '14px 28px',
    borderRadius: '10px',
    border: '1px white solid',
    justifyContent: 'center',
    cursor: 'pointer',
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    wordWrap: 'break-word',
    display: 'inline-flex',
    alignItems: 'center',
  },
  variants: {
    back: {
      white: {
        bg: 'lightGray.2',
        borderRadius: 10,

        border: '1px {colors.darkGray.1} solid',
        color: 'darkGray.1',
      },
    },
    selected: {
      true: {
        bgColor: 'white',
        color: 'red.2',
      },
    },
  },
})

const TimeTablePage = () => {
  const freindsList = ['하승준', '이지원', '이시흔', '정연승', '차승민', '김성현', '김현아', '박정우']
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
      })}
    >
      <div
        className={css({
          h: '77px',
          bgColor: 'red.2',
          p: '0 100px',
          display: 'flex',
          flexDir: 'row',
        })}
      >
        <div
          className={css({
            display: 'flex',
            flexDir: 'row',
            alignItems: 'center',
            gap: '20px',
          })}
        >
          <button className={css(ToolbarBtn.raw({ selected: false }))}>My schedule</button>
          <button className={css(ToolbarBtn.raw({ selected: true }))}>Friends</button>
        </div>
      </div>
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          padding: '0 80px',
        })}
      >
        <div
          className={css({
            display: 'flex',
            flexDir: 'row',
            justifyContent: 'space-between',
            margin: '25px 0',
          })}
        >
          <div
            className={css({
              color: 'black.2',
              fontSize: 32,
              fontWeight: '800',
              wordWrap: 'break-word',
            })}
          >
            Friend List
          </div>
          <div
            className={css({
              display: 'flex',
              flexDir: 'row',
              gap: '6px',
            })}
          >
            <div className={css(ToolbarBtn.raw({ back: 'white' }))}>Link</div>
            <div className={css(ToolbarBtn.raw({ back: 'white' }))}>⤵️</div>
          </div>
        </div>
        <div
          className={css({
            display: 'flex',
            flexDir: 'row',
            gap: '20px',
            pb: '343px',
          })}
        >
          <div
            className={css({
              width: '155px',
              display: 'flex',
              flexDir: 'column',
              gap: '14px',
            })}
          >
            <button
              className={css({
                h: '48px',
                background: 'lightGray.2',
                borderRadius: 10,
                border: '1px {colors.darkGray.1} solid',
                textAlign: 'center',
                color: 'darkGray.1',
                fontSize: 15,
                fontWeight: '500',
                wordWrap: 'break-word',
              })}
            >
              + Plus friend
            </button>
            <div
              className={css({
                display: 'flex',
                flexDir: 'column',
                gap: '1px',
                background: 'lightGray.2',
                borderRadius: 10,
                border: '1px {colors.darkGray.1} solid',
              })}
            >
              {freindsList.map(friend => {
                return (
                  <button
                    key={friend}
                    className={css({
                      h: '45px',
                    })}
                  >
                    {friend}
                  </button>
                )
              })}
            </div>
          </div>
          <TimeTable semester={'Spring'} year={'2024'} />
        </div>
      </div>
    </div>
  )
}

export default TimeTablePage
