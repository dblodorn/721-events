export function recentAskListings(count: number) {
  return `{
    events(
      filter: {
        eventTypes: V3_ASK_EVENT
      }, 
      sort: {
        sortKey: CREATED, sortDirection: DESC
      },
      pagination: {
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
  }`
}
