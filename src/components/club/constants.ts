// TODO: 사진 등록
export const CATEGORY_LIST = [
  { text: 'ALL', imgSrc: '', type: null },
  { text: 'Instrumental Arts', imgSrc: '', type: 'Instrumental Arts' },
  { text: 'Social', imgSrc: '', type: 'Social' },
  { text: 'Life & Culture', imgSrc: '', type: 'Life & Culture' },
  { text: 'Performing Arts', imgSrc: '', type: 'Performing Arts' },
  { text: 'Humanities', imgSrc: '', type: 'Humanities' },
  { text: 'Exhibition & Creative Writing', imgSrc: '', type: 'Exhibition & Creative Writing' },
  { text: 'Religious', imgSrc: '', type: 'Religious' },
  { text: 'Sports', imgSrc: '', type: 'Sports' },
  { text: 'Academic Research', imgSrc: '', type: 'Academic Research' },
] as const

export type CategoryType = (typeof CATEGORY_LIST)[number]['type']
