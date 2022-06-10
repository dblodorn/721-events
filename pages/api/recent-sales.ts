import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'cross-fetch'

async function fetchGraphQL() {
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
          pagination: {limit: 8}) {
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
            }
          }
        }
      }`,
    }),
  })
  return result
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const serverResponse = await fetchGraphQL()
    const json = await serverResponse.json()
    const response = json?.data.sales.nodes
    res.setHeader('Cache-Control', `public, max-age=5000`)
    res.setHeader('Content-type', 'application/json')
    res.status(200).json(response)
  } catch (err) {
    res.status(200).json(err)
  }
}
