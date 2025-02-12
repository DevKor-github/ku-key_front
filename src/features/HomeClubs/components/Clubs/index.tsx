import { AnimatePresence } from 'framer-motion'
import { Suspense, useState } from 'react'

import * as s from './style.css'

import { LoadingSpinner } from '@/components/ui/spinner'
import HotClubs from '@/features/HomeClubs/components/HotClubs'
import RecommendedClubs from '@/features/HomeClubs/components/RecommendedClubs'
import { Chip } from '@/ui/Chip'
import { Typography } from '@/ui/Typography'

type Chip = 'HOT' | 'Recommended'

const HomeClubs = () => {
  const [selectedChip, setSelectedChip] = useState<Chip>('HOT')

  return (
    <section className={s.Wrapper}>
      <Typography variant="desktop" typography="titleSB" color="black">
        Introducing Club of the Week
      </Typography>
      <div className={s.Box}>
        <div className={s.ChipWrapper}>
          <Chip aria-selected={selectedChip === 'HOT'} onClick={() => setSelectedChip('HOT')}>
            HOT
          </Chip>
          <Chip aria-selected={selectedChip === 'Recommended'} onClick={() => setSelectedChip('Recommended')}>
            Recommended
          </Chip>
        </div>
        <div className={s.ItemWrapper}>
          <Suspense fallback={<ItemLoader />}>
            <AnimatePresence mode="wait">
              {selectedChip === 'HOT' ? <HotClubs /> : <RecommendedClubs />}
            </AnimatePresence>
          </Suspense>
        </div>
      </div>
    </section>
  )
}

export default HomeClubs

const ItemLoader = () => {
  return (
    <div className={s.LoadWrapper}>
      <LoadingSpinner />
    </div>
  )
}
