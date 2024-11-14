import { useRef } from 'react'

const useScrollLock = () => {
  const body = document.querySelector('body') as HTMLElement
  const scrollPosition = useRef<number>(0)

  const lockScroll = () => {
    scrollPosition.current = window.pageYOffset
    body.style.overflow = 'hidden'
    body.style.pointerEvents = 'none'
    body.style.position = 'fixed'
    body.style.top = `-${scrollPosition.current}px`
    body.style.left = '0'
    body.style.right = '0'
  }

  const unlockScroll = () => {
    body.style.removeProperty('overflow')
    body.style.removeProperty('pointer-events')
    body.style.removeProperty('position')
    body.style.removeProperty('top')
    body.style.removeProperty('left')
    body.style.removeProperty('right')
    window.scrollTo(0, scrollPosition.current)
  }

  return { lockScroll, unlockScroll }
}

export default useScrollLock
