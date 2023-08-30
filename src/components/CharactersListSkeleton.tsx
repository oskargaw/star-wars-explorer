import { ReactElement } from 'react'

import { Skeleton } from './ui/skeleton'

export function CharactersListSkeleton(): ReactElement {
  return (
    <div className="grid w-full grid-cols-1 justify-center gap-12 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
      {[...Array(6)].map((_, index) => (
        <Skeleton key={index} className="h-[280px] w-full rounded-lg" />
      ))}
    </div>
  )
}
