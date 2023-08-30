import { ReactElement, ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
}

export function Container({ children }: ContainerProps): ReactElement {
  return (
    <main className="z-30 mx-auto h-full w-full px-7 py-8 sm:px-20 sm:py-12 md:px-24 lg:py-16">
      {children}
    </main>
  )
}
