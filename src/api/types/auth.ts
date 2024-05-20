export interface LoginResponse {
  token: {
    accessToken: string
    refreshToken: string
  }
  verified: boolean
}

export interface LoginRequest {
  email: string
  password: string
}
