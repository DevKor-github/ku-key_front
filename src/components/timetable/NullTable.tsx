import { css } from '@styled-stytem/css'

const NullTable = () => {
  return (
    <div
      className={css({
        w: '100%',
        py: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgColor: 'bg.gray',
        rounded: 10,
        border: '1px {colors.lightGray.1} solid',
        color: 'lightGray.1',
        fontWeight: 600,
        fontSize: 16,
        textAlign: 'center',
      })}
    >
      There is no set timetable <br /> Press the plus button to create a timetable!
    </div>
  )
}

export default NullTable
