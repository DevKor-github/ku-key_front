import { ColorType } from '@/types/timetable'

export const COLOR_INFO: { [key in ColorType]: { symbol: string; rand: string[] } } = {
  Red: {
    symbol: '#F37979',
    rand: ['rgba(255, 0, 0, 0.5)', 'rgba(243, 121, 121, 0.5)', 'rgba(212, 59, 59, 0.5)', 'rgba(255, 69, 69, 0.5)'],
  },
  Blue: {
    symbol: '#79D6F3',
    rand: ['#DDE8F6', '#C5D3E4', '#A2E0F4', '#B0DDEB'],
  },
  Gray: {
    symbol: '#D6D6D6',
    rand: ['#D3D3D3', '#CCCCCC', '#E9E9E9', '#D6D6D6'],
  },
  Green: {
    symbol: '#91F379',
    rand: ['#EFF9CD', '#DBF2E9', '#C3F2B7', '#B5CEAF'],
  },
  Orange: {
    symbol: '#F3AC79',
    rand: ['#EDA776', '#EDA876', '#EFB58A', '#FFAA45'],
  },
  Purple: {
    symbol: '#E279F3',
    rand: ['#BE9EE8', '#D3BEED', '#CC8ED5', '#DFB0E7'],
  },
}
