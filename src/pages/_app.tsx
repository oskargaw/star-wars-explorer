import type { AppProps } from 'next/app'
import Head from 'next/head'

import '@/styles/globals.css'

import { ReactElement } from 'react'

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>Star Wars Explorer</title>
        <meta
          name="description"
          content="Star Wars explorer with info about all characters"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-24">
        <Component {...pageProps} />
      </div>
    </>
  )
}
