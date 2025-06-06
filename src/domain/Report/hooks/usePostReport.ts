import { useErrorHandledMutation, UseErrorHandledMutationOption } from '@/api/hooks/useErrorHandledMutation'
import { useAsyncRead } from '@/common/hooks/useAsyncRead'
import { kuKeyClient } from '@/packages/api'
import { ReportPostRequestParams } from '@/packages/api/ku-key/api/report-api'

type Props = UseErrorHandledMutationOption

export const usePostReport = (props: Props) => {
  const fetch = useAsyncRead(kuKeyClient.api.ReportApi.reportPost)

  const mutation = (params: ReportPostRequestParams['createReportRequestDto']) =>
    fetch({ createReportRequestDto: params })

  return useErrorHandledMutation({ ...props, mutationFn: mutation })
}
