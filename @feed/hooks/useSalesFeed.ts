import { useEffect, useState } from 'react'
import { useInterval } from '@market/hooks'
import { uniqBy } from 'lodash'

async function fetchGraphQL(count: number) {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_GALACTUS_BASE_URL as string, {
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
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    return response
  } catch (err) {
    console.error(err)
  }
}

export function useSalesFeed({refreshInterval}: {refreshInterval: any}) {
  const [sales, setSales] = useState<any>([])
  const [initialize, setInitialize] = useState(true)

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
  }, [refreshInterval])

  return {
    sales,
  }
}
