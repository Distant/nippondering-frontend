import { useState, useEffect } from 'react';
import { Box, Flex, Text, Heading, Image } from '@chakra-ui/core'
import { ResponsivePicture } from './responsivePicture'

const GuideProfile = ({ name, summary }: { name: string, summary: string }) => {
  const [loadImg, setLoadImg] = useState(false)
  useEffect(() => {
    setLoadImg(true)
  })
  return (
    <Flex w="100%" m="auto" flexGrow={1} align="center" direction={["column", "row"]}>
      <Box ml="2">
        <Box width="120px"
          height="120px"
          m="2"
          objectFit="cover"
          backgroundColor="#303659"
          borderRadius="50%"
          border="2px solid #FFF"
          overflow="hidden">
          <ResponsivePicture className="cover-image-full" alt={name} webp baseUrl={`/assets/${name}.jpg`} />
        </Box>
      </Box>
      <Box>
        <Heading textStyle="cardTitle" color="white" mx={0}>{name}</Heading>
        <Text textStyle="cardBody" color="#EEE" mx={0}>{summary}</Text>
      </Box>
    </Flex>)
}

export const AboutGuides = () => {
  return (
    <Box w="100%" mt="0" backgroundColor="blue.800" borderTop="4px solid" borderTopColor="purple.600">
      <Flex my="2em" w="100%" direction="column" align="center" p={[1, 2, 4]} m="auto">
        <Heading color="#EEE" textAlign="center" fontFamily="Kaushan Script, sans-serif" m={0}>About Us</Heading>
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

