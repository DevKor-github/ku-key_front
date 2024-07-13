import axios from 'axios'

export const apiInterface = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})
