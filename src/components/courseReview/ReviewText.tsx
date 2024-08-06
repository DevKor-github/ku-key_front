import { css, cva } from '@styled-stytem/css'
import { useFormContext } from 'react-hook-form'

import { REQUIRE_TEXT } from '@/components/courseReview/ReviewRadio'

const ReviewText = () => {
  const { register, formState } = useFormContext()
  const errorMessage = formState.errors.textReview ? String(formState.errors.textReview.message) : undefined
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        alignItems: 'flex-start',
        gap: 2.5,
        width: '100%',
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
          Review
        </span>
        {errorMessage && <span className={css({ fontSize: 9, fontWeight: 400 })}>*{errorMessage}</span>}
      </div>
      <textarea
        className={cva({
          base: {
            outline: 'none',
            px: 5,
            py: 2.5,
            bgColor: 'bg.gray',
            rounded: 10,
            border: '1px solid {colors.lightGray.1}',
            w: '100%',
            h: 45,
            color: 'black.2',
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
        {...register('textReview', { required: REQUIRE_TEXT })}
      />
    </div>
  )
}

export default ReviewText
