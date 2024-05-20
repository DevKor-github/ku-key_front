export interface VerifyEmailReqProps {
  email: string
  verifyToken: number
}

export interface CheckEmailDuplicationResProps {
  possible: boolean
}
