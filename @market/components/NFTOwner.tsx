import { Text, Stack } from '@zoralabs/zord'
import { lightFont } from './MarketComponents.css'
import { AddressWithLink } from './AddressWithLink'

export function NFTOwner({
  address,
  align = 'right',
  useEtherscan = true,
}: {
  /** Must be a valid ETH address */
  address: string | undefined
  align?: 'right' | 'left'
  useEtherscan?: boolean
}) {
  if (!address) {
    return null
  }

  return (
    <Stack align={align === 'left' ? 'flex-start' : 'flex-end'} justify="space-between">
      <Text variant="label-xs" align={align} className={lightFont} color="tertiary">
        Owned by
      </Text>
      <AddressWithLink address={address} useEtherscan={useEtherscan} />
    </Stack>
  )
}
