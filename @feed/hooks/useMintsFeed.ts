import { useEffect, useState } from 'react'
import { useInterval } from '@market/hooks'
import { uniqBy } from 'lodash'
import { recentMints } from '@feed/data/recentMints'

async function fetchMints(count: number) {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_GALACTUS_BASE_URL as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
      body: JSON.stringify({
        query: recentMints(count),
      }),
    })
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    return response
  } catch(err) {
    console.error(err)
  }
}

export function useMintsFeed({refreshInterval}: {refreshInterval: any}) {
  const [date, setDate] = useState<any>(undefined)
  const [mints, setMints] = useState<any>([])
  const [initialize, setInitialize] = useState(true)

  useInterval(() => {
    const date = new Date
    setDate(date)
  }, 2000)

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
            newMint = uniqBy(newMint, obj => obj.mint.transactionInfo.transactionHash)
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
