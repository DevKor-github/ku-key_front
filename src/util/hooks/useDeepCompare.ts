/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { DependencyList, EffectCallback, useCallback, useEffect, useLayoutEffect, useMemo, useRef } from 'react'

export const isDeepEqual = <T>(obj1: T, obj2: T): boolean => {
  if (obj1 === obj2) return true

  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) return false

    return obj1.every((elem, index) => {
      return isDeepEqual(elem, obj2[index])
    })
  }

  if (typeof obj1 === 'object' && typeof obj2 === 'object' && obj1 !== null && obj2 !== null) {
    if (Array.isArray(obj1) || Array.isArray(obj2)) return false

    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    if (keys1.length !== keys2.length || !keys1.every(key => keys2.includes(key))) return false

    for (const key in obj1) {
      const isEqual = isDeepEqual(obj1[key], obj2[key])
      if (!isEqual) {
        return false
      }
    }

    return true
  }

  return false
}

const useDependenciesDeepCompareMemoize = (dependencies: React.DependencyList) => {
  const dependenciesRef = useRef<React.DependencyList>(dependencies)
  const signal = useRef(0)

  if (!isDeepEqual(dependencies, dependenciesRef.current)) {
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
