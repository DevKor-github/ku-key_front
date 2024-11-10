import { useCallback, useEffect, useState } from 'react'

export const useTimer = (initialTime: number) => {
  const [time, setTime] = useState(initialTime)
  const [isRunning, setIsRunning] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  const start = useCallback(() => {
    setIsRunning(true)
  }, [])

  const pause = useCallback(() => {
    setIsRunning(false)
  }, [])

  const resume = useCallback(() => {
    setIsRunning(true)
  }, [])

  const reset = useCallback(() => {
    setTime(initialTime)
    setIsRunning(false)
    setIsFinished(false)
  }, [initialTime])

  useEffect(() => {
    if (isRunning) {
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
  }, [isRunning])

  useEffect(() => {
    if (isFinished) reset()
  }, [isFinished, reset])

  return {
    time,
    isRunning,
    isFinished,
    start,
    pause,
    resume,
    reset,
  }
}
