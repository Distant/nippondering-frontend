import { Box, Image, Flex, Heading, Text, Spinner, List, ListIcon, ListItem, Button } from "@chakra-ui/core";
import React from "react";
import { shadows, PriceDisplay, ctaButtonProps } from "../commonProps";
import Link from "next/link";
import useImageLoad from "../../utilities/useImageLoad";
import { FaChevronRight } from "react-icons/fa";
import { imgUrl } from "../../utilities/fetchUtilities";
import { Props } from "./cards";
import { useHasMounted } from "../../utilities/useHasMounted";

function BigTourCard({ tour }: Props) {
  const { imgRef, imgLoaded } = useImageLoad()
  const mounted = useHasMounted()
  const hideSpinner = !mounted || imgLoaded || !tour.images[0]

  return <Box position="relative" mb={8}>
    {!hideSpinner &&
      <Box
        position="absolute"
        left="calc(50% - 12px)"
        top="calc(50% - 12px)"
        transition="opacity 250ms, transform 300ms ease-out"
        transform={`translate(${hideSpinner ? "0, 0" : "0, 100px"})`}
        opacity={hideSpinner ? 100 : 0}>
        <Spinner />
      </Box>}
    <Link href="/tour/[id]" as={`/tour/${tour.tourId}`}>
      <Box
        className="rounded4"
        maxWidth={["100%", "100%", "100%"]}
        backgroundColor="white"
        minWidth={{ base: "100%", md: "20px" }}
        h={["620px", -1, "620px"]}
        position="relative"
        {...shadows[2]}
      >
        <Image
          className="card-image"
          h="33%"
          loading="lazy"
          src={imgUrl(tour.images[0] + ".jpg")}
          alt={tour.title}
          ref={imgRef} />
        <Flex direction="column" h={"66%"} mx={1} pt={2}>
          <Heading as="h2" textStyle="cardTitle">{tour.title}</Heading>
          <Text textStyle="cardBody" minH="40px" flexGrow={0}>{tour.shortDescription}</Text>
          <Box flexGrow={1}>
            <Text textStyle="cardSubHeading"><b>Highlights</b> </Text>
            <List>
              {tour.highlights.map(h => <ListItem textStyle="cardBody" key={h} ml={4} p={1}>
                <ListIcon as={FaChevronRight} boxSize="10px" color="purple.400" verticalAlign="center" />
                {h}
              </ListItem>)}
            </List>
          </Box>
          <Box alignSelf="flex-end" mb={6}>
            <Text textStyle="cardBody">
              {"From "}
              <PriceDisplay code={tour.price.currencyCode} symbol={tour.price.currencySymbol} amount={tour.price.estimate / 4} />
              {"per guest"}
            </Text>

          </Box>
        </Flex>

      </Box>
    </Link>
    <Link href="/tour/[id]" as={`/tour/${tour.tourId}`}>
      <Button {...ctaButtonProps} borderRadius={4} position="absolute" bottom="-25px" left="calc(50% - 51px)" mb={2} mr={1}>See Details</Button>
    </Link>
  </Box>;
}

export default BigTourCard