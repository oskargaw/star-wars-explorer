import { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import { Orbitron } from 'next/font/google'
import Head from 'next/head'

import '@/styles/globals.css'

import { Container } from '@/components/Container'
import { Particles } from '@/components/Particles'

const orbitron = Orbitron({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <div className={`${orbitron.className}`}>
      <Head>
        <title>Star Wars Explorer</title>
        <meta
          name="description"
          content="Star Wars explorer with info about all characters"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Particles />

      <Container>
        <Component {...pageProps} />
      </Container>
    </div>
  )
}
