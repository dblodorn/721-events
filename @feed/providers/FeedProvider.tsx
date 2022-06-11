import { createContext, useContext, useState } from 'react'
import { useInterval } from '@market/hooks'
import { useMintsFeed, useSalesFeed, useListingsFeed } from '@feed/hooks'

const FeedContext = createContext<{
  sales: any[]
  mints: any[]
  v3asksListing: any[]
}>({
  sales: [],
  mints: [],
  v3asksListing: [],
})

export function useFeedProvider() {
  return useContext(FeedContext)
}

export function FeedProvider({ ...props }) {
  const [date, setDate] = useState<any>(undefined)

  const { sales } = useSalesFeed({ refreshInterval: date })
  const { mints } = useMintsFeed({ refreshInterval: date })
  const { v3asksListing } = useListingsFeed({ refreshInterval: date })

  useInterval(() => {
    const date = new Date()
    setDate(date)
  }, 3000)

  return (
    <FeedContext.Provider
      value={{
        sales: sales ? sales : [],
        mints: mints ? mints : [],
        v3asksListing: v3asksListing ? v3asksListing : [],
      }}
      {...props}
    />
  )
}
