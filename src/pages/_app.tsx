import { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import '@/styles/globals.css'

import { Particles } from '@/components/Particles'

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

      <Particles />

      <div className="px-20 py-16">
        <Component {...pageProps} />
      </div>
    </>
  )
}
