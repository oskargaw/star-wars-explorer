import { ReactElement, useCallback, useMemo } from 'react'

import { useCharactersList } from '@/hooks/useCharactersList'
import { isArrayEmpty } from '@/utils/array'

import { CharacterCard } from './CharacterCard'

type Props = {
  searchTerm: string
  currentPageIndex: number
}

export function CharactersList({
  searchTerm,
  currentPageIndex,
}: Props): ReactElement {
  // Hooks
  const { charactersList, isCharactersDataLoading } = useCharactersList(
    searchTerm,
    currentPageIndex
  )

  // Variables
  const isCharactersListEmpty = useMemo(
    () => !isCharactersDataLoading && isArrayEmpty(charactersList),
    [charactersList, isCharactersDataLoading]
  )

  // Helpers
  const extractIdFromUrl = useCallback((url: string) => {
    const urlParts = url.split('/')
    const id = urlParts[urlParts.length - 2]

    return id
  }, [])

  // Components
  return (
    <div className="w-full">
      {isCharactersListEmpty ? (
        <div className="text-center text-xl tracking-wider text-white">
          No characters found
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
          {charactersList.map(({ name, birth_year, height, created, url }) => (
            <CharacterCard
              key={extractIdFromUrl(url)}
              id={extractIdFromUrl(url)}
              name={name}
              birthYear={birth_year}
              height={height}
              createdAt={created}
            />
          ))}
        </div>
      )}
    </div>
  )
}
