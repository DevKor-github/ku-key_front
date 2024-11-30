/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */

import { DependencyList, EffectCallback, useCallback, useEffect, useLayoutEffect, useMemo, useRef } from 'react'

const isObject = (object: object) => {
  return object != null && typeof object === 'object'
}

const isDeepEqual = <T extends Record<string, any>>(obj1: T, obj2: T): boolean => {
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length != keys2.length || !isObject(obj1) || !isObject(obj2)) return false

  for (const key of keys1) {
    const value1 = obj1[key]
    const value2 = obj2[key]

    const isObjects = isObject(value1) && isObject(value2)

    if ((isObjects && !isDeepEqual(value1, value2)) || (!isObjects && value1 !== value2)) {
      return false
    }
  }
  return true
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
