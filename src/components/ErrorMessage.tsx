import { ReactElement } from 'react'

export function ErrorMessage(): ReactElement {
  return (
    <div className="z-30 text-center text-xl tracking-wider text-red-400">
      Uh oh! Something went wrong.
    </div>
  )
}
