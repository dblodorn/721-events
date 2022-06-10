import { style } from '@vanilla-extract/css'
import { atoms } from '@zoralabs/zord'
import { HEADER_HEIGHT, HEADER_Z } from 'styles/style-constants'

export const TIMER_WIDTH = 300

export const footerWrapper = style([
  {
    height: HEADER_HEIGHT,
    zIndex: HEADER_Z,
    borderTop: 'var(--border-a)',
    overflowX: 'hidden',
    backgroundColor: 'black',
  },
  atoms({
    alignItems: 'center',
    w: '100%',
  }),
])

export const marqueeWrapper = style([
  {
    width: `calc(100% - ${TIMER_WIDTH}px)`,
    overflowX: 'hidden',
  },
  atoms({
    h: '100%',
    alignItems: 'center',
    position: 'absolute',
    l: 'x0',
    bottom: 'x0',
  }),
])

export const timerWrapper = style([
  {
    width: TIMER_WIDTH,
    borderLeft: 'var(--border-a)',
    zIndex: 100,
  },
  atoms({
    h: '100%',
    alignItems: 'center',
    position: 'absolute',
    right: 'x0',
    bottom: 'x0',
    justifyContent: 'center',
  }),
])
