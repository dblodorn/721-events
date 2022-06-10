import { Flex, Heading, Box } from '@zoralabs/zord'
import Marquee from "react-fast-marquee"
import { Link } from 'components/Link'

export function HeaderNav() {
  return (
    <Flex align="center" justify="space-between" w="100%">
      <Link href={`/`} passHref>
        <Box as="a">
          <Marquee speed={50} gradient={false} direction='left'>
            <Flex h="100%">
              <Heading as="h1">Erc {process.env.NEXT_PUBLIC_SITE_TITLE} Vision</Heading>
              <Heading as="h1">Erc {process.env.NEXT_PUBLIC_SITE_TITLE} Vision</Heading>
              <Heading as="h1">Erc {process.env.NEXT_PUBLIC_SITE_TITLE} Vision</Heading>
              <Heading as="h1">Erc {process.env.NEXT_PUBLIC_SITE_TITLE} Vision</Heading>
              <Heading as="h1">Erc {process.env.NEXT_PUBLIC_SITE_TITLE} Vision</Heading>
              <Heading as="h1">Erc {process.env.NEXT_PUBLIC_SITE_TITLE} Vision</Heading>
              <Heading as="h1">Erc {process.env.NEXT_PUBLIC_SITE_TITLE} Vision</Heading>
              <Heading as="h1">Erc {process.env.NEXT_PUBLIC_SITE_TITLE} Vision</Heading>
              <Heading as="h1">Erc {process.env.NEXT_PUBLIC_SITE_TITLE} Vision</Heading>
              <Heading as="h1">Erc {process.env.NEXT_PUBLIC_SITE_TITLE} Vision</Heading>
              <Heading as="h1">Erc {process.env.NEXT_PUBLIC_SITE_TITLE} Vision</Heading>
              <Heading as="h1">Erc {process.env.NEXT_PUBLIC_SITE_TITLE} Vision</Heading>
              <Heading as="h1">Erc {process.env.NEXT_PUBLIC_SITE_TITLE} Vision</Heading>
              <Heading as="h1">Erc {process.env.NEXT_PUBLIC_SITE_TITLE} Vision</Heading>
              <Heading as="h1">Erc {process.env.NEXT_PUBLIC_SITE_TITLE} Vision</Heading>
              <Heading as="h1">Erc {process.env.NEXT_PUBLIC_SITE_TITLE} Vision</Heading>
            </Flex>
          </Marquee>
        </Box>
      </Link>
    </Flex>
  )
}
