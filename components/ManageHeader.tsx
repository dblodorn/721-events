import { Stack, Display, Paragraph } from '@zoralabs/zord'
import { useEnsName } from 'wagmi'
import { useShortAddress } from 'hooks/useShortAddress'
import { AddressWithLink } from '@market'

export function ManageHeader({ ownerAddress }: { ownerAddress: string }) {
  const { data: ensName } = useEnsName({
    address: ownerAddress,
  })

  const shortAddress = useShortAddress(ownerAddress)

  return (
    <Stack
      align="flex-start"
      pt="x6"
      pb="x10"
      px="x4"
      gap="x4"
      style={{ borderBottom: 'var(--border-a)' }}
    >
      <Display as="h1">{ensName ? ensName : shortAddress}</Display>
      <AddressWithLink
        address={ownerAddress}
        useEns={false}
        backgroundColor="secondary"
        px="x4"
        py="x2"
        borderRadius="curved"
      />
    </Stack>
  )
}
