import { ReactElement } from 'react'
import { useRouter } from 'next/router'

import { CharacterDetailsCard } from '@/components/CharacterDetailsCard'

export default function CharacterDetailsPage(): ReactElement {
  // Hooks
  const router = useRouter()

  // Variables
  const characterId = router.query.characterId?.toString() || ''

  // Components
  return (
    <div className="flex flex-col items-center">
      <CharacterDetailsCard characterId={characterId} />
    </div>
  )
}
