import { css } from '@styled-system/css'

const NullTimetable = ({ children }: { children: React.ReactNode }) => {
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
      {children}
    </div>
  )
}

export default NullTimetable
