import { createContext, useContext, useState } from 'react'
import { useInterval } from '@market/hooks'
import { useMintsFeed, useSalesFeed } from '@feed/hooks'

const FeedContext = createContext<{
  sales: any[],
  mints: any[]
}>({
  sales: [],
  mints: [],
})

export function useFeedProvider() {
  return useContext(FeedContext)
}

export function FeedProvider({...props}) {
  const [date, setDate] = useState<any>(undefined)

  const { sales } = useSalesFeed({refreshInterval: date})
  const { mints } = useMintsFeed({refreshInterval: date})

  useInterval(() => {
    const date = new Date
    setDate(date)
  }, 2000)

  return (
    <FeedContext.Provider
      value={{
        sales: sales ? sales : [],
        mints: mints ? mints : [],
      }}
      {...props}
    />
  )
}
