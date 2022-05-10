import React from 'react'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import '../styles/mvp.css'
import '../styles/main.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>mt2m10</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DefaultSeo
        defaultTitle="mt2m10"
        canonical="https://mt2m10.github.io"
        description="日々の出来事やプログラミング関連について書きます。"
        twitter={{
          handle: "mt2m10",
          site: "mt2m10",
          cardType: 'summary',
        }}
        openGraph={{
          type: "website",
          title: "mt2m10",
          description: "日々の出来事やプログラミング関連について書きます。",
          site_name: "mt2m10",
          url: "https://mt2m10.github.io",
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
