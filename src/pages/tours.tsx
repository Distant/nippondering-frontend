import React, { useCallback, useMemo } from 'react'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading, Text, Image, Flex, Stack, useBreakpointValue, Spinner, Button, Grid, SimpleGrid } from '@chakra-ui/core'
import { shadows, cardBodyProps, cardTitleProps, PriceDisplay, ctaButtonProps, primaryButtonSolid, primaryButtonOutline, breadcrumbProps } from '../components/commonProps'
import { TourPreview, LocationDetail } from '../types/tour'
import Link from 'next/link';
import { useCurrency } from '../utilities/useCurrency';
import Select, { ValueType, ActionMeta, Styles } from 'react-select'
import { get, imgUrl, url } from '../utilities/fetchUtilities';
import { BigTourCard } from "../components/cards";
import Head from 'next/head';
import useImageLoad from '../utilities/useImageLoad';
import Container from '../components/container';

async function fetchTours(currency?: string) {
  const [resT, resL] = await Promise.all([
    get(url(`api/tours?currency=${currency ? currency : 'USD'}`)),
    get(url(`api/locations`))
  ]);
  const [tours, locations] = await Promise.all<ToursModel, LocationDetail[]>([resT.json(), resL.json()])

  return {
    props: {
      tours: tours.items,
      locations: locations
    }
  }
}

export async function getStaticProps() {
  return fetchTours()
}

type ToursModel = {
  pageIndex: number
  totalPages: number
  items: TourPreview[]
}

type Props = {
  tours: TourPreview[],
  locations: LocationDetail[],
  location?: string
}

const TourListCard = ({ tour, showPrice }: { tour: TourPreview, showPrice?: boolean }) => {
  const { imgRef, imgLoaded } = useImageLoad()

  return (<>
    <Flex flexDirection={["column", "row"]} {...shadows[1]} my={1} backgroundColor="white" borderRadius={4} overflow="hidden" minH={[240, 220]} maxHeight={[1000, 1000, "200px"]}>
      <Box minWidth={["100%", "25%"]} width={["100%", "25%"]} maxHeight={["75px", "100%"]} height={["75px", "auto"]} minHeight="120px" >
        <Image
          transition="opacity 200ms"
          ref={imgRef}
          src={imgUrl(tour.images[0] + "_thumb.jpg")}
          opacity={imgLoaded ? 100 : 0}
          width="100%"
          height="100%"
          objectFit="cover"
          alt={imgLoaded ? tour.title : ""} />
      </Box>
      <Flex flexDirection="column" py={2} pl={4} pr={2} width="100%">
        <Link href="/tour/[id]" as={`/tour/${tour.tourId}`}>
          <a><Heading as="h2" {...cardTitleProps} fontSize="1.3rem" color="black" mx={0} mb={1} p={0}>{tour.title}</Heading></a>
        </Link>
        <Text {...cardBodyProps} mx={0} mb={1} p={0} flexGrow={1}>{tour.shortDescription}</Text>
        <Flex>
          <Text {...cardBodyProps} mx={0} p={0} fontSize="1rem" color="purple.500" alignSelf="flex-end" flexGrow={1}>{tour.location.name}</Text>
          <Box alignSelf="flex-end">
            {showPrice ?
              <Text textStyle="cardBody" p={0} >
                {"From "}
                <PriceDisplay code={tour.price.currencyCode} symbol={tour.price.currencySymbol} amount={tour.price.estimate / 4} size={"lg"} />
                {"per guest"}
              </Text>
              : null}
            <Link href="/tour/[id]" as={`/tour/${tour.tourId}`}>
              <Button {...primaryButtonSolid} borderRadius={4} float="right" >See Details</Button>
            </Link>
          </Box>
        </Flex>
      </Flex >
    </Flex>
  </>)
}

type LocationOption = { value: string, label: string }
const locationDropdownStyle: any = {
  control: (provided: Styles, state: any) => ({
    ...provided,
    border: "1px solid #934aad",
    ":hover": { border: "1px solid white", },
    cursor: "pointer",
  }),
  singleValue: (provided: Styles, state: any) => {
    const opacity = state.isDisabled || state.isFocused ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return { ...provided, opacity, transition };
  },
  dropdownIndicator: (provided: Styles) => ({
    ...provided,
  }),
  indicatorSeparator: () => { }
}

