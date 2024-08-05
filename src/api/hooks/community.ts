import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'

import { PostPreviewResponse } from '@/api/types/community'
import { PostPreviewProps } from '@/types/community'
import { apiInterface } from '@/util/axios/custom-axios'

const getBoard = async () => {
  const response = await apiInterface.get('board')
  return response.data
}

export const useGetBoard = () => {
  return useQuery({ queryKey: ['board'], queryFn: getBoard })
}
const getPostsAll = async (keyword: string | null) => {
  const response = await apiInterface.get<PostPreviewResponse>(
    `post/all?pageNumber=1&pageSize=10${keyword ? `&keyword=${keyword}` : ''}`,
  )
  return response.data.posts
}

export const useGetPostsAll = () => {
  const [searchParam] = useSearchParams()
  const keyword = searchParam.get('keyword')
  return useQuery({ queryKey: ['postsAll', keyword], queryFn: () => getPostsAll(keyword), initialData: [] })
}

const getHotPosts = async () => {
  const response = await apiInterface.get<PostPreviewResponse>(`post/hot?pageNumber=1&pageSize=10`)
  return response.data.posts
}

export const useGetHotPosts = () => {
  return useQuery({ queryKey: ['hotPosts'], queryFn: getHotPosts, initialData: [] as PostPreviewProps[] })
}
