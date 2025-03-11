import * as s from './style.css'

import InstagramIcon from '@/assets/icon/InstagramIcon'
import YoutubeIcon from '@/assets/icon/YoutubeIcon'

interface ContactButtonProps {
  type: 'instagram' | 'youtube'
  url: string
}
const ContactButton = ({ type, url }: ContactButtonProps) => {
  return (
    <a href={url} target="_blank" className={s.Button}>
      {type === 'youtube' ? <YoutubeIcon /> : <InstagramIcon />}
    </a>
  )
}

export default ContactButton
