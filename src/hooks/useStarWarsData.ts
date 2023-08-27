import useSWR from 'swr'

import { getPaginatedCharacters, UrlPaths } from '@/services/starWarsApi'

export function useStarWarsData(pageIndex: number) {
  const {
    data: paginatedCharactersData,
    isLoading: isPaginatedCharactersDataLoading,
  } = useSWR([UrlPaths.ALL_CHARACTERS, pageIndex], () =>
    getPaginatedCharacters(pageIndex)
  )

  return {
    charactersList: paginatedCharactersData?.results || [],
    charactersData: paginatedCharactersData,
    isCharactersDataLoading: isPaginatedCharactersDataLoading,
  }
}
