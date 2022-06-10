import type { NextPage } from 'next'
import { PageWrapper } from 'components/PageWrapper'
import { collectionService, CollectionServiceProps } from 'services/collectionService'
import { NFTGrid } from 'components/media/NFTGrid'
import { MarketStats } from '@market/components/MarketStats'
import { CollectionHeader } from 'components/CollectionHeader'
import { Flex } from '@zoralabs/zord'

/* @ts-ignore */
const Collection: NextPage = ({
  initialPage,
  contractAddress,
  seo,
  aggregateStats,
  collection,
}: CollectionServiceProps) => {
  return (
    <PageWrapper direction="column">
      <Flex
        direction="column"
        w="100%"
        style={{ borderBottom: 'var(--border-a)' }}
        px="x4"
        pt="x2"
      >
        <CollectionHeader collection={collection} aggregateStats={aggregateStats} />
        <MarketStats aggregateStats={aggregateStats} />
      </Flex>
      {contractAddress && (
        <NFTGrid contractAddress={[contractAddress]} initialPage={initialPage} />
      )}
    </PageWrapper>
  )
}

export const getServerSideProps = collectionService

export default Collection
