import { css } from '@styled-system/css'
import { CircleAlert, Globe } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

import Button from '@/components/ui/button'
import ModalCard from '@/components/ui/modal'

const LanguageButton = () => {
  const languageButtonRef = useRef<HTMLButtonElement>(null)
  const [openModal, setOpenModal] = useState(false)
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 })

  const [language, setLanguage] = useState('EN')
  const handlePosition = useCallback(() => {
    if (languageButtonRef.current) {
      setModalPosition({
        top: languageButtonRef.current?.offsetTop + 32,
        left: languageButtonRef.current?.offsetLeft - 300,
      })
    }
  }, [])
  useEffect(() => {
    handlePosition()
    window.addEventListener('resize', handlePosition)
    return () => window.removeEventListener('resize', handlePosition)
  }, [handlePosition])
  return (
    <>
      <button
        ref={languageButtonRef}
        aria-pressed={openModal}
        className={css({
          w: '30px',
          h: '30px',
          rounded: 'full',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          _hover: { bgColor: 'lightGray.1' },
          transition: 'background-color 0.15s ease-in',
          _pressed: { bgColor: 'lightGray.1' },
        })}
        onClick={() => setOpenModal(!openModal)}
      >
        <Globe className={css({ color: 'black.2', w: '22px', h: '22px' })} />
      </button>
      {openModal && (
        <div
          className={css({
            position: 'absolute',
            left: 950,
            mt: 5,
            zIndex: 100,
          })}
          style={{
            top: modalPosition.top,
            left: modalPosition.left,
          }}
        >
          <ModalCard>
            <div className={css({ display: 'flex', flexDir: 'row', alignItems: 'center', gap: 2.5 })}>
              <CircleAlert size={20} className={css({ color: 'white', fill: 'red.3' })} />
              <p className={css({ fontSize: 20, fontWeight: 700, color: 'red.1' })}>Language</p>
            </div>
            <div className={css({ display: 'flex', gap: 5 })}>
              <Button variant="red_1" aria-selected={language === 'KOR'} onClick={() => setLanguage('KOR')}>
                한국어
              </Button>
              <Button variant="red_1" aria-selected={language === 'EN'} onClick={() => setLanguage('EN')}>
                English
              </Button>
            </div>
          </ModalCard>
        </div>
      )}
    </>
  )
}

export default LanguageButton
