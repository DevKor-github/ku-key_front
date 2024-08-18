import { css, cva } from '@styled-stytem/css'
import { useCallback, useEffect } from 'react'

import MyPoint from '@/components/mypage/Contents/MyPoint'
import PointHistory from '@/components/mypage/Contents/PointHistory'
import { PAGE_LIST, PageType } from '@/types/myPage'
import { useSearch } from '@/util/useSearch'

const MyPageContents = () => {
  const { searchParam, handleSetParam } = useSearch()
  const curPage = searchParam.get('page') as PageType

  const setPage = useCallback(
    (target: PageType) => {
      handleSetParam('page', target)
    },
    [handleSetParam],
  )

  useEffect(() => {
    if (curPage === null) {
      setPage('my-point')
    }
  }, [curPage, setPage])

  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'row',
        gap: 5,
        width: 'full',
        px: 38,
        pb: 33,
      })}
    >
      <div className={css({ display: 'flex', flexDir: 'column', gap: 10, w: 47, flexShrink: 0 })}>
        <h1 className={css({ fontSize: 30, fontWeight: 700, color: 'black.1' })}>My page</h1>
        <nav className={css({ display: 'flex', flexDir: 'column', gap: 7 })}>
          {PAGE_LIST.map((sectionData, index) => {
            return (
              <section
                key={index}
                className={css({
                  display: 'flex',
                  flexDir: 'column',
                  gap: 6,
                  '& h2': { color: 'black.1', fontSize: 24, fontWeight: 700 },
                })}
              >
                <h2>{sectionData.title}</h2>
                <ul className={css({ display: 'flex', gap: 5, flexDir: 'column' })}>
                  {sectionData.children.map(({ title, handler }) => (
                    <li key={handler} className={css({ display: 'flex', gap: 2.5, alignItems: 'center' })}>
                      <div
                        className={css({ w: 1.5, h: 1.5, rounded: 'full', bgColor: 'red.2' })}
                        style={{ visibility: handler === curPage ? 'visible' : 'hidden' }}
                      />
                      <button
                        className={cva({
                          base: { color: 'black.2', fontSize: 18, cursor: 'pointer' },
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
        {(() => {
          switch (curPage) {
            case 'point-history':
              return <PointHistory />
            default:
              return <MyPoint />
          }
        })()}
      </div>
    </div>
  )
}

export default MyPageContents
