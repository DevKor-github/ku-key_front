import { useAtomValue } from 'jotai'
import { useMemo } from 'react'

import { postAtom } from '@/lib/store/post'

export const useGetPostQueryKey = () => {
  const post = useAtomValue(postAtom)
  return useMemo(() => ['postById', Number(post.id)], [post.id])
}
