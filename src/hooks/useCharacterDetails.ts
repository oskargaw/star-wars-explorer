import useSWR from 'swr'

import { getCharacterDetails, UrlPaths } from '@/services/starWarsApi'

export function useCharacterDetails(characterId: string) {
  const {
    data: characterDetails,
    error: characterDetailsError,
    isLoading: isCharacterDetailsLoading,
  } = useSWR([UrlPaths.ALL_CHARACTERS, characterId], () =>
    getCharacterDetails(characterId)
  )

  return {
    character: characterDetails || null,
    characterError: characterDetailsError,
    isCharacterLoading: isCharacterDetailsLoading,
  }
}
