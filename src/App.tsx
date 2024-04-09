import { css } from '@styled-stytem/css'

function App() {
  return (
    <div
      className={css({
        display: 'flex',
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      })}
    >
      <div
        className={css({
          fontSize: '2xl',
          fontWeight: 'bold',
          color: 'yellow.200',
          bg: 'black',
          padding: '4',
          borderRadius: 8
        })}
      >
        Hello 🐼!
      </div>
    </div>
  )
}

export default App
