import { Facebook, Instagram, Youtube } from 'lucide-react'

import * as s from './style.css'

interface ContactButtonProps {
  type: 'instagram' | 'facebook' | 'youtube'
  url: string
}
const ContactButton = ({ type, url }: ContactButtonProps) => {
  return (
    <a href={url} target="_blank" className={s.Button}>
      {type === 'facebook' ? (
        <Facebook size={16} />
      ) : type === 'instagram' ? (
        <Instagram size={16} />
      ) : (
        <Youtube size={16} />
      )}
      <span>{type}</span>
    </a>
  )
}

export default ContactButton
