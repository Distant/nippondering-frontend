import React, { useEffect } from 'react'
import { Box, Flex, Text, Heading, Image } from '@chakra-ui/core'
import { cardTitleProps, cardBodyProps } from './commonProps'
import { ResponsivePicture } from './responsivePicture'
//import { FaWpforms, FaPaypal, FaSun, FaHandPointer } from 'react-icons/fa'

const GuideProfile = ({ name, summary }: { name: string, summary: string }) => {
  const [loadImg, setLoadImg] = React.useState(false)
  useEffect(() => {
    setLoadImg(true)
  })
  return (
    <Flex w="100%" m="auto" flexGrow={1} align="center" direction={["column", "row"]}>
      <Box ml="2">
        {loadImg &&
          <ResponsivePicture
            baseUrl={`/assets/${name.toLowerCase()}.jpg`}
            webp
            customNode={
              <Image
                loading="lazy"
                maxWidth="120px"
                alt={name}
                src={`/assets/${name.toLowerCase()}.jpg`}
                w="120px" h="120px"
                m="2"
                objectFit="cover"
                backgroundColor="#303659"
                borderRadius="50%"
                border="2px solid #FFF" />
            } />
        }
      </Box>
      <Box>
        <Heading {...cardTitleProps} color="white" mx={0}>{name}</Heading>
        <Text {...cardBodyProps} color="#EEE" mx={0}>{summary}</Text>
      </Box>
    </Flex>)
}

export const AboutGuides = () => {
  return (
    <Box w="100%" mt="0" backgroundColor="blue.800" borderTop="4px solid" borderTopColor="purple.600">
      <Flex my="2em" w="100%" direction="column" align="center" p={[1, 2, 4]} m="auto">
        <Heading textStyle="pageTitle" color="#EEE" textAlign="center" fontFamily="Kaushan Script, sans-serif">About Us</Heading>
        <Box w="100%" mt={3}>
          <Flex maxWidth="1280px" mx="auto" flexGrow={1} justify="center" direction={["column", "column", "row"]}>
            <GuideProfile name="Aimu" summary="I am a happy young Japanese lady who fell in love with Danish 'hygge' (coziness). Hot springs and tea ceremonies as well as delicious food are my favorite part of Japanese culture and I'd love to show you them all!" />
            <GuideProfile name="Kiriko" summary="I decided to become a tour guide because I would love to introduce my beautiful country to more people around the world. As a traveler myself, I will provide you with informations and tips, making your trip to Japan a memorable one!" />
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

