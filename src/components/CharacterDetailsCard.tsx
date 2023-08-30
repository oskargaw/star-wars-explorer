import React, { ReactElement } from 'react'

import { useCharacterDetails } from '@/hooks/useCharacterDetails'
import { isArrayEmpty } from '@/utils/array'
import { formatDate } from '@/utils/date'

import { FadeInComponent } from './FadeInComponent'
import {
  Card,
  CardContent,
  CardHeader,
  CardLabel,
  CardRow,
  CardSubtitle,
  CardTitle,
  CardValue,
} from './ui/Card'
import { Separator } from './ui/Separator'

type Props = {
  characterId: string
}

export function CharacterDetailsCard({ characterId }: Props): ReactElement {
  // Hooks
  const { character } = useCharacterDetails(characterId)

  // Destructuring
  const {
    name = '',
    birth_year = '',
    height = '',
    created = '',
  } = character?.generalDetails || {}

  return (
    <div className="w-1/2">
      <FadeInComponent>
        <Card>
          <CardHeader>
            <CardTitle>{name}</CardTitle>
          </CardHeader>

          <CardContent>
            <CardRow>
              <CardLabel>Born:</CardLabel>
              <CardValue>{birth_year}</CardValue>
            </CardRow>

            <CardRow>
              <CardLabel>Height:</CardLabel>
              <CardValue>{height}</CardValue>
            </CardRow>

            <CardRow>
              <CardLabel>Created at:</CardLabel>
              <CardValue>{formatDate(created)}</CardValue>
            </CardRow>

            <Separator className="my-1" />

            <CardSubtitle>Species info</CardSubtitle>

            {isArrayEmpty(character?.species || []) ? (
              <CardLabel className="text-center text-sm">
                Oops, no info about species
              </CardLabel>
            ) : (
              character?.species.map(
                (
                  { name, average_lifespan, classification, language },
                  index
                ) => (
                  <React.Fragment key={name}>
                    {index > 0 ? <Separator className="opacity-10" /> : null}

                    <CardRow>
                      <CardLabel>Average lifespan:</CardLabel>
                      <CardValue>{average_lifespan}</CardValue>
                    </CardRow>

                    <CardRow>
                      <CardLabel>Classification:</CardLabel>
                      <CardValue>{classification}</CardValue>
                    </CardRow>

                    <CardRow>
                      <CardLabel>Language:</CardLabel>
                      <CardValue>{language}</CardValue>
                    </CardRow>
                  </React.Fragment>
                )
              )
            )}

            <Separator className="my-1" />

            <CardSubtitle>Starships info</CardSubtitle>

            {isArrayEmpty(character?.starships || []) ? (
              <CardLabel className="text-center text-sm">
                Oops, no info about starships
              </CardLabel>
            ) : (
              character?.starships.map(({ name, model, passengers }, index) => (
                <React.Fragment key={name}>
                  {index > 0 ? <Separator className="opacity-10" /> : null}

                  <CardRow>
                    <CardLabel>Name:</CardLabel>
                    <CardValue>{name}</CardValue>
                  </CardRow>

                  <CardRow>
                    <CardLabel>Model:</CardLabel>
                    <CardValue>{model}</CardValue>
                  </CardRow>

                  <CardRow>
                    <CardLabel>Passengers:</CardLabel>
                    <CardValue>{passengers}</CardValue>
                  </CardRow>
                </React.Fragment>
              ))
            )}
          </CardContent>
        </Card>
      </FadeInComponent>
    </div>
  )
}
