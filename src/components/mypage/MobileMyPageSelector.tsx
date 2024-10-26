import { css, cva } from '@styled-system/css'

import { PAGE_LIST } from '@/lib/constants/myPage'
import { PageType } from '@/types/myPage'

const SectionStyle = css({
  display: 'flex',
  flexDir: 'column',
  py: 2.5,
  bgColor: 'white',
})

const SelectorStyle = cva({
  base: {
    px: 5,
    py: 2.5,
    fontSize: 16,
    lineHeight: 1.2,
  },
  variants: {
    variant: {
      header: {
        color: 'black',
        fontWeight: 600,
      },
      children: {
        display: 'flex',
        gap: 2,
        color: 'darkGray.1',
        fontWeight: 400,
        cursor: 'pointer',
        alignItems: 'center',
      },
    },
  },
})

interface MobileMyPageSelectorProps {
  setPage: (target: PageType) => void
}

const MobileMyPageSelector = ({ setPage }: MobileMyPageSelectorProps) => {
  return (
    <div className={css({ display: 'flex', flexDir: 'column', bgColor: 'white', w: 'full' })}>
      <div
        className={css({
          h: 15,
          px: 5,
          display: 'flex',
          alignItems: 'center',
          fontSize: 18,
          fontWeight: 700,
          lineHeight: 1.2,
        })}
      >
        My Page
      </div>
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          gap: 5,
          bgColor: 'lightGray.2',
        })}
      >
        {PAGE_LIST.map((sectionData, index) => {
          return (
            <ul key={index} className={SectionStyle}>
              <li className={SelectorStyle({ variant: 'header' })}>{sectionData.title}</li>
              {sectionData.children.map(({ title, handler, icon }) => (
                <button
                  key={handler}
                  onClick={() => {
                    if (handler) setPage(handler)
                  }}
                >
                  <li className={SelectorStyle({ variant: 'children' })}>
                    <img src={icon} alt="kukey" />
                    {title}
                  </li>
                </button>
              ))}
            </ul>
          )
        })}
      </div>
    </div>
  )
}

export default MobileMyPageSelector
