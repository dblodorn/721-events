import type { NextPage } from 'next'
import { PageWrapper } from 'components/PageWrapper'
import { useSalesTicker, useMintsTicker } from 'hooks'
import { Heading, Stack, Grid, Flex, Label } from '@zoralabs/zord'
import { useMemo } from 'react'
import { HEADER_HEIGHT } from 'styles/style-constants'
import { useNFT } from '@zoralabs/nft-hooks'
import { Seo } from 'components/Seo'
import { CollectionThumbnail } from '@media/CollectionThumbnail'
import { Link } from 'components/Link'

function NFTRow({
  tokenContract,
  tokenId
}: {
  tokenContract: string,
  tokenId: string
}) {
  const { data } = useNFT(tokenContract, tokenId)
  if (!data) {
    return <Heading size="xs">...</Heading>
  }
  return (
    <Link href={`/collections/${tokenContract}/${tokenId}`}>
      <Flex w="100%" style={{ overflowX: 'scroll' }} align="center" gap="x4">
        <CollectionThumbnail
          tokenId={tokenId}
          collectionAddress={tokenContract}
          size="xs"
          radius='round'
        />
        <Label size="xs">
          {data.metadata?.name} {data.nft?.contract.name} {data.nft?.tokenId}
        </Label>
      </Flex>
    </Link>
  )
}

/* @ts-ignore */
const Home: NextPage = () => {
  const { sales } = useSalesTicker()
  const { mints } = useMintsTicker()

  const renderSales = useMemo(() => {
    if (sales && sales.length) {
      return sales.map((nft: any) =>
        <NFTRow
          key={nft?.sale.transactionInfo.transactionHash}
          tokenContract={nft?.token?.collectionAddress}
          tokenId={nft?.token?.tokenId}
        />
      ) 
    } else {
      return null
    }
  }, [sales])

  const renderMints = useMemo(() => {
    if (mints && mints.length) {
      return mints.map((nft: any) =>
        <NFTRow
          key={nft?.mint?.transactionInfo.transactionHash}
          tokenContract={nft?.token?.collectionAddress}
          tokenId={nft?.token?.tokenId}
        />
      ) 
    } else {
      return null
    }
  }, [mints])

  return (
    <PageWrapper direction="column" style={{height: `calc(100vh - ${HEADER_HEIGHT}px)`}}>
      <Seo />
      <Grid style={{ gridTemplateColumns: 'repeat(2, 1fr)' }} h="100%" position="sticky" top="x0">
        
        <Stack style={{ borderRight: '1px solid white' }} py="x2">
          <Heading as="h1" px="x4" py="x4" style={{borderBottom: 'var(--border-a)'}}>Mints</Heading>
          <Stack px="x4" gap="x3" pt="x4" direction="column-reverse" w="100%">
            {renderMints}
          </Stack>
        </Stack>

        <Stack py="x2" >
          <Heading as="h1" px="x4" py="x4" style={{borderBottom: 'var(--border-a)'}}>Sales</Heading>
          <Stack px="x4" gap="x3" pt="x4" direction="column-reverse">
            {renderSales}
          </Stack>
        </Stack>
      
      </Grid>
    </PageWrapper>
  )
}

export default Home
