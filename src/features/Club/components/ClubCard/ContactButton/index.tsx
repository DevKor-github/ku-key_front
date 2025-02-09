import { Facebook, Instagram, Youtube } from 'lucide-react'

import * as s from './style.css'

import InstagramWithGradientIcon from '@/assets/icon/InstagramWithGradientIcon'
import { Responsive } from '@/common/Responsive'
import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'

interface ContactButtonProps {
  type: 'instagram' | 'facebook' | 'youtube'
  url: string
}
const ContactButton = ({ type, url }: ContactButtonProps) => {
  const isMobile = useMediaQueryByName('smDown')

  const ICON_SIZE = isMobile ? 25 : 16

  return (
    <a href={url} target="_blank" className={s.Button}>
      {type === 'facebook' ? (
        <Facebook size={ICON_SIZE} />
      ) : type === 'instagram' ? (
        <Responsive desktop={<Instagram size={ICON_SIZE} />} mobile={<InstagramWithGradientIcon />} />
      ) : (
        <Youtube size={ICON_SIZE} />
      )}
      <Responsive desktop={<span>{type}</span>} />
    </a>
  )
}

export default ContactButton
