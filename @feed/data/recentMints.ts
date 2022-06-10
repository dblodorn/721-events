export function recentMints(count: number) {
  return `{
    mints(
      networks: {chain: MAINNET},
      sort: {sortKey: TIME, sortDirection: DESC},
      pagination: {limit: ${count}}) {
      nodes {
        mint {
          collectionAddress
          originatorAddress
          transactionInfo {
            blockNumber
            blockTimestamp
            transactionHash
          }
          toAddress
        }
        token {
          tokenId
          collectionAddress
          name
          tokenUrl
          collectionName
        }
      }
    }
  }`
}
