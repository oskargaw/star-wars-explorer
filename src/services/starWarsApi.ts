import { AxiosError } from 'axios'

import { axiosInstance } from '@/lib/axios'
import type {
  StarWarsCharacter,
  StarWarsCharacterDetails,
  StarWarsCharacterSpecies,
  StarWarsCharactersResponse,
  StarWarsCharacterStarships,
} from '@/types/StarWarsCharacter'
import { isArrayEmpty } from '@/utils/array'

export const UrlPaths = {
  ALL_CHARACTERS: '/people',
}

export async function getPaginatedSearchedCharacters(
  searchTerm: string,
  pageIndex: number
): Promise<StarWarsCharactersResponse | null> {
  try {
    const response = await axiosInstance.get<StarWarsCharactersResponse>(
      `${UrlPaths.ALL_CHARACTERS}/?search=${searchTerm}&page=${pageIndex}`
    )

    return response.data
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 404) {
      return null
    } else {
      throw error
    }
  }
}

async function getSpecies(
  speciesUrls: string[]
): Promise<StarWarsCharacterSpecies[]> {
  const promises = speciesUrls.map((url) =>
    axiosInstance.get<StarWarsCharacterSpecies>(url)
  )

  const results = await Promise.all(promises)

  const species = results.map(({ data }) => data)

  return species
}

async function getStarships(
  starshipsUrls: string[]
): Promise<StarWarsCharacterStarships[]> {
  const promises = starshipsUrls.map((url) =>
    axiosInstance.get<StarWarsCharacterStarships>(url)
  )

  const results = await Promise.all(promises)

  const starships = results.map(({ data }) => data)

  return starships
}

export async function getCharacterDetails(
  characterId: string
): Promise<StarWarsCharacterDetails | null> {
  try {
    const response = await axiosInstance.get<StarWarsCharacter>(
      `${UrlPaths.ALL_CHARACTERS}/${characterId}`
    )

    const generalDetails = response.data

    const species = isArrayEmpty(generalDetails.species)
      ? []
      : await getSpecies(generalDetails.species)

    const starships = isArrayEmpty(generalDetails.starships)
      ? []
      : await getStarships(generalDetails.starships)

    return {
      generalDetails,
      species,
      starships,
    }
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 404) {
      return null
    } else {
      throw error
    }
  }
}
