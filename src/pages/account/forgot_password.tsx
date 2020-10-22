import React, { useState } from 'react';
import { sendResetRequest } from '../../login-service'
import { Input, Button, FormControl, FormLabel, Box, Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Text } from '@chakra-ui/core';
import { FaChevronRight } from 'react-icons/fa';
import { shadows, primaryButtonOutline, primaryButtonSolid } from '../../components/commonProps';
import RequestStatus from '../../types/requestStatus';

const ForgotPassword = () => {
  let [email, updateEmail] = useState("")
  let [status, setStatus] = useState<RequestStatus | null>(null)

  let [sending, setSending] = useState(false)

  const handleRequest = (e: string) => {
    setSending(true)
    sendResetRequest(email,
      () => { setSending(false); setStatus({ success: true, error: "" }) },
      error => () => { setStatus({ success: false, error: "Error sending request: " + error.toString() }) })
  }

  return (
    <Box className="background-pattern">
      <Box className="background-pattern-gradient" />
      <Box maxW="950px" mx="auto" mb="50px" pt={{ base: 0, md: 4 }}>
        <Breadcrumb display={{ base: "none", md: "block" }} fontSize="0.8rem" p={2} color="#555" separator={< FaChevronRight color="#555" size="0.6rem" />}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/account/login">Login</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Box backgroundColor="white" {...shadows[3]} borderRadius="4px" overflow="hidden" p={4}>
          <form onSubmit={(e) => {
            e.preventDefault()
            handleRequest(email)
          }}>
            <Heading as="h1" textStyle="sectionTitle">Forgot Password</Heading>
            <Box maxW="600px" mx="auto">
              {status && (!status.success ? <Text textStyle="cardBody" color="red.500" fontWeight="bold">{status.error}</Text>
                : <Text textStyle="cardBody" color="green.500" fontWeight="bold">Password successfully changed.</Text>)
              }
              <FormControl mb="0.5rem">
                <FormLabel textStyle="cardTitle" htmlFor="email" mb={0} fontWeight="normal">Enter your email address:</FormLabel>
                <Input id="email" value={email} onChange={(t: React.ChangeEvent<HTMLInputElement>) => updateEmail(t.target.value)} />
              </FormControl>
              <Flex direction={{ base: "column", md: "row" }} justifyContent={{ md: "flex-end" }} mx="auto" >
                <Button {...primaryButtonSolid} type="submit" isLoading={sending} my={4} float="right">Send Request</Button>
              </Flex>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  )
}


export default ForgotPassword


