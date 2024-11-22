import qs from 'qs'
import { NavigateOptions, useLocation, useNavigate } from 'react-router-dom'
export const useQueryParams = <T extends object>() => {
  const location = useLocation()
  const navigate = useNavigate()
  const queryParams = qs.parse(location.search.substring(1))

  const setQueryParams = (currentQueryParams: T, options?: NavigateOptions) => {
    const newQueryParams = { ...queryParams, ...currentQueryParams }
    Object.keys(newQueryParams).forEach(key => {
      // TODO: 추후 리팩토링 필요
      // setQueryParams이 null 또는 undefined 값을 받을 때 키 자체를 날려버리지 않아,
      // 이후 쿼리스트링을 parsing할 때 빈 문자열로 내려와 문제 발생
      // 임시로 키를 날려버려 해결했지만, 이 방법도 파싱하면 항상 undefined가 되어버리므로 Generic에 맞는 타입으로의 매핑 과정 필요할듯?
      if (newQueryParams[key] === undefined || newQueryParams[key] === null) delete newQueryParams[key]
    })
    const query = qs.stringify(newQueryParams, { arrayFormat: 'brackets' })

    navigate(`${location.pathname}?${query}`, {
      replace: true,
      ...options,
    })
  }

  return [queryParams as T, setQueryParams] as const
}
