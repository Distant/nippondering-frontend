import { useState, useContext } from 'react';
import * as React from 'react';
import { useRouter } from 'next/router'
import { UserContext } from '../../user-context'
import Link from 'next/link'
import { attemptLogin } from '../../login-service'
import { Button, Input, FormControl, FormLabel, Box, Heading, Flex, Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/core"
import RequestStatus from '../../types/requestStatus';
import { FaChevronRight } from 'react-icons/fa';
import { primaryButtonSolid, shadows } from '../../components/commonProps';

const Login = () => {
  const router = useRouter()
  let [email, updateEmail] = useState("")
  let [password, updatePassword] = useState("")
  let session = useContext(UserContext)

  let [status, setStatus] = useState<RequestStatus | null>(null)
  let [sending, setSending] = useState(false)

  const handleLogin = (e: string, p: string) => {
    setSending(true)
    attemptLogin({ email: e, password: p, persist: true },
      name => { session.login(name); setSending(false); setStatus({ success: true, error: "" }) },
      error => { setSending(false); setStatus({ success: false, error: error.toString() }) })
  }

  return (
    <Box className="background-pattern" minHeight="75vh" >
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
          {session.user != null && session.user != "" ?
            <Box>
              <Text> Logged in as {session.user} </Text>
            </Box>
            :

            <form onSubmit={(e) => {
              e.preventDefault()
              handleLogin(email, password)
            }}>
              <Heading as="h1" textStyle="sectionTitle">Log In</Heading>
              <Box maxW="600px" mx="auto">
                {status && (<Text textStyle="cardBody" color="#ff0000" textDecor="bold" mb="1rem">{status.error}</Text>)}
                <FormControl mb={4}>
                  <FormLabel textStyle="cardTitle" htmlFor="email" mb={0} fontWeight="normal">Email</FormLabel>
                  <Input id="email" value={email} onChange={(t: React.ChangeEvent<HTMLInputElement>) => updateEmail(t.target.value)} autoComplete="email" />
                </FormControl>
                <FormControl mb={4}>
                  <FormLabel textStyle="cardTitle" htmlFor="password" mb={0} fontWeight="normal">Password</FormLabel>
                  <Input id="password" value={password} type="password" onChange={(t) => updatePassword(t.target.value)} autoComplete="current-password" />
                </FormControl>
                <Flex direction={{ base: "column", md: "row" }} justifyContent={{ md: "flex-end" }} mx="auto" >
                  <Link href="/account/forgot_password" passHref>
                    <Box as="a" border="none" alignSelf="center" color="gray.600" mx={2} fontWeight="normal">Forgot Password</Box>
                  </Link>
                  <Button {...primaryButtonSolid} type="submit" isLoading={sending} my={4}>{'Login'}</Button>
                </Flex>
              </Box>
            </form>
          }
        </Box>
      </Box>
    </Box>
  )
}


export default Login