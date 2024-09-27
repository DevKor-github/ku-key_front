import { css, cva } from '@styled-system/css'
import { Fragment } from 'react'
import { useFormContext } from 'react-hook-form'

export const REQUIRE_TEXT = 'This field is required'

interface ReviewChoiceChipsProps {
  title: string
  category: string
  options: readonly string[]
}
const ReviewChoiceChips = ({ title, category, options }: ReviewChoiceChipsProps) => {
  const { setValue, register, watch, formState } = useFormContext()
  const errorMessage = formState.errors[category] ? String(formState.errors[category]?.message) : undefined
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
          {title}
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
            gap: 3,
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
        {options.map((option, index) => {
          if (index) {
            return (
              <Fragment key={option}>
                <button
                  type="button"
                  className={cva({
                    base: { fontSize: 18, cursor: 'pointer' },
                    variants: { selected: { true: { color: 'black.2' } } },
                  })({ selected: watch(category) === index })}
                  onClick={() => setValue<string>(category, index)}
                >
                  {option}
                </button>
                {index !== options.length - 1 && '|'}
              </Fragment>
            )
          }
        })}
        <input type="hidden" {...register(category, { min: { value: 1, message: REQUIRE_TEXT } })} />
      </div>
    </div>
  )
}

export default ReviewChoiceChips
