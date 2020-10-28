import { Box, Text, Flex, Grid, Icon, VStack } from '@chakra-ui/core'
import Link from 'next/link'
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <Box as="footer" justifySelf="flex-end" >
      <Flex flexDirection="column" alignItems="center" justifyContent="center" w="100%" backgroundColor="blue.800" minHeight="100px">
        <Grid gridTemplateColumns="1fr 1fr" maxWidth="360px" width="100%" p={4} justifyItems="center">
          <VStack alignItems="left">
            <Link href="/trade-law" passHref><Text as="a" fontWeight="bold" color="white" textStyle="cardBody" py={0}>特定商取引法</Text></Link>
          </VStack>
          <VStack alignItems="left" spacing={1}>
            <Text as="a" display="flex" alignItems="center" href="https://twitter.com/nippondering" target="_blank" rel="noopener noreferrer" color="white" textStyle="cardBody" py={0}>
              <Icon as={FaTwitter} mr={2} w="16px" h="16px" />
              {"Twitter"}
            </Text>
            <Text as="a" display="flex" alignItems="center" href="https://instagram.com/aimu_nippondering" target="_blank" rel="noopener noreferrer" color="white" textStyle="cardBody" py={0}>
              <Icon as={FaInstagram} mr={2} w="16px" h="16px" />
              {"Instagram"}
            </Text>
            <Text as="a" display="flex" alignItems="center" href="https://facebook.com/pages/category/Travel-Service/Nippondering-102864357978512/" target="_blank" rel="noopener noreferrer" color="white" textStyle="cardBody" py={0}>
              <Icon as={FaFacebook} mr={2} w="16px" h="16px" />
              {"Facebook"}
            </Text>
          </VStack>
        </Grid>
        <Text color="white" mb={2} >©️ Nippondering 2020</Text>
      </Flex>
    </Box >
  )
}

export default Footer
