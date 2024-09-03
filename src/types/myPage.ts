export type PageType =
  | 'my-point'
  | 'point-history'
  | 'community'
  | 'course-review'
  | 'public-profile'
  | 'exchange-profile'
  | 'password'
  | 'delete-account'

export const PAGE_LIST: { title: string; children: { title: string; handler: PageType }[] }[] = [
  {
    title: 'Point Shop',
    children: [
      {
        title: 'My point',
        handler: 'my-point',
      },
      {
        title: 'Point history',
        handler: 'point-history',
      },
    ],
  },
  {
    title: 'Storage',
    children: [
      {
        title: 'Community',
        handler: 'community',
      },
      {
        title: 'Course review',
        handler: 'course-review',
      },
    ],
  },
  {
    title: 'Management',
    children: [
      {
        title: 'Public profile',
        handler: 'public-profile',
      },
      {
        title: 'Exchange profile',
        handler: 'exchange-profile',
      },
      {
        title: 'Password',
        handler: 'password',
      },
      {
        title: 'Delete account',
        handler: 'delete-account',
      },
    ],
  },
]
