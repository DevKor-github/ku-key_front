import { useEffect } from 'react'

type Props = {
  scrollRef: React.RefObject<HTMLDivElement>
  currentScheduleIndex: number
}

export const useScrollToCurrentSchedule = ({ scrollRef, currentScheduleIndex }: Props) => {
  useEffect(() => {
    if (!scrollRef.current || currentScheduleIndex === -1) return

    // 현재 스케줄 요소 찾기
    const currentScheduleElement = scrollRef.current.children[currentScheduleIndex]

    if (!currentScheduleElement) return

    // getBoundingClientRect() 메서드 사용
    const rect = currentScheduleElement.getBoundingClientRect()
    const containerRect = scrollRef.current.getBoundingClientRect()

    // 컨테이너 내에서의 상대적 위치 계산
    const top = rect.top - containerRect.top + scrollRef.current.scrollTop

    // 스크롤 이동
    scrollRef.current.scrollTo({ top, behavior: 'smooth' })
  }, [currentScheduleIndex, scrollRef])
}
