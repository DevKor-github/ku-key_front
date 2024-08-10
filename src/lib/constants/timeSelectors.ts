export const hSelectors = [
  '09h',
  '10h',
  '11h',
  '12h',
  '13h',
  '14h',
  '15h',
  '16h',
  '17h',
  '18h',
  '19h',
  '20h',
  '21h',
  '22h',
  '23h',
] as const
export const mSelectors = ['00m', '05m', '10m', '15m', '20m', '25m', '30m', '35m', '40m', '45m', '50m', '55m'] as const
export type hTypes = (typeof hSelectors)[number]
export type mTypes = (typeof mSelectors)[number]
