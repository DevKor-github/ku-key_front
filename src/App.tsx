import { css } from '@styled-stytem/css'

import Button from '@/components/Button'

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
      <Button variant="primary" onClick={() => alert('Hello 🐼!')}>
        Hello 🐼!
      </Button>
    </div>
  )
}

export default App
