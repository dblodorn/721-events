import { Flex } from '@zoralabs/zord'
import { HeaderNav } from './HeaderNav'
import { headerWrapper } from './Header.css'

export function HeaderComposition() {
  return (
    <Flex as="header" position="relative" className={headerWrapper}>
      <HeaderNav />
    </Flex>
  )
}
