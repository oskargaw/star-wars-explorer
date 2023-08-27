import useSWR from 'swr'

import { getAllCharacters, UrlPaths } from '@/services/starWarsApi'

export function useStarWarsData() {
  const { data: allCharacters, isLoading: isAllCharactersLoading } = useSWR(
    UrlPaths.ALL_CHARACTERS,
    getAllCharacters
  )

  return {
    allCharacters: allCharacters || [],
    isAllCharactersLoading,
  }
}
