import { ReactElement } from 'react'
import { useRouter } from 'next/router'

import { useCharacterDetails } from '@/hooks/useCharacterDetails'

import { CharacterDetailsCard } from '@/components/CharacterDetailsCard'

export default function CharacterDetailsPage(): ReactElement {
  // Hooks
  const router = useRouter()

  // Variables
  const characterId = router.query.characterId?.toString() || ''

  // Hooks
  const { isCharacterLoading } = useCharacterDetails(characterId)

  // Components
  return (
    <div className={'flex flex-col items-center justify-between'}>
      {isCharacterLoading ? (
        <div className="z-30 text-xl text-white">Loading...</div>
      ) : (
        <CharacterDetailsCard characterId={characterId} />
      )}
    </div>
  )
}
