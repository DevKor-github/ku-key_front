export type Valid = 'valid' | 'invalid' | 'unknown'
export interface ValidState {
  email: Valid
  username: Valid
  studentId: Valid
}
