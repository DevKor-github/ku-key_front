import { css } from '@styled-system/css'
import { Facebook, Instagram, Youtube } from 'lucide-react'

interface ContactButtonProps {
  type: 'instagram' | 'facebook' | 'youtube'
  url: string
}
const ContactButton = ({ type, url }: ContactButtonProps) => {
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
        fontSize: 14,
        fontWeight: 700,
        px: 3,
        py: 1.5,
        rounded: 'full',
        border: '1px solid',
        borderColor: 'lightGray.1',
      })}
    >
      {type === 'facebook' ? <Facebook /> : type === 'instagram' ? <Instagram /> : <Youtube />}
      <span>{type}</span>
    </a>
  )
}

export default ContactButton
