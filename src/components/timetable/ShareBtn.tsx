import { cva } from '@styled-stytem/css'

const BtnStyle = cva({
  base: {
    h: 12,
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
  },
  variants: {
    icon: { true: { w: 14, px: 0 } },
  },
})

interface ShareBtnProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: boolean
}

const ShareBtn = ({ children, icon }: ShareBtnProps) => {
  return <button className={BtnStyle({ icon })}>{children}</button>
}

export default ShareBtn
