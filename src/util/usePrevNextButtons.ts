import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  currentSlide: number
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
  onToggleAutoplay: () => void
  onButtonAutoplayClick: (callback: () => void) => void
}

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]
type test = CarouselPlugin & { isPlaying: () => boolean; stop: () => void; play: () => void; reset: () => void }

export const usePrevNextButtons = (emblaApi: UseEmblaCarouselType[1] | undefined): UsePrevNextButtonsType => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onToggleAutoplay = useCallback(() => {
    if (!emblaApi) return
    const autoplay = emblaApi.plugins().autoplay
    if (!autoplay) return
    const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play
    playOrStop()
  }, [emblaApi])

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoplay = emblaApi?.plugins()?.autoplay
      if (!autoplay) return

      const resetOrStop = autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop

      resetOrStop()
      callback()
    },
    [emblaApi],
  )

  const onSelect = useCallback((emblaApi: UseEmblaCarouselType[1]) => {
    if (!emblaApi) return
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
    const currentSlideIndex = emblaApi.internalEngine().index.get()
    setCurrentSlide(currentSlideIndex)
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    onPrevButtonClick,
    onNextButtonClick,
    currentSlide,
    onToggleAutoplay,
    onButtonAutoplayClick,
    prevBtnDisabled,
    nextBtnDisabled,
  }
}
