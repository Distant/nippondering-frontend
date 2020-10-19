import { Box, Image, Flex, Heading, Text, Spinner, Button } from "@chakra-ui/core";
import React from "react";
import Link from "next/link";
import { Props } from "./cards";
import { imgUrl } from "../../utilities/fetchUtilities";
import useImageLoad from "../../utilities/useImageLoad";
import { shadows, PriceDisplay } from "../commonProps";

function TourCard({ tour }: Props) {
  const [shadow, setShadow] = React.useState(2);
  const { imgRef, imgLoaded } = useImageLoad();
  const hideSpinner = imgLoaded || !tour.images[0];

  return (
    <Box
      h={["400px", "300px", "460px"]}
      position="relative"
      _last={{
        display: { base: "none", sm: "none", lg: "inline-block" }
      }}>

      {!hideSpinner &&
        <Box position="absolute" left="calc(50% - 12px)" top="calc(50% - 12px)">
          <Spinner />
        </Box>}

      <Link href="/tour/[id]" as={`/tour/${tour.tourId}`}>
        <Button
          variant="unstyled"
          whiteSpace="pre-wrap"
          className="rounded4"
          maxWidth={{ base: "450px" }}
          transition="box-shadow 0.2s ease-out, opacity 250ms, transform 300ms ease-out"
          backgroundColor="white"
          //minWidth={{ base: "240px", md: "20px" }}
          m={1}
          mx="auto"
          onMouseOver={() => setShadow(3)}
          onMouseOut={() => setShadow(2)}
          _hover={{ cursor: "pointer" }}
          h={["400px", "300px", "460px"]}
          transform={`translate(${hideSpinner ? "0, 0" : "0, 100px"})`}
          opacity={hideSpinner ? 100 : 0}
          position="relative"
          {...shadows[shadow]}
        >
          <Image
            className="card-image"
            loading="lazy"
            src={imgUrl(tour.images[0] + "_thumb.jpg")}
            alt={tour.title}
            ref={imgRef} />
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
        </Button>
      </Link>
    </Box>);
}

export default TourCard