import { DefaultError } from '@tanstack/react-query'
import { toast } from 'sonner'

import Toast from '@/components/ui/toast'
import { handleAxiosError } from '@/util/handleAxiosError'

export const useHandleErrorWithToast = () => {
  return (error: DefaultError) => {
    const { data: errorData } = handleAxiosError(error)
    const errorMessage = errorData?.message ?? errorData?.status.message
    toast.custom(() => <Toast message={errorMessage} type="error" />)
  }
}
