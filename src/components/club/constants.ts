// TODO: 사진 등록
export const CATEGORY_LIST = [
  { text: 'ALL', imgSrc: '' },
  { text: 'Instrumental Arts', imgSrc: '' },
  { text: 'Social', imgSrc: '' },
  { text: 'Life & Culture', imgSrc: '' },
  { text: 'Performing Arts', imgSrc: '' },
  { text: 'Humanities', imgSrc: '' },
  { text: 'Exhibition & Creative Writing', imgSrc: '' },
  { text: 'Religious', imgSrc: '' },
  { text: 'Sports', imgSrc: '' },
  { text: 'Academic Research', imgSrc: '' },
] as const

export type CategoryType = (typeof CATEGORY_LIST)[number]['text']
