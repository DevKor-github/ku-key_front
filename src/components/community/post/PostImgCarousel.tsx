import { css } from '@styled-system/css'
import { carouselButton } from '@styled-system/recipes'
import useEmblaCarousel from 'embla-carousel-react'
import { useAtomValue } from 'jotai'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { memo } from 'react'

import PostImgContainer from '@/components/community/post/PostImgContainer'
import { postAtom } from '@/lib/store/post'
import { usePrevNextButtons } from '@/util/usePrevNextButtons'

const PostImgCarousel = memo(() => {
  const postAtomData = useAtomValue(postAtom)
  const [emblaRef, emblaApi] = useEmblaCarousel({ active: postAtomData.imageDirs.length > 1 })

  const { onPrevButtonClick, onNextButtonClick, prevBtnDisabled, nextBtnDisabled, currentSlide } =
    usePrevNextButtons(emblaApi)

  return (
    <section
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        w: 'full',
        pos: 'relative',
      })}
      ref={emblaRef}
    >
      <div className={css({ display: 'flex', backfaceVisibility: 'hidden', w: 'full' })}>
        {postAtomData.imageDirs.map(img => (
          <PostImgContainer key={img.id} img={img?.imgDir} />
        ))}
      </div>
      <div className={css({ display: 'flex', pos: 'absolute', px: 5, left: 0 })}>
        <button
          disabled={prevBtnDisabled}
          className={carouselButton()}
          onClick={onPrevButtonClick}
          hidden={postAtomData.imageDirs.length === 1}
        >
          <ChevronLeft />
        </button>
      </div>
      <div
        className={css({ display: 'flex', pos: 'absolute', px: 5, right: 0 })}
        hidden={postAtomData.imageDirs.length === 1}
      >
        <button disabled={nextBtnDisabled} className={carouselButton()} onClick={onNextButtonClick}>
          <ChevronRight />
        </button>
      </div>
      <div className={css({ display: 'flex', pos: 'absolute', bottom: 0, pb: 5 })}>
        <button
          className={css({
            display: 'inline-flex',
            px: 3,
            py: 1,
            alignItems: 'center',
            gap: 2.5,
            rounded: 48,
            bgColor: 'rgba(0,0,0,0.50)',
            color: 'white',
            fontSize: 14,
            fontWeight: 400,
          })}
        >
          <div
            className={css({
              display: 'flex',
              pt: '1px',
              gap: '3px',
              color: 'white',
              fontSize: 14,
              fontWeight: 400,
            })}
          >
            <span className={css({ fontWeight: 700 })}>{currentSlide + 1}</span>
            <p>/ {emblaApi?.internalEngine().slideIndexes.length}</p>
          </div>
        </button>
      </div>
    </section>
  )
})

export default PostImgCarousel
