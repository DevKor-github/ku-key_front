import { match } from 'ts-pattern'

import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'

type Props = {
  desktop?: React.ReactNode
  mobile?: React.ReactNode
}

export const Responsive = ({ desktop, mobile }: Props) => {
  const isMobile = useMediaQueryByName('smDown')
  return match(isMobile)
    .with(true, () => mobile)
    .otherwise(() => desktop)
}
