import { css } from '@styled-stytem/css'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

import PlayIcon from '@/assets/play.svg'
import CarouselCard from '@/components/home/Carousel/CarouselCard'
import { usePrevNextButtons } from '@/util/carousel-button'

const HomeCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, [Autoplay()])

  const [currentSlide, setCurrentSlide] = useState(0)

  const logSlidesInView = useCallback((emblaApi: UseEmblaCarouselType[1]) => {
    if (emblaApi) {
      const currentSlideIndex = emblaApi.internalEngine().index.get()
      setCurrentSlide(currentSlideIndex)
    }
  }, [])

  const { onPrevButtonClick, onNextButtonClick, onToggleAutoplay, onButtonAutoplayClick } = usePrevNextButtons(emblaApi)

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
        pt: '50px',
        pb: 25,
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
          w: '608px',
          pos: 'absolute',
          h: 75,
          rounded: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
          minW: 0,
          px: '61px',
        })}
      >
        <button
          className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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
          onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
        >
          <ChevronLeft className={css({ w: 6, h: 6 })} />
        </button>
        <button
          className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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
          onClick={() => onButtonAutoplayClick(onNextButtonClick)}
        >
          <ChevronRight className={css({ w: 6, h: 6 })} />
        </button>
      </div>
      <div
        className={css({
          display: 'flex',
          w: '608px',
          pos: 'absolute',
          h: 75,
          rounded: 20,
          flexDir: 'row',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          minW: 0,
          pr: '89px',
          pb: '22px',
        })}
      >
        <button
          className={css({
            display: 'inline-flex',
            pl: 3.5,
            pr: 3,
            py: 1,
            alignItems: 'center',
            gap: 2.5,
            rounded: 48,
            bgColor: 'rgba(0,0,0,0.20)',
            cursor: 'pointer',
          })}
          onClick={onToggleAutoplay}
        >
          <img src={PlayIcon} alt="play icon" />
          <div
            className={css({
              display: 'flex',
              pt: '1px',
              gap: '3px',
              color: 'white',
              fontSize: '14px',
              fontWeight: 700,
            })}
          >
            <p>{currentSlide + 1}</p>
            <p>/ {emblaApi?.internalEngine().slideIndexes.length}</p>
          </div>
        </button>
      </div>
    </div>
  )
}

export default HomeCarousel
