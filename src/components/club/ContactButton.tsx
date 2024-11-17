import { css } from '@styled-system/css'
import { Facebook, Instagram, Youtube } from 'lucide-react'

import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'

interface ContactButtonProps {
  type: 'instagram' | 'facebook' | 'youtube'
  url: string
}
const ContactButton = ({ type, url }: ContactButtonProps) => {
  const isMobile = useMediaQueryByName('smDown')
  return (
    <a
      href={url}
      target="_blank"
      className={css({
        display: 'flex',
        flexDir: 'row',
        alignItems: 'center',
        gap: 1.5,
        color: 'darkGray.1',
        fontSize: { base: 14, smDown: 12 },
        fontWeight: 700,
        px: { base: 3, smDown: 2.5 },
        py: 1.5,
        rounded: 'full',
        border: '1px solid',
        borderColor: 'lightGray.1',
      })}
    >
      {type === 'facebook' ? (
        <Facebook size={isMobile ? 12 : 16} />
      ) : type === 'instagram' ? (
        <Instagram size={isMobile ? 12 : 16} />
      ) : (
        <Youtube size={isMobile ? 12 : 16} />
      )}
      <span>{type}</span>
    </a>
  )
}

export default ContactButton
