import { useEffect, useState } from 'react'
import { useInterval } from '@market/hooks'
import { uniqBy } from 'lodash'

async function fetchCreatedAsks(count: number) {
  try {
    const result = await fetch(process.env.NEXT_PUBLIC_GALACTUS_BASE_URL as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
      body: JSON.stringify({
        query: `{
          events(
            filter: { eventTypes: V3_ASK_EVENT}, 
            sort: {
              sortKey: CREATED,
              sortDirection: DESC
            }, pagination: {
              limit: ${count}
            }) {
            nodes {
              eventType
              tokenId
              collectionAddress
              transactionInfo {
                blockNumber
                blockTimestamp
                transactionHash
              }
            }
          }
        }`,
      }),
    })
    return result
  } catch(err) {
    return err
  }
}

export function useCreatedAsksFeed() {
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
        fetchCreatedAsks(15)
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
        fetchCreatedAsks(1)
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
  }, [date])

  return {
    mints,
  }
}
