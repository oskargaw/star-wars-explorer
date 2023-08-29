import { ReactElement } from 'react'
import { Orbitron } from 'next/font/google'
import { useRouter } from 'next/router'

import { useStarWarsData } from '@/hooks/useStarWarsData'

import { CharactersList } from '@/components/CharactersList'
import { Pagination } from '@/components/Pagination'

const orbitron = Orbitron({ subsets: ['latin'] })

export default function Home(): ReactElement {
  // Hooks
  const router = useRouter()

  // Constants
  const currentPageIndex = parseInt(router.query.page?.toString() || '1')

  // Hooks
  const { isCharactersDataLoading } = useStarWarsData(currentPageIndex)

  // Components
  if (isCharactersDataLoading) return <div>Loading...</div>

  return (
    <main
      className={`flex flex-col items-center justify-between ${orbitron.className}`}
    >
      <h2 className="font-star-jedi-hollow z-30 pb-20 text-7xl text-yellow-300">
        Star Wars Explorer
      </h2>

      <CharactersList currentPageIndex={currentPageIndex} />

      {/* Prefetch data for the next page so it's available immediately after opening it */}
      <div className="hidden">
        <CharactersList currentPageIndex={currentPageIndex + 1} />
      </div>

      <Pagination currentPageIndex={currentPageIndex} />
    </main>
  )
}
