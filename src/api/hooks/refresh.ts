import axios from 'axios'
import createRefresh from 'react-auth-kit/createRefresh'

import { LoginResponse } from '@/api/types/auth'

const getNewToken = async (refreshToken: string) => {
  const response = await axios.post<Pick<LoginResponse['token'], 'accessToken'>>(
    `http://${import.meta.env.VITE_API_SERVER}/auth/refresh`,
    {
      headers: { Authorization: `Bearer ${refreshToken}` },
    },
  )
  return response.data.accessToken
}

export const refresh = createRefresh({
  interval: 60 * 30, // The time in sec to refresh the Access token,
  refreshApiCallback: async param => {
    try {
      const accessToken = await getNewToken(param.refreshToken!)
      console.log('Refreshing')
      return {
        isSuccess: true,
        newAuthToken: accessToken,
        newRefreshTokenExpiresIn: 60 * 60 * 24 * 14, // The time in sec to refresh the Refresh token
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
