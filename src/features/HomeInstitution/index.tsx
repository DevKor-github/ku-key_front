import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'

import * as s from './style.css'

import { BROADCASTS } from '@/lib/school-institute/broadcasts'
import { ETC } from '@/lib/school-institute/etc'
import { Chip } from '@/ui/Chip'
import { Typography } from '@/ui/Typography'

type Chip = 'Broadcast' | 'ETC'

const HomeInstitution = () => {
  const [selectedChip, setSelectedChip] = useState<Chip>('Broadcast')

  const items = useMemo(() => (selectedChip === 'Broadcast' ? BROADCASTS : ETC), [selectedChip])
  return (
    <section className={s.Wrapper}>
      <Typography variant="desktop" typography="display2SB" color="black">
        Introducing KU's Official Website
      </Typography>
      <div className={s.Box}>
        <div className={s.ChipWrapper}>
          <Chip aria-selected={selectedChip === 'Broadcast'} onClick={() => setSelectedChip('Broadcast')}>
            Broadcast
          </Chip>
          <Chip aria-selected={selectedChip === 'ETC'} onClick={() => setSelectedChip('ETC')}>
            ETC
          </Chip>
        </div>
        <div className={s.ItemWrapper}>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedChip}
              className={s.ItemWrapper}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              {items.map(item => (
                <button className={s.ItemBox} onClick={() => window.open(item.url, '_blank')}>
                  <img className={s.ItemImage} src={item.img} alt={item.name} />
                  <Typography variant="desktop" typography="heading2M" style={{ color: 'rgba(33, 33, 36, 0.70)' }}>
                    {item.name}
                  </Typography>
                </button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default HomeInstitution
