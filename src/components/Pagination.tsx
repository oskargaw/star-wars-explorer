import { ReactElement, useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'

import { useCharactersList } from '@/hooks/useCharactersList'
import { cn } from '@/lib/tailwindMerge'
import { isArrayEmpty } from '@/utils/array'

import { Button } from './ui/Button'

type Props = {
  searchTerm: string
  currentPageIndex: number
}

const RESULTS_PER_PAGE = 10

export function Pagination({
  searchTerm,
  currentPageIndex,
}: Props): ReactElement | null {
  // Hooks
  const router = useRouter()
  const { charactersData, charactersList, isCharactersDataLoading } =
    useCharactersList(searchTerm, currentPageIndex)

  // Handlers
  function handlePreviousButtonClick() {
    router.push({ query: { ...router.query, page: currentPageIndex - 1 } })
  }

  function handleNextButtonClick() {
    router.push({ query: { ...router.query, page: currentPageIndex + 1 } })
  }

  function handlePageIndexButtonClick(pageIndex: number) {
    router.push({ query: { ...router.query, page: pageIndex + 1 } })
  }

  // Variables
  const totalPagesNumber = useMemo(
    () => Math.ceil((charactersData?.count ?? 0) / RESULTS_PER_PAGE),
    [charactersData?.count]
  )

  const shouldDisplayPagination = useMemo(
    () => !isCharactersDataLoading && !isArrayEmpty(charactersList),
    [charactersList, isCharactersDataLoading]
  )

  // Helpers
  const displayPageNumber = useCallback(
    (displayedPageIndex: number) => {
      if (
        displayedPageIndex === 1 ||
        displayedPageIndex === totalPagesNumber ||
        (displayedPageIndex <= 3 && currentPageIndex <= 3) ||
        (displayedPageIndex >= totalPagesNumber - 2 &&
          currentPageIndex >= totalPagesNumber - 2) ||
        (displayedPageIndex >= currentPageIndex - 1 &&
          displayedPageIndex <= currentPageIndex + 1)
      ) {
        return true
      }

      return false
    },
    [currentPageIndex, totalPagesNumber]
  )

  const displayThreeDots = useCallback(
    (displayedPageIndex: number) => {
      if (
        (displayedPageIndex === 2 && currentPageIndex > 3) ||
        (displayedPageIndex === totalPagesNumber - 1 &&
          currentPageIndex < totalPagesNumber - 2)
      ) {
        return true
      }

      return false
    },
    [currentPageIndex, totalPagesNumber]
  )

  // Components
  return shouldDisplayPagination ? (
    <div className="xs:gap-3 flex gap-1.5 pt-12 sm:gap-3 sm:pt-20 md:gap-5">
      <Button
        variant="secondary"
        className="xs:h-10 xs:px-4 h-8 rounded-lg px-2.5"
        disabled={!charactersData?.previous}
        onClick={handlePreviousButtonClick}
      >
        <span className="hidden sm:inline-block">Prev</span>
        <span className="sm:hidden">{'<'}</span>
      </Button>

      {[...Array(totalPagesNumber)].map((_page, pageIndex) => {
        if (displayPageNumber(pageIndex + 1)) {
          return (
            <Button
              key={pageIndex}
              className={cn('xs:px-4 xs:h-10 h-8 p-2.5', {
                'bg-yellow-300': currentPageIndex === pageIndex + 1,
              })}
              variant="secondary"
              onClick={() => handlePageIndexButtonClick(pageIndex)}
            >
              {pageIndex + 1}
            </Button>
          )
        }

        if (displayThreeDots(pageIndex + 1)) {
          return (
            <Button
              key={pageIndex}
              className="xs:px-4 xs:h-10 h-8 p-2 disabled:opacity-100"
              variant="secondary"
              disabled={true}
            >
              ...
            </Button>
          )
        }
      })}

      <Button
        variant="secondary"
        className="xs:h-10 xs:px-4 h-8 rounded-lg px-2.5"
        disabled={!charactersData?.next}
        onClick={handleNextButtonClick}
      >
        <span className="hidden sm:inline-block">Next</span>
        <span className="sm:hidden">{'>'}</span>
      </Button>
    </div>
  ) : null
}
