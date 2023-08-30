import { ReactElement, ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
}

export function Container({ children }: ContainerProps): ReactElement {
  return (
    <main className="z-30 mx-auto h-full w-full px-24 py-16">{children}</main>
  )
}
