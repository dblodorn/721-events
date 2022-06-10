import { Box, Stack } from '@zoralabs/zord'
import { NFTFeedRow } from './NFTFeedRow'
import { FeedHeader } from './FeedHeader'
import { feedItemsWrapper } from './FeedComponents.css'

export type FeedColumnProps = {
  nfts: any[],
  title?: string,
  useBorder?: boolean
}

export function FeedColumn({
  nfts = [],
  title,
  useBorder = false
}: FeedColumnProps) {
  return (
    <Stack style={{ borderRight: `${useBorder && '1px solid white'}` }} position="relative">
      {title &&
        <FeedHeader title={title} />
      }
      <Box
        position="absolute"
        left="x0"
        w="100%"
        className={feedItemsWrapper}
      >
        <Stack direction="column-reverse" w="100%">
          {nfts.length && nfts.map((nft: any) =>
            <NFTFeedRow
              key={`${nft?.token?.collectionAddress}${nft?.token?.tokenId}`}
              tokenContract={nft?.token?.collectionAddress}
              tokenId={nft?.token?.tokenId}
            />
          )}
        </Stack>
      </Box>
    </Stack>
  )
}