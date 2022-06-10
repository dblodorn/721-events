import { style } from '@vanilla-extract/css'
import { atoms } from '@zoralabs/zord'
import { HEADER_HEIGHT, HEADER_Z } from 'styles/style-constants'

export const footerWrapper = style([
  {
    height: HEADER_HEIGHT,
    zIndex: HEADER_Z,
    borderTop: 'var(--border-a)',
    overflowX: 'hidden',
    backgroundColor: 'black',
  },
  atoms({
    alignItems: 'center'
  })
])