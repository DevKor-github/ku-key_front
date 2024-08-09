import { css } from '@styled-stytem/css'

const BtnStyle = css({
  h: 12,
  w: 14,
  px: 7,
  rounded: 10,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px {colors.lightGray.1} solid',
  cursor: 'pointer',
  color: 'darkGray.2',
  fontSize: 18,
  fontWeight: 500,
  zIndex: 2,
  bgColor: 'white',
  transition: 'border 0.256s',
  _hover: {
    borderColor: 'darkGray.2',
  },
})

interface ShareBtnProps extends React.HTMLAttributes<HTMLDivElement> {
  shareHandler: () => void
}

const ShareBtn = ({ children, shareHandler }: ShareBtnProps) => {
  return (
    <button className={BtnStyle} onClick={shareHandler}>
      {children}
    </button>
  )
}

export default ShareBtn
