export interface VerifyEmailReqProps {
  email: string
  verifyToken: number
}

export interface CheckEmailDuplicationResProps {
  possible: boolean
}

export type RegisterKeys =
  | 'email'
  | 'username'
  | 'password'
  | 'studentNumber'
  | 'country'
  | 'homeUniversity'
  | 'major'
  | 'name'
  | 'screenshot'
export type RegisterReqProps = {
  [K in RegisterKeys]: K extends 'screenshot' ? File : string
}
