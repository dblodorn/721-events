import { Flex, Box } from '@zoralabs/zord'
import Marquee from 'react-fast-marquee'
import { Link } from 'components/Link'
import { Title } from 'components/Title'
import { marqueeWrapper, timerWrapper } from 'components/Footer/Footer.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export function HeaderNav() {
  return (
    <Flex align="center" justify="space-between" w="100%">
      <Link href={`/`} passHref>
        <Flex height="100%" as="a" className={marqueeWrapper}>
          <Marquee speed={50} gradient={false} direction="left">
            <Title />
          </Marquee>
        </Flex>
      </Link>
      <Flex className={timerWrapper}>
        <ConnectButton />
      </Flex>
    </Flex>
  )
}
