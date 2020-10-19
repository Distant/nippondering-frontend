import { Box, Text, Flex, Button } from '@chakra-ui/core'
import Link from 'next/link'

const Footer = () => {
  return (
    <Box as="footer" justifySelf="flex-end">
      <Flex flexDirection="column" alignItems="center" justifyContent="center" w="100%" backgroundColor="blue.800" minHeight="100px">
        <Text color="white" mt={2} >©️ Nippondering 2020</Text>
        <Link href="/trade-law"><Button variant="unstyled" color="white">特定商取引法</Button></Link>
      </Flex>
    </Box>
  )
}

export default Footer
