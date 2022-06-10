import { vars, atoms } from '@zoralabs/zord'
import { style, globalStyle } from '@vanilla-extract/css'

export const errorBox = style([
  {
    textAlign: 'start',
    overflowX: 'scroll',
  },
  atoms({
    w: '100%',
    backgroundColor: 'tertiary',
    px: 'x4',
    py: 'x2',
    borderRadius: 'curved',
    mt: 'x2',
  }),
])

globalStyle(`${errorBox} pre`, {
  fontSize: '12px',
  fontFamily: 'SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace!important',
  lineHeight: '1!important',
})

export const buttonStyle = style({
  borderRadius: vars.radii.round,
  backgroundColor: vars.color.foreground.primary,
})

export const lightFont = style({
  fontWeight: 300,
})
