import {
  ChangeEvent,
  InputHTMLAttributes,
  ReactElement,
  useEffect,
  useState,
} from 'react'
import { useDebounce } from '@uidotdev/usehooks'

import { Input } from './ui/input'

type Props = {
  onChangeSearchTerm(term: string): void
} & InputHTMLAttributes<HTMLInputElement>

export function Search({ onChangeSearchTerm, ...props }: Props): ReactElement {
  // State
  const [searchTerm, setSearchTerm] = useState('')

  // Hooks
  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  // Handlers
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value)
  }

  // Effects
  useEffect(() => {
    if (debouncedSearchTerm) {
      onChangeSearchTerm(debouncedSearchTerm)
    } else {
      onChangeSearchTerm('')
    }
  }, [debouncedSearchTerm, onChangeSearchTerm])

  // Components
  return (
    <div className="z-30 mb-12 w-[30%]">
      <Input
        name="search"
        placeholder="Search characters"
        className="rounded-full p-7 tracking-wider"
        onChange={handleChange}
        {...props}
      />
    </div>
  )
}
