import { toast } from 'sonner'

import Toast from '@/components/ui/toast'
import { handleAxiosError } from '@/util/handleAxiosError'

export const useHandleErrorWithToast = () => {
  return (error: unknown) => {
    const { data: errorData } = handleAxiosError(error)
    const errorMessage = errorData?.message ?? errorData?.status.message
    toast.custom(() => <Toast message={errorMessage} type="error" />)
  }
}
