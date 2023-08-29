import useSWR from 'swr'

import { getCharacterDetails, UrlPaths } from '@/services/starWarsApi'

export function useCharacterDetails(characterId: string) {
  const { data: characterDetails, isLoading: isCharacterDetailsLoading } =
    useSWR([UrlPaths.ALL_CHARACTERS, characterId], () =>
      getCharacterDetails(characterId)
    )

  return {
    character: characterDetails || null,
    isCharacterLoading: isCharacterDetailsLoading,
  }
}
