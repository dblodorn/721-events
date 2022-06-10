import { style } from '@vanilla-extract/css'
import { atoms } from '@zoralabs/zord'
import { HEADER_HEIGHT } from 'styles/style-constants'

export const nftGridWrapper = style([
  {
    gridTemplateColumns: '1fr',
    paddingBottom: HEADER_HEIGHT * 2,
  },
  atoms({
    w: '100%',
    margin: 'auto',
  }),
])

/* Card */
export const cardWrapper = style([
  {
    backgroundColor: 'black',
    borderBottom: 'var(--border-a)',
  },
])

export const titleWrapper = style([
  {
    whiteSpace: 'nowrap',
  },
  atoms({
    w: '100%',
  }),
])

export const imageWrapper = style([
  {
    width: '50vmin',
    height: '50vmin',
  },
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

/* Thumbnail */
export const nftThumbnail = style([
  {
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.05)',
  },
])
