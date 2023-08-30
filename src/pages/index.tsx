import { ReactElement, useCallback, useState } from 'react'
import { useRouter } from 'next/router'

import { useCharactersList } from '@/hooks/useCharactersList'

import { CharactersList } from '@/components/CharactersList'
import { CharactersListSkeleton } from '@/components/CharactersListSkeleton'
import { FadeInComponent } from '@/components/FadeInComponent'
import { Pagination } from '@/components/Pagination'
import { Search } from '@/components/Search'

export default function Home(): ReactElement {
  // State
  const [searchTerm, setSearchTerm] = useState('')

  // Hooks
  const router = useRouter()

  // Variables
  const currentPageIndex = parseInt(router.query.page?.toString() || '1')

  // Hooks
  const { isCharactersDataLoading } = useCharactersList(
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
    <FadeInComponent>
      <div className="flex flex-col items-center justify-between">
        <h2 className="font-star-jedi-hollow z-30 pb-20 text-7xl text-yellow-300">
          Star Wars Explorer
        </h2>

        <Search onChangeSearchTerm={handleChangeSearchTerm} />

        {isCharactersDataLoading ? (
          <CharactersListSkeleton />
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

        <Pagination
          searchTerm={searchTerm}
          currentPageIndex={currentPageIndex}
        />
      </div>
    </FadeInComponent>
  )
}
