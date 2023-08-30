import { ReactElement } from 'react'
import { useRouter } from 'next/router'

import { useCharacterDetails } from '@/hooks/useCharacterDetails'

import { Skeleton } from '@/components/ui/Skeleton'
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
    <div className="flex flex-col items-center">
      {isCharacterLoading ? (
        <Skeleton className="aspect-square w-full rounded-lg xl:w-1/2" />
      ) : (
        <CharacterDetailsCard characterId={characterId} />
      )}
    </div>
  )
}
