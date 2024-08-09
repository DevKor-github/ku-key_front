import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'

import { PostByBoardResponse, PostPreviewResponse } from '@/api/types/community'
import { BoardInfo, BoardPostPreviewProps, PostPreviewProps, PostViewProps } from '@/types/community'
import { apiInterface } from '@/util/axios/custom-axios'
import { useSearch } from '@/util/useSearch'

const getBoard = async () => {
  const response = await apiInterface.get('board')
  return response.data
}

export const useGetBoard = () => {
  return useQuery({ queryKey: ['board'], queryFn: getBoard })
}
const getPostsAll = async (pageSize: number, keyword?: string | null) => {
  const response = await apiInterface.get<PostPreviewResponse>(
    `post/all?pageNumber=1&pageSize=${pageSize}&${keyword ? `&keyword=${keyword}` : ''}`,
  )
  return response.data.posts
}

export const useGetPostsAll = () => {
  const [searchParam] = useSearchParams()
  const keyword = searchParam.get('keyword') ?? ''
  return useQuery({
    queryKey: ['postsAll', keyword],
    queryFn: () => getPostsAll(10, keyword),
    initialData: [] as PostPreviewProps[],
  })
}

export const useGetRecentPostsPreview = () => {
  return useQuery({ queryKey: ['recentPosts'], queryFn: () => getPostsAll(5), initialData: [] as PostPreviewProps[] })
}

const getHotPosts = async (pageSize: number) => {
  const response = await apiInterface.get<PostPreviewResponse>(`post/hot?pageNumber=1&pageSize=${pageSize}`)
  return response.data.posts
}

export const useGetHotPosts = () => {
  return useQuery({ queryKey: ['hotPosts'], queryFn: () => getHotPosts(10), initialData: [] as PostPreviewProps[] })
}

export const useGetHotPostPreview = () => {
  return useQuery({
    queryKey: ['hotPostsPreview'],
    queryFn: () => getHotPosts(5),
    initialData: [] as PostPreviewProps[],
  })
}

const getPostsByBoard = async (boardId: number, pageSize: number, keyword?: string | null) => {
  const response = await apiInterface.get<PostByBoardResponse>(
    `post?pageNumber=1&pageSize=${pageSize}&boardId=${boardId}&${keyword ? `&keyword=${keyword}` : ''}`,
  )
  return response.data
}

export const useGetPostsByBoard = (boardId: number) => {
  const { searchParam } = useSearch()
  const keyword = searchParam.get('keyword')
  return useQuery({
    queryKey: ['postsByBoard', boardId, keyword],
    queryFn: () => getPostsByBoard(boardId, 10, keyword),
    initialData: { board: {} as BoardInfo, posts: [] as BoardPostPreviewProps[] },
  })
}

const getPostById = async (postId: number) => {
  const response = await apiInterface.get<PostViewProps[]>(`post/${postId}`)
  return response.data
}

export const useGetPostById = (postId: number) => {
  return useQuery({
    queryKey: ['postById', postId],
    queryFn: () => getPostById(postId),
    initialData: [] as PostViewProps[],
    enabled: !isNaN(postId),
  })
}
