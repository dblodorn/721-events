import { useEffect, useState } from 'react'
import { useInterval } from '@market/hooks'
import { uniqBy } from 'lodash'

async function fetchGraphQL(count: number) {
  try {
    const result = await fetch(process.env.NEXT_PUBLIC_GALACTUS_BASE_URL as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
      body: JSON.stringify({
        query: `{
          sales(
            networks: {chain: MAINNET},
            sort: {sortKey: TIME, sortDirection: DESC},
            pagination: {limit: ${count}}) {
            nodes {
              sale {
                buyerAddress
                saleType
                transactionInfo {
                  blockNumber
                  blockTimestamp
                  transactionHash
                }
              }
              token {
                collectionAddress
                tokenUrl
                tokenId
                name
                collectionName
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

export function useSalesTicker() {
  const [date, setDate] = useState<any>(undefined)
  const [sales, setSales] = useState<any>([])
  const [initialize, setInitialize] = useState(true)

  useInterval(() => {
    const date = new Date
    setDate(date)
  }, 2000)

  useEffect(() => {
    if (!initialize) {
      try {
        fetchGraphQL(15)
          /* @ts-ignore */
          .then((response) => response.json())
          .then((data) => {
            setSales(data.data.sales.nodes)
            setInitialize(true)
          })
      } catch (err) {
        console.error(err)
      }
    } else {
      try {
        fetchGraphQL(1)
          /* @ts-ignore */
          .then((response) => response.json())
          .then((data) => {
            const salesUpdate = data.data.sales.nodes[0]
            let newSale = [...sales, salesUpdate]
            newSale = uniqBy(newSale, obj => obj.sale.transactionInfo.transactionHash)
            setSales(newSale)
          })
      } catch (err) {
        console.error(err)
      }
    }
  }, [date])

  return {
    sales,
  }
}
