import { css, cva } from '@styled-system/css'

import { PAGE_LIST } from '@/lib/constants/myPage'
import { PageType } from '@/types/myPage'

interface Props {
  curPage: PageType
  setPage: (target: PageType) => void
}
const MyPageNavigator = ({ curPage, setPage }: Props) => {
  return (
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
  )
}

export default MyPageNavigator
