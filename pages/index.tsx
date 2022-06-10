import type { NextPage } from 'next'
import { PageWrapper } from 'components/PageWrapper'
import { HEADER_HEIGHT } from 'styles/style-constants'
import { Seo } from 'components/Seo'

/* FEED */
import { useFeedProvider, FeedColumn, FeedWrapper } from '@feed'

/* @ts-ignore */
const Home: NextPage = () => {
  const { sales, mints } = useFeedProvider()
  return (
    <PageWrapper direction="column" style={{height: `calc(100vh - ${HEADER_HEIGHT}px)`}}>
      <Seo />
      <FeedWrapper columns={3}>
        <FeedColumn nfts={mints} title="Mints" useBorder/>
        <FeedColumn nfts={sales} title="Listings" useBorder/>
        <FeedColumn nfts={sales} title="Sales" />
      </FeedWrapper>
    </PageWrapper>
  )
}

export default Home
