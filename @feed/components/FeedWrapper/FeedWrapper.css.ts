import { style } from '@vanilla-extract/css'
import { atoms } from '@zoralabs/zord'
import { HEADER_HEIGHT } from 'styles/style-constants'

export const feedWrapper = style([
  {
    height: `calc(100vh - ${HEADER_HEIGHT * 2}px)`,
    overflowX: 'hidden',
  },
  atoms({
    w: '100%',
    position: 'sticky',
    top: 'x0',
  })
])
