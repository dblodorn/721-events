import { Box, Stack } from '@zoralabs/zord'
import { NFTFeedRow } from './NFTFeedRow'
import { FeedHeader } from './FeedHeader'
import { feedItemsWrapper } from './FeedComponents.css'

export enum FeedTypes {
  V3_LISTING = 'v3listing',
  MINT = 'mint',
  SALE = 'sale',
}

export type FeedColumnProps = {
  nfts: any[]
  title?: string
  useBorder?: boolean
  feedType?: FeedTypes
}

export function FeedColumn({
  nfts = [],
  title,
  useBorder = false,
  feedType = FeedTypes.MINT,
}: FeedColumnProps) {
  return (
    <Stack
      style={{ borderRight: `${useBorder && '1px solid white'}` }}
      position="relative"
    >
      {title && <FeedHeader title={title} />}
      <Box position="absolute" left="x0" w="100%" className={feedItemsWrapper}>
        {(feedType === FeedTypes.MINT || feedType === FeedTypes.SALE) && (
          <Stack direction="column-reverse" w="100%">
            {nfts.length
              ? nfts.map((nft: any) => (
                  <NFTFeedRow
                    key={`${nft?.token?.collectionAddress}${nft?.token?.tokenId}`}
                    tokenContract={nft?.token?.collectionAddress}
                    tokenId={nft?.token?.tokenId}
                  />
                ))
              : null}
          </Stack>
        )}
        {feedType === FeedTypes.V3_LISTING && (
          <Stack direction="column-reverse" w="100%">
            {nfts.length
              ? nfts.map((nft: any, index: any) => (
                  <NFTFeedRow
                    feedType={FeedTypes.V3_LISTING}
                    key={`${nft?.collectionAddress}${nft?.tokenId}-${index}`}
                    tokenContract={nft?.collectionAddress}
                    tokenId={nft?.tokenId}
                  />
                ))
              : null}
          </Stack>
        )}
      </Box>
    </Stack>
  )
}
