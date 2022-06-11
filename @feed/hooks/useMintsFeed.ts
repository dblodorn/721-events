import { useEffect, useState } from 'react'
import { uniqBy } from 'lodash'
import { recentMints } from '@feed/data/recentMints'

async function fetchMints(count: number) {
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
        query: recentMints(count),
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

export function useMintsFeed({ refreshInterval }: { refreshInterval: any }) {
  const [mints, setMints] = useState<any>([])
  const [initialize, setInitialize] = useState(true)

  useEffect(() => {
    if (!initialize) {
      try {
        fetchMints(15)
          /* @ts-ignore */
          .then((response) => response.json())
          .then((data) => {
            setMints(data.data.mints.nodes)
            setInitialize(true)
          })
      } catch (err) {
        console.error(err)
      }
    } else {
      try {
        fetchMints(1)
          /* @ts-ignore */
          .then((response) => response.json())
          .then((data) => {
            const mintUpdate = data.data.mints.nodes[0]
            let newMint = [...mints, mintUpdate]
            console.log(mintUpdate)
            newMint = uniqBy(newMint, (obj) => obj.mint.transactionInfo.transactionHash)
            setMints(newMint)
          })
      } catch (err) {
        console.error(err)
      }
    }
  }, [refreshInterval])

  return {
    mints,
  }
}
