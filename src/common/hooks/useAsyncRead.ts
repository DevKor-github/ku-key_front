import { AxiosInstance, AxiosResponse } from 'axios'

import { apiInterface } from '@/util/axios/custom-axios'

type ReadClient<T, P extends unknown[]> = ({
  axios,
}: {
  axios?: AxiosInstance
}) => (...params: P) => Promise<AxiosResponse<T>>

export const useAsyncRead = <T, P extends unknown[]>(readClient: ReadClient<T, P>) => {
  const axios = apiInterface

  return async (...params: P) => {
    const response = await readClient({ axios })(...params)
    return response.data
  }
}
