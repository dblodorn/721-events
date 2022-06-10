import { Box, Heading } from '@zoralabs/zord'
import { Link } from 'components/Link'
import { useAccount } from 'wagmi'
import { collectionTrigger } from './Header/Header.css'
import { manageLinkWrapper } from './Footer/Footer.css'

export function ManageLink() {
  const { data: account } = useAccount()

  if (account === null) {
    return null
  }

  return (
    <Box position="fixed" className={manageLinkWrapper}>
      <Link href={`/manage/${account?.address}`}>
        <Heading
          className={[collectionTrigger]}
          py="x2"
          display="flex"
          align="center"
          h="100%"
          size="sm"
          as="h1"
        >
          Manage
        </Heading>
      </Link>
    </Box>
  )
}
