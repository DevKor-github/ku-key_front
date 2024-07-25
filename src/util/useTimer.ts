import { useCallback, useEffect, useState } from 'react'

export const useTimer = (initialTime: number) => {
  const [time, setTime] = useState(initialTime)
  const [isRunning, setIsRunning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  const start = useCallback(() => {
    setIsRunning(true)
  }, [])

  const pause = useCallback(() => {
    setIsPaused(true)
    setIsRunning(false)
  }, [])

  const resume = useCallback(() => {
    setIsPaused(false)
    setIsRunning(true)
  }, [])

  const reset = useCallback(() => {
    setTime(initialTime)
    setIsRunning(false)
    setIsPaused(false)
    setIsFinished(false)
  }, [initialTime])

  useEffect(() => {
    if (isRunning && !isPaused) {
      const interval = setInterval(() => {
        setTime(prevTime => {
          if (!prevTime) {
            setIsRunning(false)
            setIsFinished(true)
            return prevTime
          }
          return prevTime - 1
        })
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isRunning, isPaused])

  useEffect(() => {
    if (isFinished) reset()
  }, [isFinished, reset])

  return {
    time,
    isRunning,
    isPaused,
    isFinished,
    start,
    pause,
    resume,
    reset,
  }
}
