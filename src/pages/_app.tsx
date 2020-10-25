import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { useState, useEffect } from 'react';
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider, Box, Flex } from '@chakra-ui/core'
import Footer from '../components/footer'
import NipAppBar from '../components/appBar'
import { UserContext } from '../user-context'
import { CurrencyType, currencyContext } from '../currencyContext'
import { getSession } from '../login-service'
import HelpButton from '../components/helpButton'
import { customTheme } from '../theme'
import { Tagline } from '../components/tagline'
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [user, setUser] = useState<string | null>(null)
  const login = (name: string) => {
    setUser(name)
  }
  const logout = () => {
    setUser("")
  }

  useEffect(() => {
    getSession(s => login(s), _ => logout())
  }, [router.pathname])

  const [currency, setCurrency] = useState<CurrencyType>('USD')
  const [open, setOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Nippondering Tours - Your Friends in Kansai</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="Experience Japan like a local with a private tour in the Kansai region. Choose from a selection of tours run by experienced and eager tour guides. Kyoto, Osaka, Nara and more!" />
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" type="text/css"/>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,500;1,500&display=swap" rel="stylesheet" type="text/css" />
        <link rel="shortcut icon" type="image/png" href="/fav-io/favicon.png"></link>
        <link rel="apple-touch-icon" sizes="180x180" href="/fav-io/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/fav-io/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/fav-io/favicon-16x16.png"></link>
      </Head>
      <Head>
        <meta property="og:title" content="Nippondering Tours" />
        <meta property="og:description" content="Experience Japan like a local with a private tour in the Kansai region. Choose from a selection of tours run by experienced and eager tour guides. Kyoto, Osaka, Nara and more!" />
        <meta property="og:image" content="https://nippondering.com/meta_logo.png" />
        <meta property="og:url" content="https://nippondering.com" />
        <meta property="twitter:card" content={"summary"} />
        <meta property="twitter:site" content="@nippondering" />
        <meta property="twitter:title" content="Nippondering Tours" />
        <meta property="twitter:description" content="Experience Japan like a local with a private tour in the Kansai region. Choose from a selection of tours run by experienced and eager tour guides. Kyoto, Osaka, Nara and more!" />
        <meta property="twitter:image" content="https://nippondering.com/meta_logo.png" />
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet" type="text/css"/>
      </Head>
      <ChakraProvider resetCSS theme={customTheme}>
        <currencyContext.Provider value={[currency, c => { c && setCurrency(c) }]}>
          <UserContext.Provider value={{ user: user, login: login, logout: logout }}>
            <Flex minHeight="calc(100vh)" flexDirection="column">
              <NipAppBar />
              <Tagline minimal={router.pathname !== "/"}/>
              <Component {...pageProps} />
              <Box flexGrow={1} backgroundColor="#f5f5f8" />
              <Footer />
            </Flex>
          </UserContext.Provider>
        </currencyContext.Provider>
        <HelpButton open={open} setOpen={setOpen} />
      </ChakraProvider>
    </>
  )
}