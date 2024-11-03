import qs from 'qs'
import { useLocation, useNavigate } from 'react-router-dom'

export const useQueryParams = <T>() => {
  const location = useLocation()
  const navigate = useNavigate()
  const queryParams = qs.parse(location.search.substring(1))

  const setQueryParams = (currentQueryParams: T) => {
    const newQueryParams = { ...queryParams, ...currentQueryParams }
    const query = qs.stringify(newQueryParams, { arrayFormat: 'brackets' })

    navigate(`${location.pathname}?${query}`, {
      replace: true,
    })
  }

  return [queryParams as T, setQueryParams] as const
}
