import axios from 'axios'

export const customAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('_auth')}`,
  },
})
