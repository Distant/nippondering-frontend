import { Box, Breadcrumb, Flex, BreadcrumbItem, BreadcrumbLink, Text, Heading, Image, Container } from '@chakra-ui/core'
import { shadows } from '../components/commonProps'
import { FaChevronRight } from 'react-icons/fa'
import { ResponsivePicture } from '../components/responsivePicture'

const whatDo = "We offer private personalized walking tour mainly in the Kansai area (Osaka, Kyoto, Nara and Hyogo) and will help you have an amazing time in Japan before and during your stay. We aren't only your tour guides, but hope to be your friends. We are happy to answer any questions you have regarding your trip to Japan just as any of your great friends would be."
const whoWe = "We are two young happy girls who share the same passion to help foreign visitors getting familiar with the real Japan including its culture, customs, current affairs, politics and such, as well as its history and popular or hidden spots. We were both born and raised up in Kansai area, but have abundant experience abroad. I spent three years of my life in Denmark through exchange programs and a Master's degree program while Kiriko took a degree in Thailand. I learned Danish and Kiriko learned Thai. Abundant experience abroad has provided different perspectives about Japan and we both came to appreciate its beautiful culture. We love traveling and have visited many countries around the world. So obviously we are intrigued to hear about your country! Meeting new people whether from Japan or abroad is a great pleasure for us curious girls. We appreciate this culturally diverse world and are eager to preserve unique Japanese culture and traditions (we hope the same for the beautiful culture of your country too)! Among the numerous aspects of Japanese culture, we specifically perform tea ceremonies and enjoy putting on a kimono. Want to know more about us? Come and tour with us in Japan!"
const whyUs = "Beside sufficient language skills, we are very motivated to play a role as a cultural mediator as well as a tour guide who can help you blend in to Japanese culture, while introducing you to beautiful sites we love as locals. Motivated by this dream, we will always work hard to expand our knowledge in Japanese culture so as to prepare for the questions you might come up with. We will make sure that you will have an amazing experience not only during the guided tour but during your entire stay in Japan by offering useful tips. We do not only take you to the popular spots and give you some facts you could also find on Google. Besides that, we offer conversations on what you would like to know and what you should know. Google is full of information, but that is not everything and not everything there is true. There are things you learn only when traveling with Japanese locals, more specifically the ones with insights, interests and respect for both Japan and abroad. There are places you stop by and things you do only when travelling with these Japanese locals. Our personal history, personality and motivations are what make us unique and great friends to satisfy your curiosity!"

const Avatar = ({ name }: { name: string }) => {
  return (
    <Box
      width="120px"
      height="120px"
      m="2"
      objectFit="cover"
      backgroundColor="#303659"
      borderRadius="50%"
      overflow="hidden">
      <ResponsivePicture className="cover-image-full" alt={name} webp baseUrl={`/assets/${name.toLowerCase()}.jpg`} />
    </Box>
  )
}

const About = () => {
  return (
      <Box className="background-pattern" >
        <Box className="background-pattern-gradient" />
        <Box maxW="950px" mx="auto" mb="50px" pt={{ base: 4, md: 4 }}>
          <Breadcrumb display={{ base: "none", md: "block" }} fontSize="0.8rem" p={2} color="#555" separator={< FaChevronRight color="#555" size="0.6rem" />}>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/pricing">Pricing</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Heading as="h3" textStyle="notes" fontSize="1.4rem" >"When in Rome, do as the Romans do"</Heading>
          <Text mb={4} textStyle="notes" mx="auto" fontSize=".9rem" maxWidth="800px" px={4}>We believe that this is the best way to enjoy traveling while being welcomed by the locals at the sametime. We hope to be great cultural mediators and offer a special time in this beautiful country. Do not make your trip aregular fun holiday. Make it an opportunity to learn something new and enrich your life!</Text>

          <Box backgroundColor="white" {...shadows[3]} borderRadius="4px" overflow="hidden" px={{ base: 8, md: 16 }} pb={4} lineHeight="1.8rem">

            <Heading as="h1" textStyle="sectionTitle">About Nippondering</Heading>

            <Text textStyle="cardTitle" textAlign="center"> <b>WHAT DO WE DO?</b> </Text>
            <Text textStyle="cardBody" >{whatDo}</Text>

            <Text textStyle="cardTitle" textAlign="center"> <b>WHO ARE WE?</b> </Text>
            <Container centerContent={true} >
              <Flex justify="space-around" flexWrap="wrap">
                <Avatar name="aimu" />
                <Avatar name="kiriko" />
              </Flex>
            </Container>
            <Text textStyle="cardBody">{whoWe}</Text>

            <Text textStyle="cardTitle" textAlign="center"> <b>WHY US?</b> </Text>
            <Text textStyle="cardBody">{whyUs}</Text>
          </Box>
        </Box>
      </Box>
  )
}

export default About