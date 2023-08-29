import { ReactElement } from 'react'

import { formatDate } from '@/utils/date'

import {
  Card,
  CardContent,
  CardHeader,
  CardLabel,
  CardRow,
  CardTitle,
  CardValue,
} from './ui/Card'

type Props = {
  name: string
  birthYear: string
  height: string
  createdAt: string
}

export function CharacterCard({
  name,
  birthYear,
  height,
  createdAt,
}: Props): ReactElement {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>

      <CardContent>
        <CardRow>
          <CardLabel>Born:</CardLabel>
          <CardValue>{birthYear}</CardValue>
        </CardRow>

        <CardRow>
          <CardLabel>Height:</CardLabel>
          <CardValue>{height}</CardValue>
        </CardRow>

        <CardRow>
          <CardLabel>Created at:</CardLabel>
          <CardValue>{formatDate(createdAt)}</CardValue>
        </CardRow>
      </CardContent>
    </Card>
  )
}
