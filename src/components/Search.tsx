import {
  ChangeEvent,
  InputHTMLAttributes,
  ReactElement,
  useEffect,
  useState,
} from 'react'
import { useDebounce } from '@uidotdev/usehooks'

import { Input } from './ui/Input'

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
    <div className="z-30 mb-10 w-full sm:mb-14 sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[30%]">
      <Input
        name="search"
        placeholder="Search characters"
        className="xs:p-7 rounded-full p-5 tracking-wider"
        onChange={handleChange}
        {...props}
      />
    </div>
  )
}
