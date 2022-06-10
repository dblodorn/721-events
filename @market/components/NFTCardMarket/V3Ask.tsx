import { Text, Box, Flex, Stack, Heading } from '@zoralabs/zord'
import { NFTObject } from '@zoralabs/nft-hooks/dist/types/NFTInterface'
import { useRelevantMarket } from '../../hooks/useRelevantMarket'
import { ModalComposition } from '@modal'
import { FillAsk } from '../../wizards/FillAsk'
import { lightFont } from '../MarketComponents.css'
import { MARKET_INFO_STATUSES } from '@zoralabs/nft-hooks/dist/types/NFTInterface'
import { NFTOwner } from '../NFTOwner'
import { CardMarketTrigger } from './CardMarketTrigger'
import { useIsOwner } from '@market/hooks/useIsOwner'
import { ManageOwnedToken } from './ManageOwnedToken'

export function V3Ask({ nftData }: { nftData: NFTObject }) {
  const { nft, metadata, markets } = nftData
  const { ask } = useRelevantMarket(markets)

  const { isOwner } = useIsOwner(nftData)

  if (!nft || !metadata || ask?.status === MARKET_INFO_STATUSES.INVALID) {
    return null
  }

  return (
    <>
      {ask && ask.status === MARKET_INFO_STATUSES.ACTIVE ? (
        <Flex w="100%" justify="space-between" align="flex-end">
          <Stack>
            <Text variant="heading-xs" className={lightFont} color="tertiary">
              Price
            </Text>
            <Text variant="heading-xs" className={lightFont}>
              {ask.amount?.amount.value} {ask.amount?.symbol}
            </Text>
          </Stack>
          {!isOwner ? (
            <ModalComposition
              modalName={`buy-${nft.contract.address}-${nft.tokenId}`}
              trigger={<CardMarketTrigger cta="Buy" />}
              content={
                <Box p="x8">
                  {ask.amount && (
                    <FillAsk
                      marketSummary={markets}
                      tokenAddress={nft.contract.address}
                      tokenId={nft.tokenId}
                      tokenName={metadata.name}
                      askCurrency={ask.amount.address}
                      askPrice={ask.amount.amount.raw}
                      nftData={nftData}
                    />
                  )}
                </Box>
              }
            />
          ) : (
            <ManageOwnedToken />
          )}
        </Flex>
      ) : (
        <>
          {ask && (
            <>
              {ask?.status === MARKET_INFO_STATUSES.COMPLETE ? (
                <Flex justify="space-between" w="100%">
                  <Stack>
                    <Text variant="label-lg" className={lightFont} color="tertiary">
                      Sold on Chain for
                    </Text>
                    <Text variant="heading-xs" className={lightFont}>
                      {ask.amount?.amount.value} {ask.amount?.symbol}
                    </Text>
                  </Stack>
                  <NFTOwner address={ask.raw.properties.buyer} />
                </Flex>
              ) : (
                <NFTOwner address={nft?.owner?.address} align="left" />
              )}
            </>
          )}
        </>
      )}
    </>
  )
}
