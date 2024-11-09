import { css } from '@styled-system/css'

import Announcement from '@/components/home/Announcement'
import HomeCarousel from '@/components/home/Carousel'
import Club from '@/components/home/Club'
import { useUserData } from '@/providers/UserProvider'

const HomePage = () => {
  // const user = useUserData()
  // console.log("🚀 ~ HomePage ~ user:", user)
  return (
    <main className={css({ display: 'flex', flexDir: 'column' })}>
      <HomeCarousel />
      <Announcement />
      <Club />
    </main>
  )
}

export default HomePage
