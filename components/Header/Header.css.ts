import { style } from '@vanilla-extract/css'
import { atoms } from '@zoralabs/zord'
import { HEADER_HEIGHT, HEADER_Z } from 'styles/style-constants'

export const headerWrapper = style({
  height: HEADER_HEIGHT,
  zIndex: HEADER_Z,
  borderBottom: 'var(--border-a)',
  overflowX: 'hidden',
  backgroundColor: 'black',
})

export const collectionTrigger = style([
  {
    backgroundColor: 'white',
    color: 'black',
  },
  atoms({
    borderRadius: 'round',
    gap: 'x2',
    px: 'x6',
  }),
])

export const modalWrapper = style({
  overflowY: 'scroll',
  height: 300,
})
