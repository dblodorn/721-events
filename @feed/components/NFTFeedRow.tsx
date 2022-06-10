import { Flex, Label, Icon } from '@zoralabs/zord'
import { useNFT } from '@zoralabs/nft-hooks'
import { CollectionThumbnail } from 'components/media/CollectionThumbnail'
import { Link } from 'components/Link'
import { feedRow } from './FeedComponents.css'
import { NFTOwner } from '@market/components/NFTOwner'
import { feedRowTitle, titleWrapper, titleScroll } from './FeedComponents.css'

export function NFTFeedRow({
  tokenContract,
  tokenId
}: {
  tokenContract: string,
  tokenId: string
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
    <Flex
      w="100%"
      style={{ overflowX: 'scroll' }}
      align="center"
      justify="space-between"
      gap="x4"
      className={[feedRow]}
    >
      <Link href={`/collections/${tokenContract}/${tokenId}`} passHref>
        <Flex as="a" align="center" gap="x4" w="100%">
          <CollectionThumbnail
            tokenId={tokenId}
            collectionAddress={tokenContract}
            size="xs"
            radius='round'
          />
          <Flex
            h="100%"
            w="100%"
            align="center"
            className={[feedRowTitle, titleWrapper, titleScroll]}
            style={{ '--titlePad': '40px' }}
          >
            <Label size="xs">
              {data.metadata?.name} | {data.nft?.contract.name} | {data.nft?.tokenId}
            </Label>
          </Flex>
        </Flex>
      </Link>
      <NFTOwner address={data.nft?.owner?.address} />
    </Flex>
  )
}
