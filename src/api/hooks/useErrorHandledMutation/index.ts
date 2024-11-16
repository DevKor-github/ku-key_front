import { useMutation, UseMutationOptions } from '@tanstack/react-query'

import { useHandleErrorWithToast } from '@/util/hooks/useHandleErrorWithToast'

export const useErrorHandledMutation = <TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(
  options?: UseMutationOptions<TData, TError, TVariables, TContext>,
) => {
  const handleErrorWithToast = useHandleErrorWithToast()
  const handleError = (error: TError, variables: TVariables, context: TContext | undefined) => {
    if (options?.onError) return options.onError(error, variables, context)
    handleErrorWithToast(error)
  }
  const mutation = useMutation<TData, TError, TVariables, TContext>({
    ...options,
    onError: handleError,
  })
  return mutation
}
