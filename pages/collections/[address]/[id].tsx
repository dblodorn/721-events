import type { NextPage } from 'next'
import { PageWrapper } from 'components/PageWrapper'
import { Heading, Box } from '@zoralabs/zord'
import { useRouter } from 'next/router'
import { useNFT } from '@zoralabs/nft-hooks'
import { RawDisplayer } from 'components/utils'
import { NFTCard } from '@media/NFTCard'

const NFT: NextPage = () => {
  const { query } = useRouter()

  const { data } = useNFT(
    /* @ts-ignore */
    query.address,
    query.id
  )

  return (
    <PageWrapper p="x4" direction="column" gap="x4">
      <Box style={{ width: '400px' }}>{data && <NFTCard nftData={data} />}</Box>
    </PageWrapper>
  )
}

export default NFT
