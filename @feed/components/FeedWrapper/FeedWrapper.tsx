import React from 'react'
import { Grid } from '@zoralabs/zord'
import { feedWrapper } from './FeedWrapper.css'

export function FeedWrapper({
  children,
  columns,
}: {
  children: React.ReactNode,
  columns: number
}) {
  return (
    <Grid
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      className={feedWrapper}
    >
      {children}
    </Grid>
  )
}