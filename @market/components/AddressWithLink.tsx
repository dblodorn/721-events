import { useMemo } from 'react'
import { Label, Icon, Flex, FlexProps } from '@zoralabs/zord'
import { useEnsName } from 'wagmi'
import { useShortAddress } from 'hooks/useShortAddress'
import { Link } from 'components/Link'

interface AddressWithLinkProps extends FlexProps {
  address: string
  useEns?: boolean
  useEtherscan?: boolean
}

export function AddressWithLink({
  address,
  useEns = true,
  useEtherscan = true,
  ...props
}: AddressWithLinkProps) {
  const { data: ensName } = useEnsName({
    address: address,
  })

  const shortAddress = useShortAddress(address)

  const buildTokenInfoLink = useMemo(
    () => `https://etherscan.io/address/${address}`,
    [address]
  )

  return (
    <>
      {useEtherscan ? (
        <Flex
          align="center"
          gap="x2"
          as="a"
          href={buildTokenInfoLink}
          target="_blank"
          rel="noreferrer"
          {...props}
        >
          <Label size="xs">{ensName && useEns ? ensName : shortAddress}</Label>
          <Icon id="ArrowRightAngle" size="sm" />
        </Flex>
      ) : (
        <Link href={`/manage/${address}`}>
          <Flex align="center" gap="x2" target="_blank" rel="noreferrer" {...props}>
            <Label size="xs">{ensName && useEns ? ensName : shortAddress}</Label>
            <Icon id="ArrowRightAngle" size="sm" />
          </Flex>
        </Link>
      )}
    </>
  )
}
