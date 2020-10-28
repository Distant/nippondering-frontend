import { Box, Image, Flex, Heading, Spinner, Button, Text } from "@chakra-ui/core";
import { useState } from "react";
import Link from "next/link";
import { LocationDetail } from "../../types/tour";
import { imgUrl } from "../../utilities/fetchUtilities";
import { useHasMounted } from "../../utilities/useHasMounted";
import useImageLoad from "../../utilities/useImageLoad";
import { shadows } from "../commonProps";

function LocationCard({ location }: { location: LocationDetail; }) {
  const [shadow, setShadow] = useState(2);
  const hasMounted = useHasMounted();
  const { imgRef, imgLoaded } = useImageLoad();
  const hideSpinner = !hasMounted || imgLoaded;

  return (
    <Link href={`/tours/location/${location.slug}`} passHref>
      <Box
        as="a"
        h="220px"
        position="relative"
        _last={{
          display: { base: "none", sm: "inline-block", md: "none", lg: "inline-block" }
        }}
        className={"rounded4 imgScale"}
        maxWidth={{ base: "450px" }}
        transition="box-shadow 0.2s ease-out, opacity 250ms, transform 300ms ease-out"
        backgroundColor="white"
        m={1}
        onMouseOver={() => setShadow(3)}
        onMouseOut={() => setShadow(2)}
        _hover={{
          cursor: "pointer",
        }}
        transform={`translate(${hideSpinner ? "0, 0" : "0, 100px"})`}
        opacity={hideSpinner ? 100 : 0}
        {...shadows[shadow]}>

        {!hideSpinner &&
          <Box position="absolute" left="calc(50% - 12px)" top="calc(50% - 12px)">
            <Spinner />
          </Box>}

        <Box w="100%" h="100%">
          <Text as="section" background="black" opacity="0" position="absolute" width="100%" height="100%" zIndex="1" transition="opacity 200ms ease-out" />
          <Text as="p" opacity="0" color="white" position="absolute" width="100%" textAlign="center" top="50%" zIndex="2" transition="opacity 100ms ease-out">See Tours</Text>

          <Image
            className="cover-image-full"
            loading="lazy"
            transition="transform 200ms ease-out"
            src={imgUrl(location.imagePath + "_thumb.jpg")}
            h="100%"
            alt={location.name}
            ref={imgRef} />
          <Flex direction="column" background="blue.800" position="absolute" bottom="0.5rem" left={"24%"} right="0" padding="0.5rem" align="center" borderTop="2px solid" borderColor="purple.600">
            <Heading textStyle="locationCardTitle" width="100%" paddingRight={4} >{location.name}</Heading>
          </Flex>

        </Box>
      </Box>
    </Link>

  )
}

export default LocationCard