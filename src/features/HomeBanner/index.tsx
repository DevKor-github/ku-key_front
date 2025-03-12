import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

import * as s from './style.css'

import { useReadHomeBanner } from '@/domain/HomeCalendar/hooks/useReadHomeBanner'
import { Typography } from '@/ui/Typography'
import { usePrevNextButtons } from '@/util/carousel-button'

const HomeBanner = () => {
  const { data: banners } = useReadHomeBanner()

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
            <img src={imageUrl} alt={`banner-img-${index}`} className={s.EmblaSlide} />
          ))}
        </div>
      </div>
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
    </section>
  )
}

export default HomeBanner
