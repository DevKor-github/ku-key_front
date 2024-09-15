import { css } from '@styled-system/css'

const PreviewTextWrapper = ({ children }: { children: JSX.Element[] }) => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        alignItems: 'flex-start',
        gap: 2.5,
        alignSelf: 'stretch',
      })}
    >
      {children}
    </div>
  )
}

export default PreviewTextWrapper
