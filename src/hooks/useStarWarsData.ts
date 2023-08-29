import useSWR from 'swr'

import {
  getPaginatedSearchedCharacters,
  UrlPaths,
} from '@/services/starWarsApi'

export function useStarWarsData(searchTerm: string, pageIndex: number) {
  const {
    data: paginatedSearchedCharactersData,
    isLoading: isPaginatedSearchedCharactersDataLoading,
  } = useSWR([UrlPaths.ALL_CHARACTERS, searchTerm, pageIndex], () =>
    getPaginatedSearchedCharacters(searchTerm, pageIndex)
  )

  return {
    charactersList: paginatedSearchedCharactersData?.results || [],
    charactersData: paginatedSearchedCharactersData,
    isCharactersDataLoading: isPaginatedSearchedCharactersDataLoading,
  }
}
