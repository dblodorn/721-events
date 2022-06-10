export function recentSales(count: number) {
  return `{
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
  }`
}
