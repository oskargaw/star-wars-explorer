import { AxiosError } from 'axios'

import { axiosInstance } from '@/lib/axios'
import {
  StarWarsCharacter,
  StarWarsCharactersResponse,
} from '@/types/StarWarsCharacters'

export const UrlPaths = {
  ALL_CHARACTERS: '/people',
}

export async function getAllCharacters(): Promise<StarWarsCharacter[] | null> {
  try {
    const response = await axiosInstance.get<StarWarsCharactersResponse>(
      UrlPaths.ALL_CHARACTERS
    )

    return response.data.results
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 404) {
      return null
    } else {
      throw error
    }
  }
}
