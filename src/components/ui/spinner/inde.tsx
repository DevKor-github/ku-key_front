import { css } from '@styled-system/css'

const LoadingSpinner = () => {
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      })}
    >
      <div
        className={css({
          width: '40px',
          height: '40px',
          border: '4px solid #f3f3f3',
          borderTop: '4px solid {colors.red.2}',
          borderRadius: '50%',
          animation: 'spin 0.5s linear infinite',
        })}
      />
    </div>
  )
}

export default LoadingSpinner
