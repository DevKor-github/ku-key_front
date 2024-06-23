import { css } from '@styled-stytem/css'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

import CarouselCard from '@/components/home/CarouselCard'

const HomeCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, [Autoplay()])

  const [currentSlide, setCurrentSlide] = useState(0)
  const logSlidesInView = useCallback((emblaApi: UseEmblaCarouselType[1]) => {
    if (emblaApi) {
      const currentSlideIndex = emblaApi.internalEngine().index.get()
      setCurrentSlide(currentSlideIndex)
    }
  }, [])

  useEffect(() => {
    if (emblaApi) emblaApi.on('select', logSlidesInView)
  }, [emblaApi, logSlidesInView])

  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgColor: 'bg.gray',
        w: 'full',
        maxW: 'auto',
      })}
    >
      <div ref={emblaRef} className={css({ overflow: 'hidden' })}>
        <div className={css({ display: 'flex', backfaceVisibility: 'hidden' })}>
          <CarouselCard
            title="Welcome to KU!"
            content="new semester start"
            date="2024.03.02"
            selected={currentSlide === 0}
          />
          <CarouselCard
            title="Study with KU!"
            content="Course registration period"
            date="2024.03.11"
            selected={currentSlide === 1}
          />
          <CarouselCard
            title="Notice from KU!"
            content="currently updated notice"
            date="2024.06.14"
            selected={currentSlide === 2}
          />
          <CarouselCard title="Test from KU!" content="dummy data" date="2024.06.18" selected={currentSlide === 3} />
        </div>
      </div>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pos: 'absolute',
          top: 200,
          left: 630,
          rounded: 'full',
          w: 10,
          h: 10,
          zIndex: 50,
          bgColor: 'white',
          opacity: 0.7,
          cursor: 'pointer',
        })}
      >
        <ChevronLeft className={css({ w: 6, h: 6 })} />
      </div>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pos: 'absolute',
          top: 200,
          right: 630,
          rounded: 'full',
          w: 10,
          h: 10,
          zIndex: 50,
          bgColor: 'white',
          opacity: 0.7,
          cursor: 'pointer',
        })}
      >
        <ChevronRight className={css({ w: 6, h: 6 })} />
      </div>
    </div>
  )
}

export default HomeCarousel
