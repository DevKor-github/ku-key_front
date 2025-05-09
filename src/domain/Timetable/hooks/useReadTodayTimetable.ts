import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

import { useAsyncRead } from '@/common/hooks/useAsyncRead'
import { TIMETABLE_QUERY_KEY } from '@/domain/Timetable/queries'
import { kuKeyClient } from '@/packages/api'
import { TimetableTodayGetRequestParams } from '@/packages/api/ku-key/api/timetable-api'

type Props = TimetableTodayGetRequestParams
export const useQueryTodayTimetable = ({ semester, year }: Props) => {
  const read = useAsyncRead(kuKeyClient.api.TimetableApi.timetableTodayGet)
  return queryOptions({
    queryKey: TIMETABLE_QUERY_KEY.today({ semester, year }),
    queryFn: () => read({ semester, year }),
  })
}

export const useReadTodayTimetable = ({ semester, year }: Props) => {
  const read = useQueryTodayTimetable({ semester, year })
  return useSuspenseQuery(read)
}
