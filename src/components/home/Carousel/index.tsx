import { css, cva, cx } from '@styled-system/css'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

import { useGetBannerImages } from '@/api/hooks/calendar'
import PlayIcon from '@/assets/play.svg'
import * as s from '@/components/home/Carousel/style.css'
import { usePrevNextButtons } from '@/util/carousel-button'
import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'

const BannerStyle = cva({
  base: { w: '608px', ml: 5, flex: '0 0 auto', display: 'block', rounded: { base: 20, smDown: 0 } },
  variants: { display: { false: { display: 'none' } } },
})
const SkeletonBannerStyle = cx(BannerStyle(), css({ h: '300px' }))

const SkeletonImg = ({ imageUrl, index }: { imageUrl: string; index: number }) => {
  const [isImgLoading, setIsImgLoading] = useState(true)

  return (
    <>
      {isImgLoading && <div className={SkeletonBannerStyle} />}
      <img
        src={imageUrl}
        alt={`banner-${index}`}
        className={BannerStyle({ display: !isImgLoading })}
        onLoad={() => {
          setIsImgLoading(false)
        }}
      />
    </>
  )
}

const HomeCarousel = () => {
  const { data: banners, isSuccess: isBannerLoadedSuccess } = useGetBannerImages()

  const isMobile = useMediaQueryByName('smDown')
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
    <div className={s.Wrapper}>
      <div ref={emblaRef} className={css({ overflow: 'hidden' })}>
        <div className={css({ display: 'flex', backfaceVisibility: 'hidden' })}>
          {isBannerLoadedSuccess
            ? banners.map(({ imageUrl }, index) => (
                <SkeletonImg key={`banner-img-${index}`} imageUrl={imageUrl} index={index} />
              ))
            : Array.from({ length: 5 }, (_, index) => (
                <div key={`banner-img-${index}`} className={SkeletonBannerStyle} />
              ))}
        </div>
      </div>
      {!isMobile && (
        <div className={s.CarouselButtonWrapper}>
          <button
            className={s.CarouselButton({ position: 'left' })}
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
          >
            <ChevronLeft className={css({ w: 6, h: 6 })} />
          </button>
          <button
            className={s.CarouselButton({ position: 'right' })}
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
          >
            <ChevronRight className={css({ w: 6, h: 6 })} />
          </button>
        </div>
      )}
      <div className={s.CarouselPlayButtonWrapper}>
        <button className={s.CarouselPlayButton} onClick={onToggleAutoplay} disabled={isMobile}>
          {!isMobile && <img src={PlayIcon} alt="play icon" />}
          <div className={s.CarouselPlayText}>
            <p>
              {currentSlide + 1} / {emblaApi?.internalEngine().slideIndexes.length}
            </p>
          </div>
        </button>
      </div>
    </div>
  )
}

export default HomeCarousel
