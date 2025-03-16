import { motion } from 'framer-motion'

import * as s from '../Clubs/style.css'

import { useReadRecommendedClubs } from '@/features/HomeClubs/hooks/useReadRecommendedClubs'
import { Typography } from '@/ui/Typography'
import { useNavigateRouter } from '@/util/hooks/useNavigateRouter'
const RecommendedClubs = () => {
  const { data: recommendedClubs } = useReadRecommendedClubs()

  const navigateTo = useNavigateRouter()

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
        <button
          key={item.name}
          className={s.ItemBox}
          onClick={() => navigateTo('ClubDetailPage', { clubId: String(item.clubId) })}
        >
          <img className={s.ItemImage} src={item.imageUrl} alt={item.name} />
          <div className={s.Description}>
            <div className={s.DescriptionText}>
              <Typography
                typography="heading2M"
                mobileTypography="bodyM"
                style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
              >
                {item.name}
              </Typography>
            </div>
            <Typography
              typography="body1R"
              mobileTypography="miniTag2"
              style={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                width: '100%',
                textAlign: 'start',
              }}
            >
              {item.summary}
            </Typography>
          </div>
        </button>
      ))}
    </motion.div>
  )
}

export default RecommendedClubs
