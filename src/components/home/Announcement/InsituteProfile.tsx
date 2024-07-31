import { css, cva } from '@styled-stytem/css'
import { motion } from 'framer-motion'
import { Link } from 'lucide-react'
import { useState } from 'react'

import { InsituteProfileProps } from '@/types/school-insitute'

const profile = cva({
  base: {
    display: 'inline-flex',
    flexDir: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    animation: 'ease-out',
    transition: 'all 0.3s ease-out',
    cursor: 'pointer',
    gap: 0.5,
  },
  variants: {
    variant: { defalut: {}, onMouse: {} },
  },
  defaultVariants: {
    variant: 'defalut',
  },
})

const InsituteProfile = ({ img, name, url }: InsituteProfileProps) => {
  const [onMouse, setOnMouse] = useState(false)

  return (
    <button
      className={profile({ variant: onMouse ? 'onMouse' : 'defalut' })}
      onClick={() => window.open(url)}
      onMouseEnter={() => setOnMouse(true)}
      onMouseLeave={() => setOnMouse(false)}
    >
      <div className={css({ pos: 'relative' })}>
        <img
          src={img}
          alt="insitute profile img"
          className={css({
            w: '70px',
            h: '70px',
            rounded: 8,
            filter: 'drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25))',
          })}
        />
        <div
          className={css({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            w: '70px',
            h: '70px',
            rounded: 8,
            bgColor: onMouse ? 'black' : 'none',
            opacity: 0.4,
            animation: 'ease-out',
            transition: 'all 0.3s ease-out',
          })}
        />
      </div>
      <div
        className={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch',
        })}
      >
        <motion.div
          className={css({
            display: 'flex',
            w: '70px',
            pt: 0.5,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
          })}
        >
          <motion.p
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={css({
              fontSize: 12,
              fontWeight: 700,
              color: 'darkGray.1',
              whiteSpace: 'pre-wrap',
            })}
            transition={{
              opacity: { ease: 'easeInOut' },
              layout: { duration: 0.3 },
            }}
          >
            {name}
          </motion.p>
          {onMouse && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                display: 'flex',
                color: '#2D2D2D',
              }}
              transition={{
                ease: 'easeIn',
                duration: 0.2,
              }}
            >
              <Link size={10} />
            </motion.div>
          )}
        </motion.div>
      </div>
    </button>
  )
}

export default InsituteProfile
