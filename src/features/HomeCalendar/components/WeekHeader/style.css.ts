import { css } from '@styled-system/css'

export const Wrapper = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 2.5,
  smDown: { display: 'grid', flexDir: 'row', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.25rem', w: 'full' },
})

export const DayWrapper = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  w: { base: '3.0625rem', smDown: 'auto' },
})
