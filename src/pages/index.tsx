import { ReactElement } from 'react'
import { Orbitron } from 'next/font/google'
import { useRouter } from 'next/router'

import { useStarWarsData } from '@/hooks/useStarWarsData'

import { CharactersList } from '@/components/CharactersList'

const orbitron = Orbitron({ subsets: ['latin'] })

export default function Home(): ReactElement {
  // Hooks
  const router = useRouter()

  // Constants
  const pageIndex = parseInt(router.query.page?.toString() || '1')

  // Hooks
  const { charactersData, isCharactersDataLoading } = useStarWarsData(pageIndex)

  // Handlers
  function handlePreviousButtonClick() {
    router.push({ query: { ...router.query, page: pageIndex - 1 } })
  }

  function handleNextButtonClick() {
    router.push({ query: { ...router.query, page: pageIndex + 1 } })
  }

  if (isCharactersDataLoading) return <div>Loading...</div>

  return (
    <main
      className={`flex flex-col items-center justify-between ${orbitron.className}`}
    >
      <CharactersList pageIndex={pageIndex} />

      <div className="hidden">
        <CharactersList pageIndex={pageIndex + 1} />
      </div>

      {charactersData?.previous && (
        <button onClick={handlePreviousButtonClick}>Prev</button>
      )}

      {charactersData?.next && (
        <button onClick={handleNextButtonClick}>Next</button>
      )}
    </main>
  )
}
