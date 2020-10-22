import { useState, useContext, RefObject } from 'react';
import * as React from 'react';
import { UserContext } from '../user-context'
import { useHasMounted } from '../utilities/useHasMounted'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { logout } from '../login-service'
import { Button, Box, Flex, Heading, Image, Text, useDisclosure, Grid } from '@chakra-ui/core'
import { currencyContext, CurrencyType } from '../currencyContext'
import dynamic from 'next/dynamic'
import { ResponsivePicture } from './responsivePicture'

type DrawerProps = {
  children: JSX.Element[],
  isOpen: boolean,
  placement: "right",
  onOpen: () => void,
  onClose: () => void,
  finalFocusRef: RefObject<HTMLButtonElement>
}

const Select = dynamic(import('react-select'), { loading: () => <div></div>, ssr: false })
const MobileMenuDrawer = dynamic<DrawerProps>(import('../components/mobileMenuDrawer').then(mod => mod.default) as any, { ssr: false })

type MenuLinkProps = {
  text: string,
  isSelected: boolean,
  url: string,
  onClick?: () => void
}

const MenuLink = ({ text, isSelected, url, onClick }: MenuLinkProps) => {
  return (
    <Link href={url} >
      <Button
        variant="unstyled"
        transition="all 0.0s cubic-bezier(.08,.52,.52,1)"
        color="white"
        borderRadius="0px"
        mx={[1, 1, 2, 2]}
        py={[3, 3, 0, 0]}
        fontSize="16px"
        height="2rem"
        bg="#transparent"
        fontWeight="normal"
        _after={isSelected ? {
          content: `""`,
          position: "absolute",
          bottom: "2px",
          left: "0px",
          width: "calc(100%)",
          borderBottom: "2px solid white"
        } : {
            transition: "all 30ms cubic-bezier(.08,.52,.52,1)",
            content: `""`,
            position: "absolute",
            bottom: "2px",
            left: "0px",
            width: "calc(100%)",
            opacity: 0,
            borderBottom: "2px solid white"
          }}
        _hover={{
          _after: {
            content: `""`,
            position: "absolute",
            bottom: "2px",
            left: "0px",
            width: "calc(100%)",
            opacity: 1,
            borderBottom: "2px solid white"
          },
        }}
        _active={{
          _after: {
            content: `""`,
            position: "absolute",
            bottom: "2px",
            left: "0px",
            width: "calc(100%)",
            opacity: 1,
            borderBottom: "2px solid white"
          },
        }}
        _focus={{
          _after: {
            content: `""`,
            position: "absolute",
            bottom: "2px",
            left: "0px",
            width: "calc(100%)",
            opacity: 1,
            borderBottom: "2px solid white"
          },
        }}>
        {text}
      </Button>
    </Link >)
}

const DrawerLink = ({ text, isSelected, url, onClick }: MenuLinkProps) => {
  return (
    <Link href={url} >
      <Button
        variant="unstyled"
        transition="all 0.0s cubic-bezier(.08,.52,.52,1)"
        color="white"
        borderRadius="0px"
        mx={[1, 1, 2, 2]}
        py={4}
        fontSize="18px"
        fontWeight="500"
        bg="#transparent"
        textAlign="right"
        _after={isSelected ? {
          content: `""`,
          position: "absolute",
          bottom: "-4px",
          left: "0px",
          width: "calc(100%)",
          borderBottom: "2px solid white"
        } : {
            transition: "all 30ms cubic-bezier(.08,.52,.52,1)",
            content: `""`,
            position: "absolute",
            bottom: "0",
            left: "-4px",
            width: "calc(100%)",
            opacity: 0,
            borderBottom: "2px solid white"
          }}
      >
        {text}
      </Button>
    </Link >)
}

type CurrencyOption = { value: string, label: string }
const options = [
  { value: "USD", label: "$ USD" },
  { value: "GBP", label: "£ GBP" },
  { value: "EUR", label: "€ EUR" },
  { value: "JPY", label: "¥ JPY" },
  { value: "AUD", label: "$ AUD" },
  { value: "CAD", label: "$ CAD" },
  { value: "CNY", label: "¥ CNY" },
]

const customStyles: any = {
  option: (provided: any, state: any) => ({
    ...provided,
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    border: "2px solid white",
    backgroundColor: "transparent",
    ":hover": { borderColor: "white", cursor: "pointer" },
    div: {
      ":first-of-type": {overflow: "initial"}
    }
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return { ...provided, opacity, transition, color: "white" };
  },
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: "white",
    "& svg": { color: "white" }
  }),
  indicatorSeparator: () => { }
}

