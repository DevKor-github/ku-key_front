import { DefaultError, useMutation, UseMutationOptions } from '@tanstack/react-query'

import { useHandleErrorWithToast } from '@/util/hooks/useHandleErrorWithToast'

export const useErrorHandledMutation = <TData = unknown, TError = DefaultError, TVariables = void, TContext = unknown>(
  options: UseMutationOptions<TData, TError, TVariables, TContext>,
) => {
  const handleErrorWithToast = useHandleErrorWithToast()
  const handleError = (error: TError, variables: TVariables, context: TContext | undefined) => {
    if (options?.onError) return options.onError(error, variables, context)
    handleErrorWithToast(error as DefaultError)
  }
  const mutation = useMutation<TData, TError, TVariables, TContext>({
    ...options,
    onError: handleError,
  })
  return mutation
}

export type UseErrorHandledMutationOption = Omit<Parameters<typeof useErrorHandledMutation>[0], 'mutationFn'>
