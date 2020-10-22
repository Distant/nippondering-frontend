import { Box, Image, Flex, Heading, Spinner, Button } from "@chakra-ui/core";
import React from "react";
import Link from "next/link";
import { LocationDetail } from "../../types/tour";
import { imgUrl } from "../../utilities/fetchUtilities";
import { useHasMounted } from "../../utilities/has-mounted";
import useImageLoad from "../../utilities/useImageLoad";
import { shadows } from "../commonProps";
import styles from './tourCard.module.scss'

function LocationCard({ location }: { location: LocationDetail; }) {
  const [shadow, setShadow] = React.useState(2);
  const hasMounted = useHasMounted();
  const { imgRef, imgLoaded } = useImageLoad();
  const hideSpinner = !hasMounted || imgLoaded;

  return (
    <Box
      h="220px"
      position="relative"
      _last={{
        display: { base: "none", sm: "inline-block", md: "none", lg: "inline-block" }
      }}>

      {!hideSpinner &&
        <Box position="absolute" left="calc(50% - 12px)" top="calc(50% - 12px)">
          <Spinner />
        </Box>}

      <Link href={`/tours/location/${location.slug}`}>
        <Button
          variant="unstyled"
          className={"rounded4 " + styles.imgScale}
          maxWidth={{ base: "450px" }}
          transition="box-shadow 0.2s ease-out, opacity 250ms, transform 300ms ease-out"
          backgroundColor="white"
          h="220px"
          m={1}
          onMouseOver={() => setShadow(3)}
          onMouseOut={() => setShadow(2)}
          _hover={{ cursor: "pointer" }}
          transform={`translate(${hideSpinner ? "0, 0" : "0, 100px"})`}
          opacity={hideSpinner ? 100 : 0}
          position="relative"
          {...shadows[shadow]}>

          <Image
            className="card-image"
            loading="lazy"
            transition="transform 200ms ease-out"
            src={imgUrl(location.imagePath + "_thumb.jpg")}
            h="100%"
            alt={location.name}
            ref={imgRef} />
          <Flex direction="column" background="blue.800" position="absolute" bottom="0.5rem" left={"24%"} padding="0.5rem" width="100%" align="center">
            <Heading textStyle="locationCardTitle" >{location.name}</Heading>
          </Flex>

        </Button>
      </Link>
    </Box>
  )
}

export default LocationCard