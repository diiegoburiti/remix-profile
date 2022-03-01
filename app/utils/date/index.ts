export const formatDate = (date: string) => {
  const dateToFormat = new Date(date)
  return dateToFormat.toLocaleDateString()
}
