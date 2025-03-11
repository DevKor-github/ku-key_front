import { match, P } from 'ts-pattern'

import { vars } from '@/theme/theme.css'

export const getCourseRateBackgroundColor = (rate: number) => {
  return match(rate)
    .with(P.number.lt(2.5), () => vars.color.red4)
    .with(P.number.gte(2.5).and(P.number.lt(4)), () => '#FFE2CD')
    .otherwise(() => '#DEFFBF')
}

export const getCourseRateTextColor = (rate: number) => {
  return match(rate)
    .with(P.number.lt(2.5), () => vars.color.red3)
    .with(P.number.gte(2.5).and(P.number.lt(4)), () => '#FF813D')
    .otherwise(() => '#49D63C')
}
