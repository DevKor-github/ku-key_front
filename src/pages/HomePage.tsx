import { css } from '@styled-system/css'
import { Suspense } from 'react'

import SchoolInstitutionSection from '@/components/home/Announcement/SchoolInstitutionSection'
import HomeCarousel from '@/components/home/Carousel'
import Club from '@/components/home/Club'
import LoadingSpinner from '@/components/ui/spinner/inde'
import HomeCalendar from '@/features/HomeCalendar/components'

const HomePage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <main className={css({ display: 'flex', flexDir: 'column', alignItems: 'center', bgColor: 'bg.gray' })}>
        <HomeCarousel />
        <HomeCalendar />
        {/* <SchoolInstitutionSection />
        <Club /> */}
      </main>
    </Suspense>
  )
}

export default HomePage
