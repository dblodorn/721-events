import { useMemo, useEffect } from 'react'
import { Stack, Box, Flex, Heading, Display, Separator } from '@zoralabs/zord'
import { Link } from 'components/Link'
import { NFTObject } from '@zoralabs/nft-hooks/dist/types/NFTInterface'
import { NFTCardMarket } from '@market'
import { useRawImageTransform } from '@feed/hooks'
import {
  cardWrapper,
  titleWrapper,
  titleScroll,
  titleHeading,
  imageWrapper,
} from 'components/media/NftMedia.css'
import { CollectionThumbnail } from 'components/media/CollectionThumbnail'

export function NFTCard({ nftData }: { nftData: NFTObject }) {
  const { metadata, media, nft } = nftData
  const { image } = useRawImageTransform(media?.image?.uri)
  const { image: animationUrl } = useRawImageTransform(metadata?.raw?.animation_url)

  const useTitleScroll = useMemo(() => {
    if (metadata && metadata?.name) {
      return metadata?.name.split('').length > 25
    }
  }, [metadata])

  const isAudio = useMemo(() => {
    try {
      return metadata?.raw?.mimeType?.startsWith('audio')
    } catch (err) {
      console.error(err)
      return false
    }
  }, [metadata])

  useEffect(() => {
    console.log(isAudio, animationUrl)
  }, [isAudio, animationUrl])

  if (!nft) {
    return null
  }

  return (
    <Flex w="100%" position="relative" overflow="hidden" className={cardWrapper}>
      <Link href={`/collections/${nft?.contract.address}/${nft?.tokenId}`}>
        <Box className={imageWrapper} style={{ aspectRatio: '1/1' }} position="relative">
          <Box as="img" src={image} w="100%" h="100%" position="absolute" inset="x0" />
        </Box>
      </Link>
      <Stack gap="x2" mt="x2" px="x4" pb="x4" w="100%">
        <Flex
          className={[titleWrapper, useTitleScroll && titleScroll]}
          style={{ '--titlePad': titleScroll ? '40px' : '0px' }}
        >
          <Display
            as="h4"
            size="lg"
            className={[titleHeading, 'bd-console-italic outline-font']}
          >
            {metadata?.name}
          </Display>
        </Flex>
        <Flex align="center" gap="x2" justify="space-between">
          <Link href={`/collections/${nft?.contract.address}`} passHref>
            <Flex as="a" align="center" gap="x2">
              <CollectionThumbnail
                collectionAddress={nft?.contract.address}
                radius="round"
                size="xs"
              />
              <Heading size="xs">{nft?.contract.name}</Heading>
            </Flex>
          </Link>
        </Flex>
        <Separator mt="x1" />
        {isAudio && <audio src={animationUrl} controls />}
        <NFTCardMarket nftData={nftData} />
      </Stack>
    </Flex>
  )
}
