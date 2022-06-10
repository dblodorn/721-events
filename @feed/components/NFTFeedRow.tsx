import { Flex, Label, Icon, Grid, Box } from '@zoralabs/zord'
import { useNFT } from '@zoralabs/nft-hooks'
import { CollectionThumbnail } from 'components/media/CollectionThumbnail'
import { Link } from 'components/Link'
import { feedRow } from './FeedComponents.css'
import { NFTOwner } from '@market/components/NFTOwner'
import { feedRowTitle, titleWrapper, titleScroll } from './FeedComponents.css'
import { TokenInfoLinks } from 'components/media'
import { FeedTypes } from './FeedColumn'
import { V3Ask } from '@market'

export function NFTFeedRow({
  tokenContract,
  tokenId,
  feedType,
}: {
  tokenContract: string
  tokenId: string
  feedType?: FeedTypes
}) {
  const { data } = useNFT(tokenContract, tokenId)

  if (!data) {
    return (
      <Flex
        w="100%"
        style={{ overflowX: 'scroll' }}
        align="center"
        gap="x4"
        className={[feedRow]}
      >
        <Icon id="Spinner" size="lg" />
      </Flex>
    )
  }

  return (
    <Grid
      w="100%"
      gap="x4"
      className={[feedRow]}
      style={{
        gridTemplateColumns: `${
          feedType === FeedTypes.V3_LISTING ? '2.5fr 1.25fr 1.5fr' : '4fr 1.5fr'
        }`,
      }}
    >
      <Box>
        <Link href={`/collections/${tokenContract}/${tokenId}`} passHref>
          <Flex align="center" gap="x4" w="100%" h="100%">
            <Flex>
              <CollectionThumbnail
                tokenId={tokenId}
                collectionAddress={tokenContract}
                size="xs"
                radius="round"
              />
            </Flex>
            <Flex
              h="100%"
              w="100%"
              align="center"
              className={[feedRowTitle, titleWrapper, titleScroll]}
              style={{ '--titlePad': '40px' }}
            >
              <Label size="xs">
                {`${data.metadata?.name ? `${data.metadata?.name}' | '` : ''}`}
                {`${data.nft?.contract.name ? `${data.nft?.contract.name}' | '` : ''}`}
                {data.nft?.tokenId}
              </Label>
            </Flex>
          </Flex>
        </Link>
      </Box>
      {feedType === FeedTypes.V3_LISTING && <V3Ask nftData={data} useBorder />}
      <Flex gap="x4" justify="flex-end" style={{ borderLeft: 'var(--border-b)' }}>
        <NFTOwner address={data.nft?.owner?.address} />
        <TokenInfoLinks nftData={data} />
      </Flex>
    </Grid>
  )
}
