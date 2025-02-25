import { FallbackProps } from 'react-error-boundary'

const DefaultErrorFallback = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <div>
      <div>There was an error!</div>
      <button onClick={resetErrorBoundary}>Retry</button>
    </div>
  )
}
export default DefaultErrorFallback
