export type StarWarsCharacterStarships = {
  name: string
  model: string
  starship_class: string
  manufacturer: string
  cost_in_credits: string
  length: string
  crew: string
  passengers: string
  max_atmosphering_speed: string
  hyperdrive_rating: string
  MGLT: string
  cargo_capacity: string
  consumables: string
  films: string[]
  pilots: string[]
  url: string
  created: string
  edited: string
}

export type StarWarsCharacterSpecies = {
  name: string
  classification: string
  designation: string
  average_height: string
  average_lifespan: string
  eye_colors: string
  hair_colors: string
  skin_colors: string
  language: string
  homeworld: string
  people: string[]
  films: string[]
  url: string
  created: string
  edited: string
}

export type StarWarsCharacter = {
  name: string
  birth_year: string
  eye_color: string
  gender: string
  hair_color: string
  height: string
  mass: string
  skin_color: string
  homeworld: string
  films: string[]
  species: string[]
  starships: string[]
  vehicles: string[]
  url: string
  created: string
  edited: string
}

export type StarWarsCharactersResponse = {
  count: number
  next: string | null
  previous: string | null
  results: StarWarsCharacter[]
}

export type StarWarsCharacterDetails = {
  generalDetails: StarWarsCharacter
  species: StarWarsCharacterSpecies[]
  starships: StarWarsCharacterStarships[]
}
