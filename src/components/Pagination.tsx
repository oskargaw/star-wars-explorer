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
    <div className="flex gap-5 pt-20">
      <Button
        variant="secondary"
        disabled={!charactersData?.previous}
        onClick={handlePreviousButtonClick}
      >
        Prev
      </Button>

      {[...Array(totalPagesNumber)].map((_page, pageIndex) => {
        if (displayPageNumber(pageIndex + 1)) {
          return (
            <Button
              key={pageIndex}
              className={cn({
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
              className="disabled:opacity-100"
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
        disabled={!charactersData?.next}
        onClick={handleNextButtonClick}
      >
        Next
      </Button>
    </div>
  ) : null
}
