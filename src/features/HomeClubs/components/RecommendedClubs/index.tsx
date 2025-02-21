import { motion } from 'framer-motion'

import * as s from '../Clubs/style.css'

import { useReadRecommendedClubs } from '@/features/HomeClubs/hooks/useReadRecommendedClubs'
import { Typography } from '@/ui/Typography'

const RecommendedClubs = () => {
  const { data: recommendedClubs } = useReadRecommendedClubs()
  return (
    <motion.div
      key={'HOT'}
      className={s.ItemWrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      {recommendedClubs.map(item => (
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

export default RecommendedClubs
