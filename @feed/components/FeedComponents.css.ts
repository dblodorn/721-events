import { style } from '@vanilla-extract/css'
import { atoms } from '@zoralabs/zord'
import { HEADER_HEIGHT } from 'styles/style-constants'

export const FEED_ROW_HEIGHT = 60

/* Thumbnail */
export const nftThumbnail = style([
  {
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.05)',
  },
])

export const feedRow = style([
  {
    height: FEED_ROW_HEIGHT,
    borderBottom: '1px solid rgba(255,255,255,0.25)',
  },
  atoms({
    alignItems: 'center',
    px: 'x3'
  })
])

export const feedHeader = style([
  {
    height: HEADER_HEIGHT,
    borderBottom: '1px solid white',
  },
  atoms({
    alignItems: 'center',
    px: 'x3'
  })
])

export const feedItemsWrapper = style({
  overflowY: 'scroll',
  height: `calc(100% - ${HEADER_HEIGHT}px)`,
  top: HEADER_HEIGHT,
})

export const feedRowTitle = style({
  maxWidth: 500,
  overflowX: 'scroll',
})

export const titleWrapper = style([
  {
    whiteSpace: 'nowrap',
  },
  atoms({
    w: '100%',
  }),
])

export const titleScroll = style([
  {
    overflowX: 'scroll',
    maskImage:
      'linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))',
  },
])

export const titleHeading = style([
  {
    paddingRight: 'var(--titlePad)',
  },
])