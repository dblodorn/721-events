import { Flex, Heading } from "@zoralabs/zord"
import Marquee from "react-fast-marquee"
import { footerWrapper } from "./Footer.css"

export function FooterComposition() {
  return (
    <Flex
      as="footer"
      position="fixed"
      bottom="x0"
      left="x0"
      className={footerWrapper}
    >
      <Marquee speed={50} gradient={false} direction='right'>
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
    </Flex>
  )
}