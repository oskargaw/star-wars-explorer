import React, { ReactElement } from 'react'

import { useStarWarsData } from '@/hooks/useStarWarsData'
import { isArrayEmpty } from '@/utils/array'

type Props = {
  pageIndex: number
}

export function CharactersList({ pageIndex }: Props): ReactElement {
  // Hooks
  const { charactersList } = useStarWarsData(pageIndex)

  return (
    <div>
      {isArrayEmpty(charactersList)
        ? 'No characters found'
        : charactersList.map(({ name, birth_year, height, created }) => (
            <React.Fragment key={name}>
              <div>Name: {name}</div>
              <div>Birth year: {birth_year}</div>
              <div>Height: {height}</div>
              <div>Created at: {created}</div>
            </React.Fragment>
          ))}
    </div>
  )
}
