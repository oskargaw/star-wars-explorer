import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${orbitron.className}`}
    >
      Star Wars Explorer
    </main>
  )
}
