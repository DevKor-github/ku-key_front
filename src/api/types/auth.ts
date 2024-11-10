export interface LoginResponse {
  token: {
    accessToken: string
    refreshToken: string
  }
  verified: boolean
  deviceCode: string
  userId: string
}

export interface LoginRequest {
  email: string
  password: string
  keepingLogin: boolean
}

export interface LogoutRequest {
  deviceCode: string
}
