import qs from 'qs'
import { NavigateOptions, useLocation, useNavigate } from 'react-router-dom'
export const useQueryParams = <T extends object>() => {
  const location = useLocation()
  const navigate = useNavigate()
  const queryParams = qs.parse(location.search.substring(1))

  const setQueryParams = (currentQueryParams: T, options?: NavigateOptions) => {
    const newQueryParams = { ...queryParams, ...currentQueryParams }
    const query = qs.stringify(newQueryParams, { arrayFormat: 'brackets' })

    navigate(`${location.pathname}?${query}`, {
      replace: true,
      ...options,
    })
  }

  return [queryParams as T, setQueryParams] as const
}