const NipAppBar = () => {
  const router = useRouter()
  const route = router.pathname
  const isSelected = (path: string) => {
    if (route.startsWith("/tour")) {
      return path == "tours"
    }

    if (route.startsWith("/blog")) {
      return path == "blog";
    }

    if (route == "/about") {
      return path == "route"
    }

    if (route == "/pricing") {
      return path == "pricing"
    }

    return path == "home"
  }
  const hasMounted = useHasMounted()

  React.useEffect(() => {
    const handle = (url: String) => { onClose() }
    router.events.on("routeChangeComplete", handle)

    return (() => {
      router.events.off("routeChangeComplete", handle)
    })
  })

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement>(null)

  const session = useContext(UserContext)

  const handleLogout = () => {
    logout().then(() => router.push('/account/login'))
  }

  const [currency, setCurrency] = React.useContext(currencyContext)
  const handleCurrencySelection = React.useCallback((e: any) => {
    let currency = e as CurrencyOption
    if (currency != undefined) {
      setCurrency(currency.value as CurrencyType)
    }
  }, [])

  const AppbarMemo = React.memo(({ route, handleSelection }: { route: string, handleSelection: (e: any) => void }) =>
    <Box
      width="100%"
      position="sticky"
      top="0"
      bg="blue.800"
      zIndex="10">
      <Grid
        templateColumns={{ base: "1fr 1fr", md: "1fr 2fr 1fr" }}
        maxWidth="1200px"
        as="nav"
        zIndex={5}
        h="5rem"
        px="1rem" w="100%"
        alignItems="center"
        justifyContent="center"
        mx="auto"
      >
        <ResponsivePicture
          baseUrl={"/assets/logo2_alt_small.png"}
          webp
          customNode={
            <Image loading="lazy" src="/assets/logo2_alt_small.png" maxH="42px" width="auto" left={"14px"} top={"10px"} alt="Nippondering" />
          } />

        <Flex display={["none", "none", "block"]} direction="row" justifySelf="center" justifyContent="center" alignItems="center">
          <MenuLink isSelected={isSelected("home")} text="Home" url="/" />
          <MenuLink isSelected={isSelected("tours")} text="Tours" url="/tours" />
          <MenuLink isSelected={isSelected("pricing")} text="Pricing" url="/pricing" />
          <MenuLink isSelected={isSelected("blog")} text="Blog" url="/blog" />
          <MenuLink isSelected={isSelected("about")} text="About" url="/about" />
        </Flex>

        <Box display="flex" justifySelf="flex-end" top="0.75rem" right="0.75rem">
          <Box mr={2} width="96px" alignSelf="center">
            <label style={{ display: "none" }} htmlFor="currencySelect">Currency Select</label>
            <Select
              id="currencySelect"
              name="Currency Select"
              options={options}
              onChange={handleSelection}
              defaultValue={options[0]}
              styles={customStyles}
              tabSelectsValue={false}
              isSearchable={false}
              value={options.find(cur => cur.value == currency)}
            />
          </Box>
          {hasMounted && session.user != null &&
            <Box display={["none", "none", "block"]}>
              {session.user != "" ?
                <Flex direction="row-reverse" alignItems="center">
                  <Button color="white" maxHeight="3rem" border="2px" variant="unstyled" onClick={
                    (e) => {
                      e.preventDefault();
                      handleLogout()
                    }
                  }><Text mx="2rem" color="white">Logout</Text></Button>
                  <Heading as="h4" pr="1rem" fontWeight="light" size="sm" color="white">Logged in as {session.user}</Heading>
                </Flex>
                :
                <Flex direction="row-reverse" alignItems="center">
                  <Link href="/account/login">
                    <Button color="white" maxHeight="3rem" border="0px" variant="unstyled">
                      <Text mx="1rem" color="white">Login</Text>
                    </Button>
                  </Link>
                </Flex>
              }
            </Box>}
          <MobileMenuDrawer
            isOpen={isOpen}
            placement="right"
            onOpen={onOpen}
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerLink onClick={onClose} isSelected={isSelected("home")} text="Home" url="/" />
            <DrawerLink onClick={onClose} isSelected={isSelected("tours")} text="Tours" url="/tours" />
            <DrawerLink onClick={onClose} isSelected={isSelected("pricing")} text="Pricing" url="/pricing" />
            <DrawerLink onClick={onClose} isSelected={isSelected("blog")} text="Blog" url="/blog" />
            <DrawerLink onClick={onClose} isSelected={isSelected("about")} text="About" url="/about" />
            {hasMounted && session.user != null && session.user != "" ?
              <Flex direction="row-reverse" alignItems="center" mt={32}>
                <Button color="white" maxHeight="3rem" border="2px" variant="unstyled" onClick={
                  (e) => {
                    e.preventDefault();
                    handleLogout()
                  }
                }><Text mx="2rem" color="white">Logout</Text></Button>
                <Heading as="h4" pr="1rem" fontWeight="light" size="sm" color="white">Logged in as {session.user}</Heading>
              </Flex>

              :
              <Flex direction="row-reverse" alignItems="center" pt={8}>
                <Link href="/account/login">
                  <Button color="white" maxHeight="3rem" border="0px" variant="unstyled">
                    <Text mx={1} color="white">Login</Text>
                  </Button>
                </Link>
              </Flex>
            }
          </MobileMenuDrawer>
        </Box>

      </Grid>
    </Box>
  )
  return (<AppbarMemo route={route} handleSelection={handleCurrencySelection} />)
}

export default NipAppBar