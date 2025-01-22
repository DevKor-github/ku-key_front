import { defineKeyframes } from '@pandacss/dev'

export const keyframes = defineKeyframes({
  animateIn: {
    from: { transform: 'scale(0.95)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1 },
  },
  animateOut: {
    from: { transform: 'scale(1)', opacity: 1 },
    to: { transform: 'scale(0.95)', opacity: 0 },
  },
  slideInFromTop: {
    from: { transform: 'translateY(-100%)' },
    to: { transform: 'translateY(0)' },
  },
  slideOutToTop: {
    from: { transform: 'translateY(0)' },
    to: { transform: 'translateY(-100%)' },
  },
  slideInFromBottom: {
    from: { transform: 'translateY(100%)' },
    to: { transform: 'translateY(0)' },
  },
  slideOutToBottom: {
    from: { transform: 'translateY(0)' },
    to: { transform: 'translateY(100%)' },
  },
  slideInFromLeft: {
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0)' },
  },
  slideOutToLeft: {
    from: { transform: 'translateX(0)' },
    to: { transform: 'translateX(-100%)' },
  },
  slideInFromRight: {
    from: { transform: 'translateX(100%)' },
    to: { transform: 'translateX(0)' },
  },
  slideOutToRight: {
    from: { transform: 'translateX(0)' },
    to: { transform: 'translateX(100%)' },
  },
  spin: {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
})
