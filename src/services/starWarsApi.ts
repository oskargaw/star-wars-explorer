import { AxiosError } from 'axios'

import { axiosInstance } from '@/lib/axios'
import { StarWarsCharactersResponse } from '@/types/StarWarsCharacters'

export const UrlPaths = {
  ALL_CHARACTERS: '/people',
}

export async function getPaginatedCharacters(
  pageIndex: number
): Promise<StarWarsCharactersResponse | null> {
  try {
    const response = await axiosInstance.get<StarWarsCharactersResponse>(
      `${UrlPaths.ALL_CHARACTERS}/?page=${pageIndex}`
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
