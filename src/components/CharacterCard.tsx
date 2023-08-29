import { ReactElement } from 'react'
import Link from 'next/link'

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
  id: string
  name: string
  birthYear: string
  height: string
  createdAt: string
}

export function CharacterCard({
  id,
  name,
  birthYear,
  height,
  createdAt,
}: Props): ReactElement {
  return (
    <Link href={`/${id}`}>
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
    </Link>
  )
}
