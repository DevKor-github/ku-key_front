import { ColorType } from '@/types/timetable'

export const COLOR_INFO: { [key in ColorType]: { symbol: string; rand: string[] } } = {
  Blue: {
    symbol: '#CDFDFC',
    rand: ['#B2C8C4CC', '#AEDCC8CC', '#84D7D4CC', '#64B6ACCC', '#5D737ECC'],
  },
  Purple: {
    symbol: '#F3B8D5',
    rand: ['#DFB5DBCC', '#F0A6CACC', '#B8BEDDCC', '#ECADDECC', '#9C89B8CC'],
  },
  Gray: {
    symbol: '#898989',
    rand: ['#C6C6C6CC', '#A9A9A9CC', '#787878CC', '#484848CC', '#262626CC'],
  },
  Green: {
    symbol: '#ADCEB4',
    rand: ['#C1C8B2CC', '#99C2A1CC', '#88B394CC', '#93B1A7CC', '#79918DCC'],
  },
  Red: {
    symbol: '#F17272',
    rand: ['#FF3535CC', '#F11E2DCC', '#C30010CC', '#F06B70CC', '#FFA4AECC'],
  },
}
