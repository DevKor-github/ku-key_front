import { FallbackProps } from 'react-error-boundary'

import * as s from './style.css'

const DefaultErrorFallback = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <div className={s.Wrapper}>
      <div>There was an error!</div>
      <button onClick={resetErrorBoundary}>Retry</button>
    </div>
  )
}
export default DefaultErrorFallback
