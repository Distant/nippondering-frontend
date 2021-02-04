import { Box, Flex, Text, Heading, Avatar, Image, Stack, Button, Grid, GridProps } from '@chakra-ui/core'
import { ctaButtonProps } from './commonProps'
import useImageLoad from '../utilities/useImageLoad'
import { ResponsivePicture } from './responsivePicture'
import { FaWpforms, FaSun, FaMapMarked, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'

const BookingProcess = (props: GridProps) => {
  return (
    <Box textStyle="iconSubText" sx={{ color: "#FFF8" }} {...props} w="100%" mt={8} textAlign="center" px={4} >
      <Stack direction="row" justifyContent="center" align="center" divider={<Box px={4} border="none"><FaArrowRight /></Box>} >
        <Flex flexDirection="column" align="center">
          <FaMapMarked size="32px" />
          <Text>Find a tour you like</Text>
        </Flex>

        <Flex flexDirection="column" align="center">
          <FaWpforms size="32px" />
          <Text>Send us a request</Text>
        </Flex>

        {/* <Flex flexDirection="column" align="center">
          <FaPaypal size="32px" color="#FFFFFFCC" />
          <Text>Pay for your tour</Text>
        </Flex> */}

        <Flex flexDirection="column" align="center">
          <FaSun size="32px" />
          <Text>Enjoy your journey!</Text>
        </Flex>
      </Stack>
    </Box>
  )
}

export const Tagline = ({ minimal }: { minimal?: boolean }) => {
  const { imgRef, imgLoaded } = useImageLoad()

  return (
    <Box w="100%" mt="0" borderBottom="4px solid" borderBottomColor="purple.600">
      <Box position="fixed" width="100vw" height="50vh" minHeight="350px" zIndex={-8} background="linear-gradient(180deg,#3b416bcc,#934aadDD)" />
      {<Box
        position="fixed"
        width="100%"
        height="calc(50vh - 5rem + 10px)" minHeight="360px"
        zIndex={-10}
        marginTop="-10px" //remove weird blurry thing
        backgroundColor="#313658">
        <ResponsivePicture
          baseUrl="/assets/kobe_sm.jpg"
          urls={["/assets/kobe_op.jpg", "/assets/kobe_md.jpg"]}
          breakpoints={["1800px", "600px"]}
          className="cover-image-full blur-image"
          alt="Kobe"
          webp
        />
      </Box>}
      <Grid gridTemplateRows="repeat(3, 1fr)" height={minimal ? 0 : "calc(50vh - 5rem)"} maxHeight="500px" minHeight={minimal ? 0 : "350px"}>
        <Flex gridRow={2} alignSelf="center" w="100%" direction="column" justify="space-around" align="center" p={[1, "auto", "auto"]} mx="auto">
          {!minimal && <>
            <ResponsivePicture
              baseUrl="/assets/logo2_alt_md.png"
              webp
              customNode={
                <Image
                  className="drop-shadow"
                  ref={imgRef}
                  transition="all 300ms ease-out"
                  loading="lazy"
                  opacity={1}
                  src="/assets/logo2_alt_md.png"
                  h={{ base: "80px", md: "128px" }}
                  w={{ base: "313px", md: "500px" }}
                  maxH={minimal ? "128px" : "128px"}
                  alt="Nippondering" />
              } />

            {/* <Heading
              as="p"
              className="tagline"
              mt={1}
              textStyle="tagline"
              textAlign="center"
              transform="rotate(-4deg)">YOUR FRIENDS IN KANSAI !</Heading> */}

            <Box w="100%" display="flex" justifyContent="center">
              <Link href="/tours" passHref>
                <Button as="a" {...ctaButtonProps} backgroundColor="#794797" boxShadow="0px 6px 11px rgb(88 30 97 / 22%), 0 8px 20px rgb(44 9 70 / 15%)"
                  _hover={{
                    boxShadow: "0px 6px 15px rgb(88 30 97 / 22%), 0 8px 28px rgb(44 9 70 / 15%)",
                    transform: "scale(1.12)"
                  }} my={4} size="lg" >See our Tours</Button>
              </Link>
            </Box>
          </>}
        </Flex>
        {!minimal && <BookingProcess gridRow={3} alignSelf="end" display={{ base: "none", md: "initial" }} />}
      </Grid>
    </Box >
  )
}