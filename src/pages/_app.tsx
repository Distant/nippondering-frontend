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
import LazyHydrate from "react-lazy-hydration";
import {url} from "../utilities/fetchUtilities";
import * as React from "react";

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
        <link rel="preload" as="image" type="image/webp" href="/assets/kobe_sm.webp"></link>
        <link rel="preload" as="image" type="image/webp" href="/assets/logo2_alt_small.webp"></link>
        <link rel="preload" as="image" type="image/webp" href="/assets/logo2_alt_md.webp"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700&display=swap" rel="stylesheet"></link>
        <link rel="shortcut icon" type="image/png" href="/fav-io/favicon.png"></link>
        <link rel="apple-touch-icon" sizes="180x180" href="/fav-io/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/fav-io/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/fav-io/favicon-16x16.png"></link>
        <meta property="og:title" content="Nippondering Tours" />
        <meta property="og:description" content="Experience Japan like a local with a private tour in the Kansai region. Choose from a selection of tours run by experienced and eager tour guides. Kyoto, Osaka, Nara and more!" />
        <meta property="og:image" content={url("meta_logo.png")} />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_URL} />
        <meta property="twitter:card" content={"summary"} />
        <meta property="twitter:site" content="@nippondering" />
        <meta property="twitter:title" content="Nippondering Tours" />
        <meta property="twitter:description" content="Experience Japan like a local with a private tour in the Kansai region. Choose from a selection of tours run by experienced and eager tour guides. Kyoto, Osaka, Nara and more!" />
        <meta property="twitter:image" content={url("meta_logo.png")} />
        <meta name="google-site-verification" content={process.env.GOOGLE_SITE_VERIFICATION} />

        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_GTAG_ID}`}></script>
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.GOOGLE_GTAG_ID}');` }}>
        </script>
      </Head>
      <ChakraProvider resetCSS theme={customTheme}>
        <currencyContext.Provider value={[currency, c => { c && setCurrency(c) }]}>
          <UserContext.Provider value={{ user: user, login: login, logout: logout }}>
            <Flex minHeight="calc(100vh)" flexDirection="column">
              <NipAppBar />
              <Tagline minimal={router.pathname !== "/"} />
              <Component {...pageProps} />
              <Box flexGrow={1} backgroundColor="#f5f5f8" />
              <Footer />
            </Flex>
          </UserContext.Provider>
        </currencyContext.Provider>
        <LazyHydrate on="mouseenter"><HelpButton open={open} setOpen={setOpen} /></LazyHydrate>
      </ChakraProvider>
    </>
  )
}