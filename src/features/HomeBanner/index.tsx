import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

import * as s from './style.css'

import { useGetBannerImages } from '@/api/hooks/calendar'
import KUkeyLogo from '@/assets/Ku-key_Big.png'
import { Button } from '@/ui/Button'
import { Typography } from '@/ui/Typography'
import { useAuth } from '@/util/auth/useAuth'
import { usePrevNextButtons } from '@/util/carousel-button'

const HomeBanner = () => {
  const { authState } = useAuth()
  const navigate = useNavigate()
  const { data: banners } = useGetBannerImages()

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, [Autoplay()])

  const [currentSlide, setCurrentSlide] = useState(0)

  const logSlidesInView = useCallback((emblaApi: UseEmblaCarouselType[1]) => {
    if (emblaApi) {
      const currentSlideIndex = emblaApi.internalEngine().index.get()
      setCurrentSlide(currentSlideIndex)
    }
  }, [])

  const { onPrevButtonClick, onNextButtonClick, onButtonAutoplayClick } = usePrevNextButtons(emblaApi)

  useEffect(() => {
    if (emblaApi) emblaApi.on('select', logSlidesInView)
  }, [emblaApi, logSlidesInView])

  return (
    <section className={s.Wrapper}>
      {/* embla__viewport */}
      <div ref={emblaRef} className={s.EmblaViewport}>
        {/* embla__container */}
        <div className={s.EmblaContainer}>
          {banners?.map(({ imageUrl }, index) => (
            <div key={`banner-img-${index}`} className={s.EmblaSlide}>
              <img src={imageUrl} alt={`banner-img-${index}`} style={{ width: '80%' }} />
            </div>
          ))}
        </div>
      </div>
      <div className={s.RelativeWrapper}>
        <div className={s.LoginWrapper}>
          {!authState && (
            <div className={s.LoginBox}>
              <div className={s.LoginTitle}>
                <img src={KUkeyLogo} alt="KUkeyLogo" style={{ maxWidth: '17.5rem' }} />
                <Typography variant="desktop" typography="heading1SB" color="darkGray1">
                  For KU Exchange Students
                </Typography>
              </div>
              <div className={s.ButtonWrapper}>
                <Button variant="gray" style={{ width: '100%' }} onClick={() => navigate('/register')}>
                  Sign Up
                </Button>
                <Button variant="red" style={{ width: '100%' }} onClick={() => navigate('/login')}>
                  Login
                </Button>
              </div>
            </div>
          )}
          <div className={s.CarouselButton}>
            <HiChevronLeft className={s.Icon} onClick={() => onButtonAutoplayClick(onPrevButtonClick)} />
            <Typography variant="desktop" typography="body1M" color="white">
              {currentSlide + 1}/<span style={{ color: 'rgba(255, 255, 255, 0.60)' }}>{banners?.length}</span>
            </Typography>
            <HiChevronRight className={s.Icon} onClick={() => onButtonAutoplayClick(onNextButtonClick)} />
          </div>
          <div className={s.MobileCarouselButton}>
            <Typography mobileTypography="miniTag1M" color="white">
              {currentSlide + 1}/
            </Typography>
            <Typography mobileTypography="miniTag1M" color="lightGray1">
              {banners?.length}
            </Typography>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeBanner
