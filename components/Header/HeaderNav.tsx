import { Flex, Heading, Box } from '@zoralabs/zord'
import Marquee from 'react-fast-marquee'
import { Link } from 'components/Link'
import { Title } from 'components/Title'

export function HeaderNav() {
  return (
    <Flex align="center" justify="space-between" w="100%">
      <Link href={`/`} passHref>
        <Box as="a">
          <Marquee speed={50} gradient={false} direction="left">
            <Title />
          </Marquee>
        </Box>
      </Link>
    </Flex>
  )
}
