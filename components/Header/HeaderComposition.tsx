import { Flex } from '@zoralabs/zord'
import { HeaderNav } from './HeaderNav'
import { headerWrapper } from './Header.css'

export function HeaderComposition() {
  return (
    <Flex
      as="header"
      position="sticky"
      top="x0"
      left="x0"
      className={headerWrapper}
    >
      <HeaderNav />
    </Flex>
  )
}
