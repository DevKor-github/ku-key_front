import { motion } from 'framer-motion'

import * as s from '../Clubs/style.css'

import { useReadHotClubs } from '@/features/HomeClubs/hooks/useReadHotClubs'
import { Typography } from '@/ui/Typography'

const HotClubs = () => {
  const { data: hotClubs } = useReadHotClubs()
  return (
    <motion.div
      key={'HOT'}
      className={s.ItemWrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      {hotClubs.map(item => (
        <button key={item.name} className={s.ItemBox}>
          <img className={s.ItemImage} src={item.imageUrl} alt={item.name} />
          <div className={s.Description}>
            <Typography variant="desktop" typography="heading2M" style={{ color: 'rgba(33, 33, 36, 0.70)' }}>
              {item.name}
            </Typography>
          </div>
        </button>
      ))}
    </motion.div>
  )
}

export default HotClubs
