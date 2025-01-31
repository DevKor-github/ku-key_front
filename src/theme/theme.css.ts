import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  color: {
    black: '#212124',
    darkGray1: '#848B96',
    darkGray2: '#AEB3BC',
    lightGray1: '#D1D3DA',
    lightGray2: '#F2F3F6',
    lightGray3: '#F7F8FA',
    white: '#FFFFFF',
    red1: '#A00C0C',
    red2: '#FF3535',
    red3: '#FF5858',
    red4: '#FFCDCD',
    red5: '#FFF4F4',
    bgGray: '#F9F9F9',
    bgRed1: '#FFFDFD',
    green: '#0BDB45',
  },
  gradient: {
    red1: 'linear-gradient(90deg, #810000 0%, #E70000 100%)',
    red2: 'linear-gradient(96deg, #FF5A5A 3.8%, #FF3939 94.63%)',
    red3: 'linear-gradient(105deg, #FF3A3A 7.08%, #FF6D6D 100%)',
    line: 'linear-gradient(180deg, #979797 0%, #C9C9C9 100%)',
  },
  shadow: {
    p3: '0px 2px 4px 2px rgba(0, 0, 0, 0.03)',
    p25: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
    p25White: '0px 0px 4px 0px rgba(255, 255, 255, 0.25)',
    p50: '0px 0px 6px 0px rgba(0, 0, 0, 0.50)',
    p50Red: '0px 0px 10px 0px rgba(255, 0, 0, 0.50)',
  },
  typography: {
    desktop: {
      display1B: {
        fontSize: '4rem',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
      },
      display2SB: {
        fontSize: '2rem',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 'normal',
      },
      titleSB: {
        fontSize: '1.875rem',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 'normal',
      },
      heading1SB: {
        fontSize: '1.5rem',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 'normal',
      },
      heading1M: {
        fontSize: '1.5rem',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '140%',
      },
      heading2SB: {
        fontSize: '1.25rem',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 'normal',
      },
      heading2M: {
        fontSize: '1.25rem',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 'normal',
      },
      heading2R: {
        fontSize: '1.25rem',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal',
      },
      body1M: {
        fontSize: '1.125rem',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '140%',
      },
      body1R: {
        fontSize: '1.125rem',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '140%',
      },
      body2M: {
        fontSize: '1rem',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '140%',
      },
      body2R: {
        fontSize: '1rem',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '140%',
      },
    },
    mobile: {
      display1B: {
        fontSize: '1.5rem',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
      },
      display2SB: {
        fontSize: '1.25rem',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 'normal',
      },
      titleSB: {
        fontSize: '1.125rem',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 'normal',
      },
      headingSB: {
        fontSize: '1rem',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 'normal',
      },
      headingM: {
        fontSize: '1rem',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 'normal',
      },
      headingR: {
        fontSize: '1rem',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal',
      },
      bodySB: {
        fontSize: '0.875rem',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '140%',
      },
      bodyM: {
        fontSize: '0.875rem',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '140%',
      },
      bodyR: {
        fontSize: '0.875rem',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '140%',
      },
      miniTag1M: {
        fontSize: '0.75rem',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 'normal',
      },
      miniTag1R: {
        fontSize: '0.75rem',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal',
      },
      miniTag2: {
        fontSize: '0.625rem',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '130%',
      },
    },
  },
})
