import { ReactElement } from 'react'

import { useStarWarsData } from '@/hooks/useStarWarsData'
import { isArrayEmpty } from '@/utils/array'

import { CharacterCard } from './CharacterCard'
import Container from './Container'

type Props = {
  currentPageIndex: number
}

export function CharactersList({ currentPageIndex }: Props): ReactElement {
  // Hooks
  const { charactersList } = useStarWarsData(currentPageIndex)

  // Components
  return (
    <Container>
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        {isArrayEmpty(charactersList)
          ? 'No characters found'
          : charactersList.map(({ name, birth_year, height, created }) => (
              <CharacterCard
                key={name}
                name={name}
                birthYear={birth_year}
                height={height}
                createdAt={created}
              />
            ))}
      </div>
    </Container>
  )
}
