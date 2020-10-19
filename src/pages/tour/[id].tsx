import React from 'react'
import { TourFull, TourPreview } from '../../types/tour'
import { Box, Heading, Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Icon, List, ListItem, ListIcon, Button, Input, Divider, Image, FormLabel, Flex, Checkbox, InputLeftElement, HiddenTransition, Spinner } from '@chakra-ui/core'
import { shadows, PriceDisplay } from '../../components/commonProps';
import Slider from 'react-slick'
import { Field } from 'formik'
import { FormWizard, FormStep, FormInput, FormIconInput, FormInputMulti, StyledError, FormCheckbox } from '../../components/formWizard'
import { useCurrencyEffect } from '../../utilities/useCurrency'
import { CurrencyType } from '../../currencyContext'
import { FaChevronRight, FaCheck, FaPhone, FaTimes } from 'react-icons/fa'
import Head from 'next/head';
import useSWR from 'swr'
import { url } from '../../utilities/fetchUtilities';
import dynamic from 'next/dynamic';

const BookingForm = dynamic<{ tour: TourFull }>(import('../../components/tourBookingForm').then(mod => mod.default) as any, { ssr: false })

type Params = {
  params: {
    id: string
  }
}

const fetchTourTest = (url: string): Promise<TourFull> => fetch(url).then(res => res.json())

async function fetchTour(id: string, currency: CurrencyType) {
  const res = await fetch(url(`api/tours/${id}/detail?currency=${currency}`));
  const tour: TourFull = await res.json()
  return tour
}

export async function getStaticProps({ params }: Params) {
  const tour = await fetchTour(params.id, 'USD')
  return {
    props: {
      tour: tour
    }
  }
}

type PageModel = {
  pageIndex: number
  totalPages: number
  items: TourPreview[]
}

export async function getStaticPaths() {
  const res = await fetch(url("api/tours?currency=USD"))
  const tours: PageModel = await res.json();

  return {
    paths: tours.items.map((tour) => {
      return {
        params: {
          id: tour.tourId.toString(),
        },
      }
    }),
    fallback: false,
  }

  /*   return {
      paths: [{
        params: {
          id: "2"
        }
      }],
      fallback: false,
    } */
}

type Props = {
  tour: TourFull
}

type BookingModel = {
  firstName: string
  lastName: string

  email: string
  confirmEmail: string
  telephone: string

  tourId: number
  tourDate?: Date
  tourTime?: Date

  numGuests?: number
  numChildren?: number
  message: string

  termsAccepted: boolean
}

