import { css, cva } from '@styled-system/css'
import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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
import { PAGE_LIST, PageType } from '@/types/myPage'
import { useSearch } from '@/util/useSearch'

interface MyPageContentsProps {
  myProfileData: GetMyProfileResponse
}
const MyPageContents = ({ myProfileData }: MyPageContentsProps) => {
  const { searchParam, handleSetParam } = useSearch()
  const curPage = searchParam.get('page') as PageType
  const navigate = useNavigate()

  const setPage = useCallback(
    (target: PageType) => {
      handleSetParam('page', target)
    },
    [handleSetParam],
  )

  useEffect(() => {
    if (curPage === null) {
      navigate(`${location.pathname}?page=my-point`, { replace: true })
    }
  }, [curPage, navigate])

  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'row',
        gap: 5,
        width: 'full',
        pb: 33,
        maxW: '1200px',
        px: { base: '60px', lgDown: '30px', mdDown: '20px' },
      })}
    >
      <div className={css({ display: 'flex', flexDir: 'column', gap: 10, w: { base: 47, mdDown: 20 }, flexShrink: 0 })}>
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
      <div className={css({ flexGrow: 1 })}>
        {match(curPage)
          .with('point-history', () => <PointHistory />)
          .with('community', () => <MyCommunity />)
          .with('course-review', () => <MyCourseReview />)
          .with('public-profile', () => <PublicProfile myProfileData={myProfileData} />)
          .with('exchange-profile', () => <ExchangeProfile myProfileData={myProfileData} />)
          .with('password', () => <ChangePassword />)
          .with('delete-account', () => <DeleteAccount />)
          .otherwise(() => (
            <MyPoint myProfileData={myProfileData} />
          ))}
      </div>
    </div>
  )
}

export default MyPageContents
