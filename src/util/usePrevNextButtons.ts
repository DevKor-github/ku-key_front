import { UseEmblaCarouselType } from 'embla-carousel-react'
import { useCallback } from 'react'

type UsePrevNextButtonsType = {
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
  onToggleAutoplay: () => void
  onButtonAutoplayClick: (callback: () => void) => void
}

export const usePrevNextButtons = (emblaApi: UseEmblaCarouselType[1] | undefined): UsePrevNextButtonsType => {
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
    const autoplay = emblaApi.plugins()?.autoplay
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

  return { onPrevButtonClick, onNextButtonClick, onToggleAutoplay, onButtonAutoplayClick }
}
