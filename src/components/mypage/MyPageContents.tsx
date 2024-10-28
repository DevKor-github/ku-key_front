import { css, cva } from '@styled-system/css'
import { match } from 'ts-pattern'

import { GetMyProfileResponse } from '@/api/types/user'
import ChangePassword from '@/components/mypage/Contents/ChangePassword'
import DeleteAccount from '@/components/mypage/Contents/DeleteAccount'
import ExchangeProfile from '@/components/mypage/Contents/ExchangeProfile'
import MyCommunity from '@/components/mypage/Contents/MyCommunity'
import MyCourseReview from '@/components/mypage/Contents/MyCourseReview'
import MyPoint from '@/components/mypage/Contents/MyPoint'
import PointHistory from '@/components/mypage/Contents/PointHistory'
import PublicProfile from '@/components/mypage/Contents/PublicProfile'
import MobileContentHeader from '@/components/mypage/MobileContentHeader'
import MobileMyPageSelector from '@/components/mypage/MobileMyPageSelector'
import { PAGE_LIST, PAGE_TITLE } from '@/lib/constants/myPage'
import { PageType } from '@/types/myPage'
import { useMediaQueryByName } from '@/util/useMediaQueryByName'

interface MyPageContentsProps {
  myProfileData: GetMyProfileResponse
  setPage: (target: PageType) => void
  curPage: PageType
}
const MyPageContents = ({ myProfileData, setPage, curPage }: MyPageContentsProps) => {
  const isMobile = useMediaQueryByName('smDown')

  return (
    <div
      className={css({
        display: 'flex',
        flexDir: { base: 'row', smDown: 'column' },
        gap: { base: 5, smDown: 0 },
        width: 'full',
        pb: { base: 33, smDown: 0 },
        maxW: '1200px',
        px: { base: '60px', lgDown: '30px', mdDown: '20px', smDown: 0 },
        smDown: {
          overflow: 'hidden',
          flexGrow: 1,
        },
      })}
    >
      {!isMobile && (
        <div
          className={css({ display: 'flex', flexDir: 'column', gap: 10, w: { base: 47, mdDown: 20 }, flexShrink: 0 })}
        >
          <h1 className={css({ fontSize: { base: 30, mdDown: 15 }, fontWeight: 700, color: 'black.1' })}>My page</h1>
          <nav className={css({ display: 'flex', flexDir: 'column', gap: 7 })}>
            {PAGE_LIST.map((sectionData, index) => {
              return (
                <section
                  key={index}
                  className={css({
                    display: 'flex',
                    flexDir: 'column',
                    gap: 6,
                    '& h2': { color: 'black.1', fontSize: { base: 24, mdDown: 12 }, fontWeight: 700 },
                  })}
                >
                  <h2>{sectionData.title}</h2>
                  <ul className={css({ display: 'flex', gap: { base: 5, mdDown: 2.5 }, flexDir: 'column' })}>
                    {sectionData.children.map(({ title, handler }) => (
                      <li
                        key={handler}
                        className={css({
                          display: 'flex',
                          gap: 2.5,
                          alignItems: { base: 'center', mdDown: 'flex-start' },
                        })}
                      >
                        <div
                          className={css({
                            w: 1.5,
                            h: 1.5,
                            rounded: 'full',
                            bgColor: 'red.2',
                            display: { mdDown: 'none' },
                          })}
                          style={{ visibility: handler === curPage ? 'visible' : 'hidden' }}
                        />
                        <button
                          className={cva({
                            base: {
                              color: 'black.2',
                              fontSize: { base: 18, mdDown: 12 },
                              cursor: 'pointer',
                              textAlign: 'left',
                            },
                            variants: {
                              selected: {
                                true: {
                                  color: 'red.2',
                                },
                              },
                            },
                          })({
                            selected: handler === curPage,
                          })}
                          onClick={() => {
                            if (handler) setPage(handler)
                          }}
                        >
                          {title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </section>
              )
            })}
          </nav>
        </div>
      )}
      {isMobile && curPage !== null && <MobileContentHeader title={PAGE_TITLE[curPage]} />}
      <div
        className={cva({
          base: { flexGrow: 1, smDown: { overflowY: 'auto' } },
          variants: {
            bg: {
              white: {
                bgColor: 'white',
              },
              gray: {
                bgColor: 'rgba(0, 0, 0, 0.24)',
                backdropFilter: 'blur(2px)',
              },
            },
          },
        })({ bg: isMobile ? (curPage === 'delete-account' ? 'gray' : 'white') : undefined })}
      >
        {match(curPage)
          .with('point-history', () => <PointHistory />)
          .with('community', () => <MyCommunity />)
          .with('course-review', () => <MyCourseReview />)
          .with('public-profile', () => <PublicProfile myProfileData={myProfileData} />)
          .with('exchange-profile', () => <ExchangeProfile myProfileData={myProfileData} />)
          .with('password', () => <ChangePassword />)
          .with('delete-account', () => <DeleteAccount />)
          .with('my-point', () => <MyPoint myProfileData={myProfileData} />)
          .otherwise(() => (
            <MobileMyPageSelector setPage={setPage} />
          ))}
      </div>
    </div>
  )
}

export default MyPageContents
