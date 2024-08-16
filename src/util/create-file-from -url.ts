export const createFileFromUrl = async (url: string, filename: string) => {
  const response = await fetch(url, { mode: 'cors' })
  const blob = await response.blob()
  return new File([blob], filename, { type: blob.type })
}
