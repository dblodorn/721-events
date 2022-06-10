import { Stack, Display, Paragraph } from '@zoralabs/zord'
import {
  Collection,
  CollectionStatsAggregateQuery,
} from '@zoralabs/zdk/dist/queries/queries-sdk'

export function CollectionHeader({
  collection,
  aggregateStats,
}: {
  collection: Collection
  aggregateStats: CollectionStatsAggregateQuery
}) {
  return (
    <Stack align="flex-start">
      <Display as="h1">{collection.name}</Display>
      <Paragraph size="lg" color="tertiary">
        {aggregateStats.aggregateStat.nftCount} NFTs
      </Paragraph>
      {collection.description !== "''" && collection.description && (
        <Paragraph>{collection.description}</Paragraph>
      )}
    </Stack>
  )
}
