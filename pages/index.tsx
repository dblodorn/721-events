import { useEffect } from 'react'
import type { NextPage } from 'next'
import { PageWrapper } from 'components/PageWrapper'
import { HEADER_HEIGHT } from 'styles/style-constants'
import { Seo } from 'components/Seo'
import { ManageLink } from 'components/ManageLink'

/* FEED */
import { useFeedProvider, FeedColumn, FeedWrapper, FeedTypes } from '@feed'

/* @ts-ignore */
const Home: NextPage = () => {
  const { sales, mints, v3asksListing } = useFeedProvider()

  return (
    <PageWrapper
      direction="column"
      style={{ height: `calc(100vh - ${HEADER_HEIGHT}px)` }}
    >
      <Seo />
      <ManageLink />
      <FeedWrapper columns={3}>
        <FeedColumn
          nfts={v3asksListing}
          title="On Chain Listings"
          useBorder
          feedType={FeedTypes.V3_LISTING}
        />
        <FeedColumn nfts={mints} title="Mints" useBorder />
        <FeedColumn nfts={sales} title="Sales" />
      </FeedWrapper>
    </PageWrapper>
  )
}

export default Home
