import { ReactElement, useMemo } from 'react'

import { useStarWarsData } from '@/hooks/useStarWarsData'
import { isArrayEmpty } from '@/utils/array'

import { CharacterCard } from './CharacterCard'
import Container from './Container'

type Props = {
  searchTerm: string
  currentPageIndex: number
}

export function CharactersList({
  searchTerm,
  currentPageIndex,
}: Props): ReactElement {
  // Hooks
  const { charactersList, isCharactersDataLoading } = useStarWarsData(
    searchTerm,
    currentPageIndex
  )

  // Variables
  const isCharactersListEmpty = useMemo(
    () => !isCharactersDataLoading && isArrayEmpty(charactersList),
    [charactersList, isCharactersDataLoading]
  )

  // Components
  return (
    <Container>
      {isCharactersListEmpty ? (
        <div className="text-center text-xl tracking-wider text-white">
          No characters found
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
          {charactersList.map(({ name, birth_year, height, created }) => (
            <CharacterCard
              key={name}
              name={name}
              birthYear={birth_year}
              height={height}
              createdAt={created}
            />
          ))}
        </div>
      )}
    </Container>
  )
}
