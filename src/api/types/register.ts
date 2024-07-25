export interface VerifyEmailReqProps {
  email: string
  verifyToken: number
}

export interface CheckEmailDuplicationResProps {
  possible: boolean
}

export interface RegisterReqProps {
  screenShot: File
  email: string
  username: string
  password: string
  studentNumber: string
  country: string
  homeUniversity: string
  major: string
  name: string
}
