import axios from 'axios'

export const handleAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    return error.response ?? { data: null }
  }

  throw error
}
