import { ColorType } from '@/types/timetable'

export const COLOR_INFO: { [key in ColorType]: { symbol: string; rand: string[] } } = {
  Red: {
    symbol: '#F17272',
    rand: ['#EFBFC1CC', '#EE9D9DCC', '#F15151CC', '#C91717CC', '#711517CC'],
  },
  Blue: {
    symbol: '#CDFDFC',
    rand: ['#C2C2C2CC', '#AEDCC8CC', '#84D7D4CC', '#64B6ACCC', '#5D737ECC'],
  },
  Green: {
    symbol: '#ADCEB4',
    rand: ['#CEEB91CC', '#C5EDACCC', '#99C2A1CC', '#93B1A7CC', '#79918DCC'],
  },
  Gray: {
    symbol: '#898989',
    rand: ['#DCDCDCCC', '#C6C6C6CC', '#8D8D8DCC', '#6B6B6BCC', '#494949CC'],
  },
  Purple: {
    symbol: '#F3B8D5',
    rand: ['#DFB5DBCC', '#F0A6CACC', '#B8BEDDCC', '#9C89B8CC', '#ECADDECC'],
  },
}
