import { QueryClient } from '@tanstack/react-query'

declare global {
  interface Window {
    __REACT_QUERY_STATE__?: QueryClient
  }
}
