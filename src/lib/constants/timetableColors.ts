import { ColorType } from '@/types/timetable'

export const COLOR_INFO: { [key in ColorType]: { symbol: string; rand: string[] } } = {
  Red: {
    symbol: '#F17272',
    rand: ['#F5DBDCCC', '#EE9D9DCC', '#F15151CC', '#C91717CC', '#711517CC'],
  },
  Blue: {
    symbol: '#CDFDFC',
    rand: ['#FDFFFDCC', '#DAFFEFCC', '#C1FDFBCC', '#64B6ACCC', '#5D737ECC'],
  },
  Green: {
    symbol: '#ADCEB4',
    rand: ['#EFF9CD', '#DBF2E9', '#C3F2B7', '#B5CEAF'],
  },
  Gray: {
    symbol: '#898989',
    rand: ['#D3D3D3', '#CCCCCC', '#E9E9E9', '#D6D6D6'],
  },
  Orange: {
    symbol: '#F3B8D5',
    rand: ['#EDA776', '#EDA876', '#EFB58A', '#FFAA45'],
  },
  // 아래부터는 실제로 사용하지 않는 친구들
  Purple: {
    symbol: '#E279F3',
    rand: ['#BE9EE8', '#D3BEED', '#CC8ED5', '#DFB0E7'],
  },
}
