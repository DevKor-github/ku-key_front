import { css } from '@styled-system/css'
import { motion, PanInfo } from 'framer-motion'
import { PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react'

interface DrawerBodyProps extends PropsWithChildren {
  close: () => void
}

const DrawerBody = ({ children, close }: DrawerBodyProps) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    // UI 페인팅 이후 계산
    if (contentRef.current) {
      setHeight(Math.min(contentRef.current.clientHeight, window.innerHeight))
    }
  }, [children])

  const onDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const offsetThreshold = 150
      const deltaThreshold = 5

      const isOverOffsetThreshold = Math.abs(info.offset.y) > offsetThreshold
      const isOverDeltaThreshold = Math.abs(info.delta.y) > deltaThreshold

      const isOverThreshold = isOverOffsetThreshold || isOverDeltaThreshold

      if (!isOverThreshold) return

      info.offset.y >= 0 && close()
    },
    [close],
  )

  return (
    <motion.div
      key="drawer_body"
      className={css({
        pos: 'fixed',
        top: '100dvh',
        left: 0,
        w: 'full',
        h: '100dvh',
        bgColor: 'white',
        rounded: '20px 20px 0 0',
        willChange: 'transform',
        pt: '15px',
        zIndex: 101,
        display: 'flex',
        flexDir: 'column',
      })}
      drag={'y'}
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0.4}
      variants={{
        opened: { top: `calc(100dvh - ${height}px)` },
        closed: { top: '100dvh' },
      }}
      initial={'closed'}
      animate={'opened'}
      exit={'closed'}
      onDragEnd={onDragEnd}
    >
      <div
        className={css({
          bgColor: 'darkGray.2',
          rounded: 'full',
          h: 1,
          w: '49px',
          alignSelf: 'center',
          mb: '15px',
        })}
      />
      <div ref={contentRef} className={css({ w: 'full', h: 'fit-content' })}>
        {children}
      </div>
    </motion.div>
  )
}

export default DrawerBody
