import { Flex, Heading } from '@zoralabs/zord'
import { feedHeader } from './FeedComponents.css'

export function FeedHeader({ title }: { title?: string | undefined }) {
  return (
    <Flex className={feedHeader}>
      <Heading as="h1">
        {title}
      </Heading>
    </Flex>
  )
}