const Tours: React.FC<Props> = ({ tours, locations, location }: Props) => {
  const [selectedLocation, setLocation] = React.useState<string>(location ? location : "all")
  const [allTours, setAllTours] = React.useState(tours)

  const [loaded] = useCurrency(async (currency) => {
    const { props } = await fetchTours(currency)
    setAllTours(props.tours)
  })

  const filteredTours = useMemo(() => allTours.filter(tour => selectedLocation === "all" || tour.location.slug === selectedLocation), [allTours, selectedLocation])

  const locationOptions = useMemo(() => {
    return [...locations.map(l => ({
      value: l.slug, label: l.name
    })), { value: "all", label: "All Locations" }]
  }, [locations])

  const routeToLocation = useCallback((s: ValueType<LocationOption>, _: ActionMeta<LocationOption>) => {
    const location = s as LocationOption
    if (location) {
      switch (location.value) {
        case "all": {
          setLocation("all")
          history.pushState(null, "", `/tours`)
          break
        }
        default: {
          setLocation(location.value)
          history.pushState(null, "", `/tours/location/${location.value}`)
          break
        }
      }
    }
  }, [])

  const defaultLocation = selectedLocation == "all" ? { value: "all", label: "All Locations" } : locationOptions.find(l => l.value == selectedLocation)

  return (
    <>
      <Head>
        <title>{`Tours in ${selectedLocation == "all" ? "Kansai" : locations.find((l) => l.slug == selectedLocation)?.name} - Nippondering Tours`}</title>
        <meta property="og:title" content="Nippondering Tours - Your Friends in Kansai" />
        <meta property="og:description" content="Experience Japan like a local with a private tour in the Kansai region. Choose from a selection of tours run by experienced and eager tour guides. Kyoto, Osaka, Nara and more!" />
        <meta property="og:image" content="https://nippondering.com/meta_logo.png" />
        <meta property="og:url" content="https://nippondering.com" />
        <meta property="twitter:card" content={"summary_large_image"} />
        <meta property="twitter:site" content="@nippondering" />
        <meta property="twitter:title" content="Nippondering Tours" />
        <meta property="twitter:description" content="Experience Japan like a local with a private tour in the Kansai region. Choose from a selection of tours run by experienced and eager tour guides. Kyoto, Osaka, Nara and more!" />
        <meta property="twitter:image" content="https://nippondering.com/meta_logo.png" />
      </Head>
      
      <Container>
        <Breadcrumb {...breadcrumbProps}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/tours">Tours</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Heading as="h1" textStyle="sectionTitle" fontSize="1.8rem" mx="0" p="0" >Tours We Offer</Heading>

        <Box maxWidth="200px" mt={4} mr={["auto", "auto", "0"]} ml="auto">
          <Select id="4" instanceId="5" inputId="6"
            options={locationOptions}
            onChange={routeToLocation}
            isSearchable={false}
            defaultValue={defaultLocation}
            styles={locationDropdownStyle} />
        </Box>

        {
          // change display if a location is selected and small screen size
        }
        <Box display={{ base: "flex", md: "none" }} justifyContent="left" mt={4} flexWrap="wrap" alignItems="center">
          {filteredTours && filteredTours.map((tour, i) =>
            <Box flexGrow={1} flexBasis={"calc((999px - 100%) * 1024)"} key={tour.tourId} mx={1}>
              {<TourListCard tour={tour} showPrice={loaded} />}
            </Box>
          )}
        </Box>

        <SimpleGrid display={{ base: "none", md: "grid" }} columns={[1, 1, 2, 3]} spacing={4} mt={4}>
          {filteredTours && filteredTours.map((tour, i) =>
            <BigTourCard tour={tour} isBig key={tour.tourId} />
          )}
        </SimpleGrid>

        <Stack textStyle="notes" my={8} spacing={1}>
          <Text>Looking for something a little more personalised?</Text>
          <Text>Let us know what you're interested in and we'll see what we can do!</Text>
          <Text as="b">booking@nippondering.com</Text>
        </Stack>
      </Container>
    </>
  )
}

export default Tours