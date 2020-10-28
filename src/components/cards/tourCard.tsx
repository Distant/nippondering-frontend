import { Box, Image, Flex, Heading, Text, Spinner, Button } from "@chakra-ui/core";
import { useState } from "react";
import Link from "next/link";
import { Props } from "./cards";
import { imgUrl } from "../../utilities/fetchUtilities";
import useImageLoad from "../../utilities/useImageLoad";
import { shadows, PriceDisplay } from "../commonProps";
import { useHasMounted } from "../../utilities/useHasMounted";

function TourCard({ tour }: Props) {
  const [shadow, setShadow] = useState(2);
  const { imgRef, imgLoaded } = useImageLoad()
  const mounted = useHasMounted()
  const hideSpinner = !mounted || imgLoaded || !tour.images[0];

  return (
    <Link href="/tour/[id]" as={`/tour/${tour.tourId}`} passHref>
      <Box
        as="a"
        h={["400px", "300px", "460px"]}
        position="relative"
        _last={{
          display: { base: "none", sm: "none", lg: "inline-block" }
        }}
        whiteSpace="pre-wrap"
        className={"rounded4 imgScale"}
        maxWidth={{ base: "450px" }}
        transition="box-shadow 0.2s ease-out, opacity 250ms, transform 300ms ease-out"
        backgroundColor="white"
        //minWidth={{ base: "240px", md: "20px" }}
        m={1}
        mx="auto"
        onMouseOver={() => setShadow(3)}
        onMouseOut={() => setShadow(2)}
        transform={`translate(${hideSpinner ? "0, 0" : "0, 100px"})`}
        opacity={hideSpinner ? 100 : 0}
        {...shadows[shadow]} >

        {!hideSpinner &&
          <Box position="absolute" left="calc(50% - 12px)" top="calc(50% - 12px)">
            <Spinner />
          </Box>}

        <Box w="100%" h="100%">
          <Box width="100%" height="50%" overflow="hidden" position="relative">
            <Text as="section" className="overlay" background="black" opacity="0" position="absolute" width="100%" height="100%" zIndex="1" transition="opacity 200ms ease-out" />
            <Text as="p" className="overlay" opacity="0" color="white" position="absolute" width="100%" textAlign="center" top="50%" zIndex="2" transition="opacity 100ms ease-out">Read More</Text>
            <Image
              className="cover-image-full"
              transition="transform 200ms ease-out"
              loading="lazy"
              src={imgUrl(tour.images[0] + "_thumb.jpg")}
              alt={tour.title}
              ref={imgRef}
            />
          </Box>
          <Flex direction="column" h={"50%"} mx={1} pt={2}>
            <Heading as="h2" textStyle="cardTitle">{tour.title}</Heading>
            <Text textStyle="cardBody" minH="40px" flexGrow={1} textAlign="left">{tour.shortDescription}</Text>

            <Box alignSelf="flex-end">
              <Text textStyle="cardBody">
                {"From "}
                <PriceDisplay code={tour.price.currencyCode} symbol={tour.price.currencySymbol} amount={tour.price.estimate / 4} />
                {"per guest"}
              </Text>
            </Box>
          </Flex>
        </Box>

      </Box >
    </Link>);

}

export default TourCard