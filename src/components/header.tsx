import Link from 'next/link'
import {Link as ChakraLink, Heading } from "@chakra-ui/core"

const Header = () => {
  return (
    <Heading as="h2" color="white" size="lg" textDecor="bold" letterSpacing="tight" mb={{base: "2rem", md: "2"}} mt="2rem">
      <Link href="/">
        <ChakraLink>{"Back"}</ChakraLink>
      </Link>
    </Heading>
  )
}

export default Header