const Tour: React.FC<Props> = ({ tour }: Props) => {

  const { data: tourDetail } = useCurrencyEffect<TourFull>(currency => `https://nippondering.com/api/tours/${tour.tourId}/detail?currency=${currency}`, fetchTourTest, tour, (d1, d2) => d1.price.currencyCode == d2.price.currencyCode)

  return (
    <>
      <Head>
        <title>{`${tour.title} - Nippondering Tours`}</title>
        <meta name="description" content={tour.shortDescription} />
        <meta property="og:title" content={`${tour.title} - Nippondering Tours`} />
        <meta property="og:description" content={tour.shortDescription} />
        {(tour.images && tour.images[0]) &&
          <>
            <meta property="og:image" content={`https://img.nippondering.com/${tour.images[0].path}_thumb.jpg`} />
            <meta property="twitter:image" content={`https://img.nippondering.com/${tour.images[0].path}_thumb.jpg`} />
          </>}
        <meta property="og:url" content={`https://nippondering.com/tours/${tour.tourId}`} />
        <meta property="twitter:card" content={"summary_large_image"} />
        <meta property="twitter:site" content="@nippondering" />
        <meta property="twitter:title" content={`${tour.title} - Nippondering Tours`} />
        <meta property="twitter:description" content={tour.shortDescription} />
      </Head>

      <Box className="background-pattern">
        <Box className="background-pattern-gradient" />
        <Box maxW="950px" width="100%" mx="auto" mb="50px" pt={{ base: 0, md: 4 }}>
          <Breadcrumb display={{ base: "none", md: "block" }} fontSize="0.8rem" p={2} color="#555" separator={< FaChevronRight color="#555" size="0.6rem" />}>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/tours">Tours</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href={"/tours/location/" + tourDetail.location.slug}>{tourDetail.location.name}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href={"/tour/" + tourDetail.tourId}>{tourDetail.title}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Box backgroundColor="white" {...shadows[3]} borderRadius="4px" overflow="hidden">
            {tourDetail.images.length > 0 &&
              <Slider dots={true} focusOnSelect={false} autoplay={true} adaptiveHeight={false} slidesToScroll={1} >
                {tourDetail.images && tourDetail.images.map(img =>
                  <Box
                    key={img.path}
                    height={["200px", "300px", "500px"]}
                    width="100%"
                    minHeight={["200px", "300px", "500px"]}
                    p={{ md: 2 }}
                    _focus={{
                      outline: "none"
                    }}>
                    <Image
                      loading="lazy"
                      src={"https://img.nippondering.com/" + img.path + ".jpg"}
                      width="100%" pb="40%"
                      objectFit="cover"
                      alt={img.description} />
                  </Box>)}
              </Slider>
            }
            <Box mt="-1rem" >
              <Box backgroundColor="#fafafc" px={[0, 1, 8]} pt={4} pb={1} mb={4}>
                <Heading as="h1" textStyle="tourTitle">{tourDetail.title}</Heading>
                <Flex width="100%" justify="center" flexWrap="wrap" mb={4}>
                  <Text textStyle="cardBody" maxWidth="80ch" flexGrow={1} lineHeight="1.8rem">{tourDetail.description}</Text>
                  <Flex flexDirection="column" flexGrow={1} flexBasis="220px" m={1} borderLeft={{ base: "", lg: "1px solid #DDD" }} alignItems="center">
                    <Text alignSelf="flex-start" textStyle="cardSubHeading"><b>Highlights</b> </Text>
                    <List alignSelf="flex-start">
                      {tourDetail.highlights.map(h =>
                        <ListItem textStyle="cardBody" key={h} ml={4} p={1}>
                          <ListIcon as={FaChevronRight} boxSize="10px" color="purple.400" verticalAlign="center" />
                          {h}
                        </ListItem>)
                      }
                    </List>
                  </Flex>
                </Flex>
              </Box>

              <Box px={[1, 2, 8]}>
                {<Text textStyle="cardSubHeading">
                  <b>Prices: </b>
                  <PriceDisplay code={tourDetail.price.currencyCode} symbol={tourDetail.price.currencySymbol} amount={tourDetail.price.estimate} />
                  {"per group (price for up to 4 people), "}
                  <PriceDisplay code={tourDetail.price.currencyCode} symbol={tourDetail.price.currencySymbol} amount={tourDetail.price.extras} />
                  {" for each additional guest"}
                </Text>}

                <Text textStyle="cardSubHeading">
                  <b>Start Time: </b>
                  {(new Date(tourDetail.startingTime)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
                </Text>

                <Text textStyle="cardSubHeading">
                  <b>Duration: </b>
                  {tourDetail.duration}
                </Text>

                <Text textStyle="cardSubHeading"> <b>Included: </b> </Text>
                <List mb={4} spacing={1}>
                  {tourDetail.included.map(i =>
                    <ListItem textStyle="cardBody" key={i} ml={8}>
                      <ListIcon as={FaCheck} boxSize="10px" color="green.500" verticalAlign="center" />
                      {i}
                    </ListItem>)
                  }
                </List>

                <Text textStyle="cardSubHeading"> <b>Not Included: </b> </Text>
                <List mb={4} spacing={1}>
                  {tourDetail.notIncluded.map(i =>
                    <ListItem textStyle="cardBody" key={i} ml={8} >
                      <ListIcon as={FaTimes} boxSize="10px" color="red.300" verticalAlign="center" />
                      {i}
                    </ListItem>)
                  }
                </List>

                <Box layerStyle="alertBox">
                  <Text textStyle="sectionTitlePlain" py={0} mb={2} px={0} >Notice</Text>
                  <List mb={4} spacing={3}>
                    {["Note prices for currencies other than JP¥ are only approximate, based on exchange rate information"
                      , "You will need to pay for lunch, transportation and tickets to any attractions for your guide during the tour."
                      , "The itinerary is merely a suggestion. Upon your request, we can change and tailor it to your interests!"].map(i =>
                        <ListItem key={i} ml={4} color="black" fontSize="14px" fontWeight="400">
                          <ListIcon as={FaChevronRight} color="black" verticalAlign="center" />
                          {i}
                        </ListItem>)
                    }
                  </List>
                </Box>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" p={4} backgroundColor="#FBF9FB" borderTop="1px" borderColor="#CCC">
              <Heading textStyle="sectionTitlePlain" color="black" pt={0} textAlign="left" px={0}>Request a Booking</Heading>
              <BookingForm tour={tourDetail} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>)
}

export default Tour