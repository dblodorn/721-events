import { Flex, Heading } from '@zoralabs/zord'
import Marquee from 'react-fast-marquee'
import {
  footerWrapper,
  timerWrapper,
  marqueeWrapper,
  manageLinkWrapper,
} from './Footer.css'
import { useStopwatch } from 'react-timer-hook'
import { Title } from 'components/Title'

export function FooterComposition() {
  const { seconds, minutes, hours, days } = useStopwatch({ autoStart: true })

  return (
    <Flex as="footer" position="fixed" bottom="x0" left="x0" className={footerWrapper}>
      <Flex className={marqueeWrapper}>
        <Marquee speed={50} gradient={false} direction="right">
          <Title />
        </Marquee>
      </Flex>
      <Flex className={timerWrapper}>
        <Heading size="xl" className={['bd-console-italic outline-font']}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
          <span>{seconds}</span>
        </Heading>
      </Flex>
    </Flex>
  )
}
