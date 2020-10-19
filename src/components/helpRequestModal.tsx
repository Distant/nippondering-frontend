import React from 'react'
import { Box, Text, Modal, FormLabel, Flex, Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useToast } from '@chakra-ui/core'
import { Form, Formik, Field } from 'formik'
import * as Yup from 'yup'
import { FormInput, FormInputMulti, StyledError } from './formWizard'
import { ctaButtonProps } from './commonProps'
import { url, post } from '../utilities/fetchUtilities'

type Props = {
  isOpen: boolean
  onClose: () => void
}

type RequestModel = {
  firstName: string
  lastName: string
  email: string
  question: string
}
const sendRequest = async (request: RequestModel, onSuccess: () => void, onError: (e: string) => void) => {
  try {
    const res = await post(url("api/inquiries"), JSON.stringify(request))
    if (res.ok) onSuccess()
    else onError("Something went wrong, please try again")
  }
  catch (error) {
    onError(error.toString())
  }
}

const HelpRequest = ({ isOpen, onClose }: Props) => {
  const [error, setError] = React.useState<string | null>(null)
  const toast = useToast()
  const RequestForm = () => {
    return (
      <Box mx={[0, 2, 4]} >
        <Formik
          validationSchema={
            Yup.object({
              firstName: Yup.string().max(20, "Name cannot be more than 15 characters").min(1, "Must have at least one character").required("Required"),
              lastName: Yup.string().max(20, "Name cannot be more than 20 characters").min(1, "Must have at least one character").required("Required"),
              email: Yup.string().email("Invalid email address").required("Required"),
              message: Yup.string().required("Required")
            })}
          onSubmit={async (values, helpers) => {
            await sendRequest({ firstName: values.firstName, lastName: values.lastName, email: values.email, question: values.message },
              () => {
                setError(null)
                toast({
                  title: "Message Sent",
                  description: "We'll try to get back to you soon!",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                })
                onClose()
              },
              (e) => {
                toast({
                  title: "Error Sending Message",
                  description: e,
                  status: "error",
                  duration: 5000,
                  isClosable: true,
                })
              })
          }}
          initialValues={{ firstName: "", lastName: "", email: "", message: "" }}>
          {bag => {
            return (
              <Form style={{ height: "100%" }}>
                <Box>
                  <FormLabel htmlFor="firstName" color="black">First Name</FormLabel>
                  <Field component={FormInput} type="textarea" name="firstName" placeholder="First Name" autoComplete="given-name"/>
                  <StyledError name="firstName" />
                </Box>

                <Box>
                  <FormLabel htmlFor="lastName" color="black">Last Name</FormLabel>
                  <Field component={FormInput} type="textarea" name="lastName" placeholder="Last Name" autoComplete="family-name"/>
                  <StyledError name="lastName" />
                </Box>

                <Box>
                  <FormLabel htmlFor="email" color="black">Email</FormLabel>
                  <Field component={FormInput} type="textarea" name="email" placeholder="Email"/>
                  <StyledError name="email" />
                </Box>

                <Box>
                  <FormLabel htmlFor="message" color="black">Message</FormLabel>
                  <Field component={FormInputMulti} type="textarea" name="message" placeholder="Your Question"/>
                  <StyledError name="message" />
                </Box>

                <Flex justifyContent="flex-end" align="flex-end">
                  <Button {...ctaButtonProps} mx={2} minWidth={[0, 0, "150px"]} isLoading={bag.isSubmitting} type="submit" >Send</Button>
                </Flex>
              </Form>)
          }}
        </Formik>
        {error ? <Text>{error}</Text> : null}
      </Box >
    )
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>Got a Question?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RequestForm />
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}

export default HelpRequest