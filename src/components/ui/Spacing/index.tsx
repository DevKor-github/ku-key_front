import { forwardRef, memo, Ref } from 'react'
import { match } from 'ts-pattern'

import pxToRem from '@/util/pxToRem'

type Props = {
  size: number
  fill?: string
  direction?: 'horizontal' | 'vertical'
}

export const Spacing = forwardRef(
  ({ size, fill = 'transparent', direction = 'horizontal' }: Props, ref: Ref<HTMLDivElement>) => {
    return match(direction)
      .with('vertical', () => (
        <div
          ref={ref}
          aria-hidden
          style={{
            minWidth: `${pxToRem(size)}rem`,
            minHeight: '100%',
            backgroundColor: fill,
          }}
        />
      ))
      .otherwise(() => (
        <div
          ref={ref}
          aria-hidden
          style={{
            minWidth: '100%',
            minHeight: `${pxToRem(size)}rem`,
            backgroundColor: fill,
          }}
        />
      ))
  },
)

export const VerticalSpacing = memo((props: Omit<Props, 'direction'>) => <Spacing direction="vertical" {...props} />)

export const HorizontalSpacing = memo((props: Omit<Props, 'direction'>) => (
  <Spacing direction="horizontal" {...props} />
))
