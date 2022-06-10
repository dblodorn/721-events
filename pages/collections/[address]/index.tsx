import type { NextPage } from 'next'
import { PageWrapper } from 'components/PageWrapper'
import { collectionService, CollectionServiceProps } from 'services/collectionService'
import { useEffect } from 'react'
import { NFTGrid } from 'components/media/NFTGrid'
import { MarketStats } from '@market/components/MarketStats'
import { CollectionHeader } from 'components/CollectionHeader'
import { useCollectionsContext } from 'providers/CollectionsProvider'

/* @ts-ignore */
const Collection: NextPage = ({
  initialPage,
  contractAddress,
  seo,
  aggregateStats,
  collection,
}: CollectionServiceProps) => {
  return (
    <PageWrapper p="x4" direction="column" gap="x4">
      <CollectionHeader collection={collection} aggregateStats={aggregateStats} />
      <MarketStats aggregateStats={aggregateStats} />
      {contractAddress && (
        <NFTGrid
          contractAddress={[contractAddress]}
          initialPage={initialPage}
        />
      )}
    </PageWrapper>
  )
}

export const getServerSideProps = collectionService

export default Collection
