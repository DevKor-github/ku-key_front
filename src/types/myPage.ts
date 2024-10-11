import COMMUNITY_ICON from '@/assets/MyPage/community_gray.svg'
import DELETE_ICON from '@/assets/MyPage/delete_gray.svg'
import HISTORY_ICON from '@/assets/MyPage/history_gray.svg'
import KEY_ICON from '@/assets/MyPage/key_gray.svg'
import KUKEY_ICON from '@/assets/MyPage/kukey_gray.svg'
import REVIEW_ICON from '@/assets/MyPage/review_gray.svg'

export type PageType =
  | 'my-point'
  | 'point-history'
  | 'community'
  | 'course-review'
  | 'public-profile'
  | 'exchange-profile'
  | 'password'
  | 'delete-account'
  | null

export const PAGE_LIST: { title: string; children: { title: string; handler: PageType; icon: string }[] }[] = [
  {
    title: 'Point Shop',
    children: [
      {
        title: 'My point',
        handler: 'my-point',
        icon: KUKEY_ICON,
      },
      {
        title: 'Point history',
        handler: 'point-history',
        icon: HISTORY_ICON,
      },
    ],
  },
  {
    title: 'Storage',
    children: [
      {
        title: 'Community',
        handler: 'community',
        icon: COMMUNITY_ICON,
      },
      {
        title: 'Course review',
        handler: 'course-review',
        icon: REVIEW_ICON,
      },
    ],
  },
  {
    title: 'Management',
    children: [
      {
        title: 'Public profile',
        handler: 'public-profile',
        icon: KUKEY_ICON,
      },
      {
        title: 'Exchange profile',
        handler: 'exchange-profile',
        icon: KUKEY_ICON,
      },
      {
        title: 'Password',
        handler: 'password',
        icon: KEY_ICON,
      },
      {
        title: 'Delete account',
        handler: 'delete-account',
        icon: DELETE_ICON,
      },
    ],
  },
]
