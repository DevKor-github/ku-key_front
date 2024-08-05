import { useQuery } from '@tanstack/react-query'

import { PostPreviewResponse } from '@/api/types/community'
import { apiInterface } from '@/util/axios/custom-axios'

const getBoard = async () => {
  const response = await apiInterface.get('board')
  return response.data
}

export const useGetBoard = () => {
  return useQuery({ queryKey: ['board'], queryFn: getBoard })
}
const getPostsAll = async () => {
  const response = await apiInterface.get<PostPreviewResponse>(`post/all?pageNumber=1&pageSize=10`)
  return response.data.posts
}

export const useGetPostsAll = () => {
  return useQuery({ queryKey: ['postsAll'], queryFn: getPostsAll, initialData: [] })
}

const getHotPosts = async () => {
  const response = await apiInterface.get<PostPreviewResponse[]>(`post/hot?pageNumber=1&pageSize=10`)
  return response.data
}

export const useGetHotPosts = () => {
  return useQuery({ queryKey: ['hotPosts'], queryFn: getHotPosts })
}
