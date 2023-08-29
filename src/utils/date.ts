export function formatDate(date: string): string {
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }

  const formattedDate = new Date(date).toLocaleString('en-GB', options)

  return formattedDate
}
