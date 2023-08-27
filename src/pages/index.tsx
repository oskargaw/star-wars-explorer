import React from 'react'
import { Orbitron } from 'next/font/google'

import { useStarWarsData } from '@/hooks/useStarWarsData'
import { isArrayEmpty } from '@/utils/array'

const orbitron = Orbitron({ subsets: ['latin'] })

export default function Home() {
  // Hooks
  const { allCharacters, isAllCharactersLoading } = useStarWarsData()

  if (isAllCharactersLoading) return <div>Loading...</div>

  return (
    <main
      className={`flex flex-col items-center justify-between ${orbitron.className}`}
    >
      <div>
        {isArrayEmpty(allCharacters)
          ? 'No characters found'
          : allCharacters.map(({ name, birth_year, height, created }) => (
              <React.Fragment key={name}>
                <div>Name: {name}</div>
                <div>Birth year: {birth_year}</div>
                <div>Height: {height}</div>
                <div>Created at: {created}</div>
              </React.Fragment>
            ))}
      </div>
    </main>
  )
}
