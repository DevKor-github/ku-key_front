/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { isEqual } from 'es-toolkit'
import { DependencyList, EffectCallback, useCallback, useEffect, useLayoutEffect, useMemo, useRef } from 'react'

const useDependenciesDeepCompareMemoize = (dependencies: React.DependencyList) => {
  const dependenciesRef = useRef<React.DependencyList>(dependencies)
  const signal = useRef(0)

  if (!isEqual(dependencies, dependenciesRef.current)) {
    dependenciesRef.current = dependencies
    signal.current += 1
  }

  return useMemo(() => dependenciesRef.current, [signal.current])
}

export const useDeepCompareEffect = (effectFunction: EffectCallback, dependencies: DependencyList) => {
  return useEffect(effectFunction, useDependenciesDeepCompareMemoize(dependencies))
}

export const useDeepCompareLayoutEffect = (effectFunction: EffectCallback, dependencies: DependencyList) => {
  return useLayoutEffect(effectFunction, useDependenciesDeepCompareMemoize(dependencies))
}

export const useDeepCompareCallback = <T extends (...args: any[]) => ReturnType<T>>(
  callback: T,
  dependencies: DependencyList,
) => {
  return useCallback(callback, useDependenciesDeepCompareMemoize(dependencies))
}

export const useDeepCompareMemo = (factory: () => unknown, dependencies: DependencyList) => {
  return useMemo(factory, useDependenciesDeepCompareMemoize(dependencies))
}
