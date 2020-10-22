import { useState, useEffect } from 'react';
import * as React from 'react';
import { useRouter } from 'next/router'
import Container from '../../components/container'
import Header from '../../components/header'
import { resetPassword } from '../../login-service'
import { Input, Button, Text, FormControl, FormLabel, FormHelperText, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Heading } from '@chakra-ui/core';
import RequestStatus from '../../types/requestStatus';
import { FaChevronRight } from 'react-icons/fa';
import { shadows, primaryButtonSolid } from '../../components/commonProps';

const ResetPassword = () => {
  const router = useRouter()
  const { userId, code } = router.query

  let [password, updatePassword] = useState("")
  let [status, setStatus] = useState<RequestStatus | null>(null)
  let [sending, setSending] = useState(false)

  useEffect(() => {
    if (userId && code) setStatus({ success: null, error: "" })
    else setStatus({ success: null, error: "The link is invalid or has expired." })
  }, [userId, code])

  const handleReset = () => {
    setSending(true)
    if (userId && code) {
      resetPassword({ userId: userId.toString(), code: code.toString(), password: password }
        , () => { setSending(false); router.push('/account/login'); setStatus({ success: true, error: "" }) }
        , error => { setSending(false); setStatus({ success: false, error: error.toString() })})
    }
    else {
      setStatus({ success: null, error: "The link is invalid or has expired." })
    }
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
            handleReset()
          }}>
            <Heading as="h1" textStyle="sectionTitle">Change Password</Heading>
            <Box maxW="600px" mx="auto">
              {//status && (<Text textStyle="cardBody" color="#ff0000" textDecor="bold" mb="1rem">{status.error}</Text>)
              }
              <FormControl mb="0.5rem">
                <FormLabel textStyle="cardTitle" htmlFor="email" mb={0} fontWeight="normal">Enter new password</FormLabel>
                <Input id="password" value={password} onChange={(t: React.ChangeEvent<HTMLInputElement>) => updatePassword(t.target.value)} />
              </FormControl>
              <Flex direction={{ base: "column", md: "row" }} justifyContent={{ md: "flex-end" }} mx="auto" >
                <Button {...primaryButtonSolid} type="submit" isLoading={sending} my={4} float="right">Set Password</Button>
              </Flex>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  )
}

export default ResetPassword