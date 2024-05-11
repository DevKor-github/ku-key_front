import { css, cva } from '@styled-stytem/css'

import TimeTable from '@/components/timetable/TimeTable'

// Toolbar Btn 중복
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

const MyTimeTablePage = () => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
      })}
    >
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
            Schedule
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
        <TimeTable semester={'Spring'} year={'2024'} />
      </div>
    </div>
  )
}

export default MyTimeTablePage
