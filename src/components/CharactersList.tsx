import { ReactElement, useCallback, useMemo } from 'react'

import { useCharactersList } from '@/hooks/useCharactersList'
import { isArrayEmpty } from '@/utils/array'

import { CharacterCard } from './CharacterCard'
import { CharactersListSkeleton } from './CharactersListSkeleton'
import { ErrorMessage } from './ErrorMessage'
import { FadeInComponent } from './FadeInComponent'

type Props = {
  searchTerm: string
  currentPageIndex: number
}

export function CharactersList({
  searchTerm,
  currentPageIndex,
}: Props): ReactElement {
  // Hooks
  const { charactersList, charactersDataError, isCharactersDataLoading } =
    useCharactersList(searchTerm, currentPageIndex)

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
  if (isCharactersDataLoading) return <CharactersListSkeleton />

  if (charactersDataError) return <ErrorMessage />

  return (
    <div className="w-full">
      <FadeInComponent>
        {isCharactersListEmpty ? (
          <div className="text-center text-xl tracking-wider text-white">
            No characters found
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 sm:gap-12 lg:grid-cols-2 2xl:grid-cols-3">
            {charactersList.map(
              ({ name, birth_year, height, created, url }) => (
                <CharacterCard
                  key={extractIdFromUrl(url)}
                  id={extractIdFromUrl(url)}
                  name={name}
                  birthYear={birth_year}
                  height={height}
                  createdAt={created}
                />
              )
            )}
          </div>
        )}
      </FadeInComponent>
    </div>
  )
}
