import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { HiLink } from 'react-icons/hi'

import * as s from './style.css'

import { Responsive } from '@/common/Responsive'
import { BROADCASTS } from '@/lib/school-institute/broadcasts'
import { ETC } from '@/lib/school-institute/etc'
import { vars } from '@/theme/theme.css'
import { InstituteProfileProps } from '@/types/school-institute'
import { Chip } from '@/ui/Chip'
import { Typography } from '@/ui/Typography'

type Chip = 'Broadcast' | 'ETC'

const HomeInstitution = () => {
  const [selectedChip, setSelectedChip] = useState<Chip>('Broadcast')

  const items = useMemo(() => (selectedChip === 'Broadcast' ? BROADCASTS : ETC), [selectedChip])
  return (
    <section className={s.Wrapper}>
      <Typography variant="desktop" typography="titleSB" color="black">
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
                <Responsive
                  key={item.name}
                  desktop={<DesktopInstitutionItem key={item.name} {...item} />}
                  mobile={<MobileInstitutionItem key={item.name} {...item} />}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default HomeInstitution

const DesktopInstitutionItem = (item: InstituteProfileProps) => {
  return (
    <button key={item.name} className={s.ItemBox} onClick={() => window.open(item.url, '_blank')}>
      <img className={s.ItemImage} src={item.img} alt={item.name} />
      <Typography variant="desktop" typography="heading2M" style={{ color: 'rgba(33, 33, 36, 0.70)' }}>
        {item.name}
      </Typography>
    </button>
  )
}

const MobileInstitutionItem = (item: InstituteProfileProps) => {
  return (
    <button key={item.name} className={s.MobileItemBox} onClick={() => window.open(item.url, '_blank')}>
      <div className={s.MobileItemImage}>
        <img className={s.ItemImage} src={item.img} alt={item.name} />
        <Typography mobileTypography="miniTag1R" style={{ textAlign: 'start' }}>
          {item.name}
        </Typography>
      </div>
      <HiLink color={vars.color.darkGray1} />
    </button>
  )
}
