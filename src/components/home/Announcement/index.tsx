import { css } from '@styled-stytem/css'
import { ChevronRight } from 'lucide-react'

import AnnouncementBoard from '@/components/home/Announcement/AnnouncementBoard'

const Announcement = () => {
  return (
    <div className={css({ display: 'flex', flexDir: 'column' })}>
      <div
        className={css({
          display: 'flex',
          flexDir: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: 4,
          bgColor: 'bg.gray',
          gap: 679,
          px: 'calc((100vw - 1027px)/2)',
        })}
      >
        <h1 className={css({ fontSize: 32, fontWeight: 800 })}>Announcement</h1>
        <button
          className={css({
            display: 'flex',
            alignItems: 'center',
            fontSize: 28,
            fontWeight: 600,
            color: 'red.1',
            cursor: 'pointer',
            px: 2.5,
            gap: 3.5,
          })}
        >
          more
          <ChevronRight size={24} />
        </button>
      </div>
      <AnnouncementBoard />
    </div>
  )
}

export default Announcement
