import { css, cva } from '@styled-system/css'
import { useFormContext } from 'react-hook-form'

import RateCookie from '@/assets/RateCookie.png'
import { REQUIRE_TEXT } from '@/components/courseReview/ReviewChoiceChips'

const ReviewTotalRate = () => {
  const { register, formState, watch, setValue } = useFormContext()
  const errorMessage = formState.errors.rate ? String(formState.errors.rate.message) : undefined

  const chipsArray: JSX.Element[] = []

  for (let i = 0; i < 5; i++) {
    chipsArray.push(
      <button
        key={i}
        type="button"
        onClick={() => setValue('rate', i + 1)}
        className={css({
          rounded: 'full',
          w: '18px',
          h: '18px',
          cursor: 'pointer',
          bgSize: 'cover',
          bgPosition: 'center',
        })}
        style={{
          backgroundImage: i < watch('rate') ? `url(${RateCookie})` : 'none',
          backgroundColor: i < watch('rate') ? 'transparent' : '#D9D9D9',
        }}
      />,
    )
  }
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        alignItems: 'flex-start',
        gap: 2.5,
      })}
    >
      <div
        className={cva({
          base: {
            color: 'lightGray.1',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          },
          variants: {
            isError: {
              true: {
                color: 'red.1',
              },
            },
          },
        })({ isError: errorMessage !== undefined })}
      >
        <span
          className={css({
            fontWeight: 700,
            fontSize: 14,
          })}
        >
          Total Rate
        </span>
        {errorMessage && <span className={css({ fontSize: 9, fontWeight: 400 })}>*{errorMessage}</span>}
      </div>
      <div
        className={cva({
          base: {
            display: 'flex',
            px: 5,
            py: 2.5,
            bgColor: 'bg.gray',
            rounded: 10,
            border: '1px solid {colors.lightGray.1}',
            gap: 2.5,
            color: 'darkGray.2',
            alignItems: 'center',
          },
          variants: {
            isError: {
              true: {
                bgColor: 'bg.red.1',
                borderColor: 'red.1',
              },
            },
          },
        })({ isError: errorMessage !== undefined })}
      >
        <div className={css({ display: 'flex', gap: 1, alignItems: 'center' })}>{chipsArray}</div>
        <span>{watch('rate')}/5</span>
        <input type="hidden" {...register('rate', { min: { value: 1, message: REQUIRE_TEXT }, max: 5 })} />
      </div>
    </div>
  )
}

export default ReviewTotalRate
