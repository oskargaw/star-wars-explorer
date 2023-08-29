import { ReactElement, useCallback, useState } from 'react'
import { Orbitron } from 'next/font/google'
import { useRouter } from 'next/router'

import { useStarWarsData } from '@/hooks/useStarWarsData'

import { CharactersList } from '@/components/CharactersList'
import { Pagination } from '@/components/Pagination'
import { Search } from '@/components/Search'

const orbitron = Orbitron({ subsets: ['latin'] })

export default function Home(): ReactElement {
  // State
  const [searchTerm, setSearchTerm] = useState('')

  // Hooks
  const router = useRouter()

  // Variables
  const currentPageIndex = parseInt(router.query.page?.toString() || '1')

  // Hooks
  const { isCharactersDataLoading } = useStarWarsData(
    searchTerm,
    currentPageIndex
  )

  // Handlers
  const handleChangeSearchTerm = useCallback(
    (newSearchTerm: string) => {
      if (newSearchTerm !== searchTerm) {
        router.push({ query: { ...router.query, page: 1 } })

        setSearchTerm(newSearchTerm)
      }
    },
    [router, searchTerm]
  )

  // Components
  return (
    <main
      className={`flex flex-col items-center justify-between ${orbitron.className}`}
    >
      <h2 className="font-star-jedi-hollow z-30 pb-20 text-7xl text-yellow-300">
        Star Wars Explorer
      </h2>

      <Search onChangeSearchTerm={handleChangeSearchTerm} />

      {isCharactersDataLoading ? (
        <div>Loading...</div>
      ) : (
        <CharactersList
          searchTerm={searchTerm}
          currentPageIndex={currentPageIndex}
        />
      )}

      {/* Prefetch data for the next page so it's available immediately after opening it */}
      <div className="hidden">
        <CharactersList
          searchTerm={searchTerm}
          currentPageIndex={currentPageIndex + 1}
        />
      </div>

      <Pagination searchTerm={searchTerm} currentPageIndex={currentPageIndex} />
    </main>
  )
}
