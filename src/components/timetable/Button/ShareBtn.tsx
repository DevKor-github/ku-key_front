import { css } from '@styled-system/css'
import { Download } from 'lucide-react'

const BtnStyle = css({
  h: 12,
  w: 14,
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

interface ShareBtnProps {
  shareHandler: () => void
}

const ShareBtn = ({ shareHandler }: ShareBtnProps) => {
  return (
    <button className={BtnStyle} onClick={shareHandler}>
      <Download />
    </button>
  )
}

export default ShareBtn
