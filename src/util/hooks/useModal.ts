import { useCallback, useEffect, useRef, useState } from 'react'

export const useModal = (selfClose?: boolean) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = useCallback(() => setIsOpen(true), [])
  const handleLayoutClose = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsOpen(false)
    }
  }, [])

  const handleButtonClose = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (isOpen && selfClose) {
      const timer = setTimeout(() => {
        setIsOpen(false)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [selfClose, isOpen])
  return { isOpen, handleOpen, handleLayoutClose, handleButtonClose, modalRef }
}
