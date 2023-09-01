import { ReactElement, useCallback, useState } from 'react'
import { useRouter } from 'next/router'

import { useCharactersList } from '@/hooks/useCharactersList'

import { CharactersList } from '@/components/CharactersList'
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
  const { charactersDataError } = useCharactersList(
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
        <h2 className="z-30 pb-7 text-center font-star-jedi-hollow text-5xl text-yellow-300 sm:pb-12 sm:text-7xl lg:pb-20">
          Star Wars Explorer
        </h2>

        {charactersDataError ? null : (
          <Search onChangeSearchTerm={handleChangeSearchTerm} />
        )}

        <CharactersList
          searchTerm={searchTerm}
          currentPageIndex={currentPageIndex}
        />

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
