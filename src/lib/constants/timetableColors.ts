import { ColorType } from '@/types/timetable'

export const COLOR_INFO: { [key in ColorType]: { symbol: string; rand: string[] } } = {
  Red: {
    symbol: '#F37979',
    rand: ['rgba(255, 0, 0, 0.5)', 'rgba(243, 121, 121, 0.5)', 'rgba(212, 59, 59, 0.5)', 'rgba(255, 69, 69, 0.5)'],
  },
  Blue: {
    symbol: '#79D6F3',
    rand: ['rgba(255, 0, 0, 0.5)', 'rgba(243, 121, 121, 0.5)', 'rgba(212, 59, 59, 0.5)', 'rgba(255, 69, 69, 0.5)'],
  },
  Gray: {
    symbol: '#D6D6D6',
    rand: ['rgba(255, 0, 0, 0.5)', 'rgba(243, 121, 121, 0.5)', 'rgba(212, 59, 59, 0.5)', 'rgba(255, 69, 69, 0.5)'],
  },
  Green: {
    symbol: '#91F379',
    rand: ['rgba(255, 0, 0, 0.5)', 'rgba(243, 121, 121, 0.5)', 'rgba(212, 59, 59, 0.5)', 'rgba(255, 69, 69, 0.5)'],
  },
  Orange: {
    symbol: '#F3AC79',
    rand: ['rgba(255, 0, 0, 0.5)', 'rgba(243, 121, 121, 0.5)', 'rgba(212, 59, 59, 0.5)', 'rgba(255, 69, 69, 0.5)'],
  },
  Purple: {
    symbol: '#E279F3',
    rand: ['rgba(255, 0, 0, 0.5)', 'rgba(243, 121, 121, 0.5)', 'rgba(212, 59, 59, 0.5)', 'rgba(255, 69, 69, 0.5)'],
  },
}
