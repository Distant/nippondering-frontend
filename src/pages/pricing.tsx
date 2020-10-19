import React from 'react'
import { Box, Breadcrumb, Icon, BreadcrumbItem, BreadcrumbLink, Text, List, ListItem, ListIcon, Heading } from '@chakra-ui/core'
import { shadows, cardBodyProps } from '../components/commonProps'
import { useCurrency } from '../utilities/useCurrency'
import { FaChevronRight } from 'react-icons/fa'
import { get, url } from '../utilities/fetchUtilities'

type PricingInfo = {
  currencyCode: string,
  currencySymbol: string,
  baseHourlyRate: number,
  additionalGuestHourlyRate: number,
  discount: number,
  discountedBaseHourlyRate: number,
  discountedAdditionalGuestHourlyRate: number
}

const information = [
  "We do offer tours outside of Kansai area too! However, we ask you to pay for our accommodation fee (if necessary) as well as transportation fee to the starting point. Please contact us for more details.",
  "Upon requested, we can hire a taxi for your tour. Please contact us for more details.",
  "You will need to pay for lunch (not necessary for a tour with a duration of no more than 4 hrs), transportation and tickets to any attractions for your guide during the tour.",
  "Additionally, we ask you to pay for our transportation to the starting point. This price will be added to the total when booking a tour. However, the price may vary if starting the tour somewhere other than what is listen on the tour page."
]
const cancellation = [
  "Free cancellation - 30 days prior to meeting date",
  "50% Refund - 15 to 29 days prior to meeting date",
  "No Refund - Within 14 days prior to meeting date"
]
const payment = "You won't pay for your tour immediately. After requesting a booking, we will make sure your chosen date is available, in which case we will send an email containing a paypal link. If the date is not available we will contact you and try to arrange another date that suits your itinerary."
const terms = "I agree that the fee paid is partially refundable or non-refundable in accordance with the terms described on this pricing page. Any personal information provided will only be used to receive the payment and offer the requested service and will not be disclosed to any other third parties."

const Pricing = () => {
  const [pricingInfo, setPricingInfo] = React.useState<PricingInfo | undefined>(undefined)
  const [loaded] = useCurrency(async (c) => {
    const res = await get(url(`api/pricing?currency=${c}`))
    const pI = await res.json()
    setPricingInfo(pI)
  }, true)

  return (
    <Box className="background-pattern" >
      <Box className="background-pattern-gradient" />
      <Box maxW="950px" mx="auto" mb="50px" pt={{ base: 0, md: 4 }}>
        <Breadcrumb display={{ base: "none", md: "block" }} fontSize="0.8rem" p={2} color="#555" separator={< FaChevronRight color="#555" size="0.6rem" />}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/pricing">Pricing</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Box backgroundColor="white" {...shadows[3]} borderRadius="4px" overflow="hidden" p={4}>

          <Heading as="h1" textStyle="sectionTitle">Pricing Information</Heading>

          {loaded && pricingInfo &&
            <Box layerStyle="alertBox">
              <Heading textStyle="cardTitle" color="black" textAlign="center" fontWeight="bold" fontSize={{base: "1.5rem", md:"1.6rem"}}>Special Offer</Heading>
              <Text {...cardBodyProps} textAlign="center">
                <Text as="sup" color="purple.500" fontSize={14}>{pricingInfo.currencySymbol}</Text>
                <Text as="b" color="purple.500" fontSize={18}>{pricingInfo.discountedBaseHourlyRate.toLocaleString(pricingInfo.currencyCode, { maximumFractionDigits: 2, minimumFractionDigits: 2 })} </Text>
                {"per group (price for up to 4 people), "}
                <Text as="sup" color="purple.500" fontSize={14}>{pricingInfo.currencySymbol}</Text>
                <Text as="b" color="purple.500" fontSize={18}>{pricingInfo.discountedAdditionalGuestHourlyRate.toLocaleString(pricingInfo.currencyCode, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}</Text>
                {" for each additional guest"}
              </Text>
            </Box>}

          <Text textStyle="cardBody"> <b>Information</b> </Text>
          <List mb={4} spacing={1}>
            {information.map(h =>
              <ListItem textStyle="cardBody" key={h} ml={8}>
                <ListIcon as={FaChevronRight} boxSize="10px" color="purple.400" />
                {h}
              </ListItem>)
            }
          </List>

          <Text textStyle="cardBody"> <b>Payment</b> </Text>
          <Text textStyle="cardBody">{payment}</Text>

          <Text textStyle="cardBody"> <b>Cancellation</b> </Text>
          <List mb={4} spacing={1}>
            {cancellation.map(i =>
              <ListItem textStyle="cardBody" key={i} ml={8} >
                {i}
              </ListItem>)
            }
          </List>

          <Text {...cardBodyProps}> <b>Terms and Conditions</b> </Text>
          <Text {...cardBodyProps}>{terms}</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Pricing