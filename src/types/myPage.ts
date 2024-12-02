export type PageType =
  | 'my-point'
  | 'point-history'
  | 'community'
  | 'course-review'
  | 'public-profile'
  | 'exchange-profile'
  | 'password'
  | 'delete-account'
  | undefined

export interface MyPageParams {
  page: PageType
}
