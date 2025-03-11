import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { PropsWithChildren, ReactNode, Suspense } from 'react'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'

import DefaultErrorFallback from '@/common/components/ErrorBoundarySuspense/DefaultErrorFallback'

interface Props extends PropsWithChildren {
  fallback: ReactNode
  errorFallback?: (props: FallbackProps) => ReactNode
}
const ErrorBoundarySuspense = ({ children, fallback, errorFallback = DefaultErrorFallback }: Props) => {
  return (
    <Suspense fallback={fallback}>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary onReset={reset} fallbackRender={errorFallback}>
            {children}
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </Suspense>
  )
}
export default ErrorBoundarySuspense
