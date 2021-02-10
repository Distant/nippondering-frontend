import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import { Box, Flex, Heading, Button, SimpleGrid, Text } from "@chakra-ui/core";
import { TourCard } from "../components/cards";
import { LocationCard } from "../components/cards";
import { ctaButtonProps } from "../components/commonProps";
import { TourPreview, LocationDetail } from "../types/tour";
import Link from "next/link";
import { useState } from "react";
import { get } from "../utilities/fetchUtilities";
import { useCurrency } from "../utilities/useCurrency";
import { AboutGuides } from "../components/aboutGuides";
import { useHasMounted } from "../utilities/useHasMounted";
import { url } from "../utilities/fetchUtilities";
import LazyHydrate from "react-lazy-hydration";
import * as React from "react";

/**
 * Fetches and returns a popular tours and locations promise with the given currency query appended
 */
async function fetchTours(code: string) {
  const [resT, resL] = await Promise.all([
    get(url(`api/Tours/Popular?currency=${code}`)),
    get(url(`api/Locations/Popular`)),
  ]);
  const [tours, locations] = await Promise.all([resT.json(), resL.json()]);
  return [tours, locations];
}

export async function getStaticProps() {
  const [tours, locations] = await fetchTours("USD");

  return {
    props: {
      popTours: tours,
      popLocations: locations,
    },
    revalidate: parseInt(process.env.NEXT_REVALIDATE_SECONDS ?? "1", 10),
  };
}

type Props = {
  popTours: TourPreview[];
  popLocations: LocationDetail[];
};

const Index = ({ popTours, popLocations }: Props) => {
  const hasMounted = useHasMounted();
  const [tours, setTours] = useState(popTours);
  const [loaded] = useCurrency(async (currency) => {
    const [newTours, _] = await fetchTours(currency);
    setTours(newTours);
  });

  return (
    <>
      <Container>
        <Text
          color="blue"
          maxWidth="950px"
          textAlign="center"
          lineHeight="1.6rem"
          letterSpacing="0.02rem"
          mx="auto"
          pt={4}
          fontSize="1rem"
        >
          Need a new energetic friend to show you around in Japan? We offer private personalized tours in the Kansai
          area (Osaka, Kyoto, Nara and Hyogo). We will not only be your guide, but also your friend who spices up your
          precious time in Japan!
        </Text>

        <LazyHydrate whenIdle>
          <Heading textStyle="sectionTitle" pt={{ base: 4, md: 5 }}>
            Popular Tours
          </Heading>
          <SimpleGrid columns={[1, 1, 3, 4]} mb={8} spacing={4} justifyItems="center">
            {loaded && tours ? (
              tours.map((tour, i) => <TourCard key={tour.tourId} tour={tour} />)
            ) : (
              <Box minH="400px" />
            )}
          </SimpleGrid>
        </LazyHydrate>

        <LazyHydrate whenIdle>
          <Box w="100%" display="flex" justifyContent="center">
            <Link href="/tours" passHref>
              <Button as="a" {...ctaButtonProps} mb={8} size="lg">
                See all tours
              </Button>
            </Link>
          </Box>
          <Heading textStyle="sectionTitle" pt={{ base: 4, md: 5 }}>
            Popular Locations
          </Heading>
          <SimpleGrid columns={[1, 2, 3, 4]} mb={8} spacing={4} justifyItems="center">
            {popLocations ? (
              popLocations.map((location) => <LocationCard key={location.locationId} location={location} />)
            ) : (
              <Box minH="220px" />
            )}
          </SimpleGrid>
        </LazyHydrate>
      </Container>
      <LazyHydrate ssrOnly>
        <AboutGuides />
      </LazyHydrate>
    </>
  );
};

export default Index;
