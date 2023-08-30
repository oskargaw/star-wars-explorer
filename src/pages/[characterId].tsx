import { ReactElement } from 'react'
import { useRouter } from 'next/router'

import { useCharacterDetails } from '@/hooks/useCharacterDetails'

import { Skeleton } from '@/components/ui/skeleton'
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
        <Skeleton className="aspect-square w-1/2 rounded-lg" />
      ) : (
        <CharacterDetailsCard characterId={characterId} />
      )}
    </div>
  )
}
