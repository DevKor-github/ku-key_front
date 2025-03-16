import { useCallback } from 'react'
import { generatePath, NavigateOptions, useNavigate } from 'react-router-dom'

import { routeConfig, RouteKey, RouteParamsObject } from '@/lib/router/routeConfig'

export const useNavigateRouter = () => {
  const navigate = useNavigate()

  // 컴포넌트 이름과 파라미터로 네비게이션하는 함수
  const navigateTo = useCallback(
    <T extends RouteKey>(routeName: T, params?: RouteParamsObject<T>, options?: NavigateOptions) => {
      const route = routeConfig[routeName]
      // React Router의 generatePath 사용
      try {
        const path = generatePath(route.path, params as { [K in (typeof route.params)[number]]: string })
        navigate(path, options)
      } catch (error) {
        console.error(`Failed to generate path for "${routeName}":`, error)
        console.error('Provided params:', params)
      }
    },
    [navigate],
  )

  return navigateTo
}
