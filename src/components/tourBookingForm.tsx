import { Box, Flex, FormLabel, InputLeftElement, useToast } from "@chakra-ui/core"
import React from "react"
import { TourFull } from "../types/tour"
import { FormInput, FormInputMulti, FormIconInput, FormCheckbox, FormWizard, FormStep, StyledError } from "./formWizard"
import * as Yup from 'yup'
import { Field, useFormikContext } from "formik"
import { FaPhone } from "react-icons/fa"
import { post, url } from "../utilities/fetchUtilities"

const BookingForm = ({ tour }: { tour: TourFull }) => {
  const toast = useToast()
  const Preview = () => {
    const { values }: { values: any } = useFormikContext()
    return (<Box>
      {JSON.stringify(values!)}
    </Box>)
  }
  return (
    <Box mx={[0, 2, 4]} >
      <FormWizard
        initialValues={{
          adults: 1,
          children: 0,
          time: new Date(tour.startingTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
          date: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          terms: false
        }}
        onSubmit={async (values, helpers) => {
          const booking = {
            tourId: tour.tourId,
            guestCount: values.adults,
            childrenCount: values.children,
            desiredTime: values.time,
            desiredDate: values.date,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            note: values.message
          }
          const res = await post(url(`/tours/${tour.tourId}/book`), JSON.stringify(booking))
          console.log(res)
          if (res.ok) {
            toast({
              title: "Request Sent",
              description: JSON.stringify(booking, null, 2),
              status: "success",
              duration: 3000,
              isClosable: true,
            })
            helpers.resetForm()
          } else {
            toast({
              title: "Something went wrong!",
              description: "Your might not be connected to the internet, please try again.",
              status: "error",
              duration: 3000,
              isClosable: true,
            })
          }
        }}
      >

        <FormStep validationSchema={Yup.object({
          firstName: Yup.string().max(20, "Name cannot be more than 20 characters").min(1, "Must have at least one character").required("Required"),
          lastName: Yup.string().max(20, "Name cannot be more than 20 characters").min(1, "Must have at least one character").required("Required"),
          email: Yup.string().email("Invalid email address").required("Required"),
          //phone: Yup.number().typeError("Please enter a phone number").required("Required"),
          adults: Yup.number().max(6, "No more than 6 adults allowed").min(1, "Must have a least one adult").required("Required"),
          children: Yup.number().max(4, "No more than 4 children allowed").min(0, "Cannot have negative children").required("Required"),
          date: Yup.date().min(new Date(Date.now()), "Please choose a future date").required("Required"),
          time: Yup.string().matches(/^([01]?[0-9]|2[0-3]):[0-5][0-9]/, "Must be valid time").required("Required"),
          message: Yup.string().max(250)
        })}>

          <Flex flexDirection={["column", "row", "row"]} pb={2} justifyContent="space-between">
            <Box width="100%" pr={[0, 2, 4]}>
              <FormLabel htmlFor="firstName" color="black">First Name *</FormLabel>
              <Field component={FormInput} name="firstName" id="firstName" placeholder="First Name" autoComplete="given-name" />
              <StyledError name="firstName" />
            </Box>
            <Box width="100%">
              <FormLabel htmlFor="lastName" color="black">Last Name *</FormLabel>
              <Field component={FormInput} name="lastName" id="lastName" placeholder="Last Name" autoComplete="family-name" />
              <StyledError name="lastName" />
            </Box>
          </Flex>

          <Box w="100%" pb={2}>
            <FormLabel htmlFor="email" color="black">Email *</FormLabel>
            <Field component={FormInput} mx="auto" name="email" id="email" placeholder="Email" autoComplete="email" />
            <StyledError name="email" />
          </Box>

          <Flex flexDirection={["column", "row", "row"]} pb={2} justifyContent="space-between">
            <Box width="100%" pr={[0, 2, 4]}>
              <FormLabel htmlFor="adults" color="black">Adults *</FormLabel>
              <Field component={FormInput} type="number" name="adults" id="adults" />
              <StyledError name="adults" />
            </Box>
            <Box width="100%">
              <FormLabel htmlFor="children" color="black">Children *</FormLabel>
              <Field component={FormInput} type="number" name="children" placeholder="0" id="children" />
              <StyledError name="children" />
            </Box>
          </Flex>

          <Flex flexDirection={["column", "row", "row"]} pb={2} justifyContent="space-between">
            <Box width="100%" pr={[0, 2, 4]}>
              <FormLabel htmlFor="date" color="black">Date *</FormLabel>
              <Field component={FormInput} type="date" name="date" />
              <StyledError name="date" />

            </Box>
            <Box width="100%">
              <FormLabel htmlFor="time" color="black">Time *</FormLabel>
              <Field component={FormInput} type="time" name="time" />
              <StyledError name="time" />
            </Box>
          </Flex>

          <Box>
            <FormLabel htmlFor="message" color="black">Additional Requests</FormLabel>
            <Field component={FormInputMulti} type="textarea" name="message" />
            <StyledError name="message" />
          </Box>
        </FormStep>

        {/* <Box w="100%" pb={2}>
            <FormLabel htmlFor="phone" color="black">Phone Number *</FormLabel>
            <Field component={FormIconInput} leftIcon={<InputLeftElement children={<FaPhone />} p={0} color="gray.200" />} mx="auto" name="phone" id="phone" placeholder="Phone Number" autoComplete="phone" />
            <StyledError name="phone" />
          </Box> */}

        <FormStep validationSchema={
          Yup.object({

            terms: Yup.boolean().oneOf([true], "Must accept the terms and conditions").required("Required")
          })}>

          <Preview />

          <Flex w="100%" alignItems="center">
            <FormLabel htmlFor="terms" color="black">Accept Terms and Conditions *</FormLabel>
            <Field component={FormCheckbox} borderColor="black" type="checkbox" name="terms" id="terms" />
          </Flex>
          <StyledError name="terms" />
        </FormStep>
      </FormWizard>
    </Box >
  )
}

export default BookingForm