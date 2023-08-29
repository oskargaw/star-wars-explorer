import { ReactElement, ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
}

export default function Container({ children }: ContainerProps): ReactElement {
  return (
    <div className="z-30 mx-auto w-full px-4 sm:px-2 md:px-10 xl:px-20">
      {children}
    </div>
  )
}
