import { ReactNode } from 'react'

import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'

interface Props {
  mobile?: ReactNode
  desktop?: ReactNode
}
const Responsive = ({ mobile, desktop }: Props) => {
  const isMobile = useMediaQueryByName('smDown')
  return isMobile ? mobile : desktop
}

export default Responsive
