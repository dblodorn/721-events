import { useEffect, useState } from 'react'
import { uniqBy } from 'lodash'
import { recentAskListings } from '@feed/data'

async function fetchRecentAsksListings(count: number) {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_GALACTUS_BASE_URL as string, {
      method: 'POST',
      /* @ts-ignore */
      headers: {
        'Content-Type': 'application/json',
        // 'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY
      },
      cache: 'no-store',
      body: JSON.stringify({
        query: recentAskListings(count),
      }),
    })
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`)
    }
    return response
  } catch (err) {
    console.error(err)
  }
}

export function useListingsFeed({ refreshInterval }: { refreshInterval: any }) {
  const [events, setEvents] = useState<any>([])
  const [initialize, setInitialize] = useState(false)

  useEffect(() => {
    if (!initialize) {
      try {
        fetchRecentAsksListings(20)
          /* @ts-ignore */
          .then((response) => response.json())
          .then((data) => {
            setEvents(data.data.events.nodes)
            setInitialize(true)
          })
      } catch (err) {
        console.error(err)
      }
    } else {
      try {
        fetchRecentAsksListings(1)
          /* @ts-ignore */
          .then((response) => response.json())
          .then((data) => {
            const eventsUpdate = data.data.events.nodes[0]
            let newEvent = [...events, eventsUpdate]
            newEvent = uniqBy(newEvent, (obj) => obj.transactionInfo.transactionHash)
            setEvents(newEvent)
          })
      } catch (err) {
        console.error(err)
      }
    }
  }, [refreshInterval])

  return {
    v3asksListing: events,
  }
}
