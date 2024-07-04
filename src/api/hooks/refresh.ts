import createRefresh from 'react-auth-kit/createRefresh'

import { LoginResponse } from '@/api/types/auth'
import { customAxios } from '@/util/custom-axios'

const getNewToken = async (refreshToken: string) => {
  const response = await customAxios.post<Pick<LoginResponse['token'], 'accessToken'>>(`/auth/refresh`, null, {
    headers: { Authorization: `Bearer ${refreshToken}` },
  })
  return response.data.accessToken
}

export const refresh = createRefresh({
  interval: 5,
  refreshApiCallback: async param => {
    try {
      const accessToken = await getNewToken(param.refreshToken!)
      console.log('Refreshing:', new Date().toTimeString())

      return {
        isSuccess: true,
        newAuthToken: accessToken,
        newAuthTokenExpireIn: 5,
        newRefreshTokenExpireIn: 60 * 24 * 7,
      }
    } catch (error) {
      console.error(error)
      return {
        isSuccess: false,
        newAuthToken: '',
      }
    }
  },
})
