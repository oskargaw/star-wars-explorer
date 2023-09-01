import useSWR from 'swr'

import {
  getPaginatedSearchedCharacters,
  UrlPaths,
} from '@/services/starWarsApi'

export function useCharactersList(searchTerm: string, pageIndex: number) {
  const {
    data: paginatedSearchedCharactersData,
    error: paginatedSearchedCharactersDataError,
    isLoading: isPaginatedSearchedCharactersDataLoading,
  } = useSWR([UrlPaths.ALL_CHARACTERS, searchTerm, pageIndex], () =>
    getPaginatedSearchedCharacters(searchTerm, pageIndex)
  )

  return {
    charactersList: paginatedSearchedCharactersData?.results || [],
    charactersData: paginatedSearchedCharactersData,
    charactersDataError: paginatedSearchedCharactersDataError,
    isCharactersDataLoading: isPaginatedSearchedCharactersDataLoading,
  }
}
