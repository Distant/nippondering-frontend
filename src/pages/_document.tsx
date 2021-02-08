import Document, { Html, Head, Main, NextScript } from 'next/document'
import * as React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <script src="/polyfill.min.js"></script>
          <Main />
          <NextScript />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({google_ad_client: "${process.env.GOOGLE_AD_CLIENT}",enable_page_level_ads: true, overlays: {bottom: true}});` }}>
          </script>
        </body>
      </Html>
    )
  }
}