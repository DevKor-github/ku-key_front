import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'

import {
  PostByBoardResponse,
  PostCommentLikeRequest,
  PostCommentRequest,
  PostCommentResponse,
  PostPreviewResponse,
  PostReactionRequest,
  PostReactionResponse,
  PostScrapResponse,
} from '@/api/types/community'
import {
  BoardInfo,
  BoardPostPreviewProps,
  CommentProps,
  PostPreviewByBoardMeta,
  PostPreviewProps,
  PostViewProps,
  ReactionType,
} from '@/types/community'
import { apiInterface } from '@/util/axios/custom-axios'
import { useSearch } from '@/util/useSearch'

const getBoard = async () => {
  const response = await apiInterface.get('board')
  return response.data
}

export const useGetBoard = () => {
  return useQuery({ queryKey: ['board'], queryFn: getBoard })
}
const getPostsAll = async (take: number, keyword?: string | null) => {
  const response = await apiInterface.get<PostPreviewResponse>(`post/all?${keyword ? `&keyword=${keyword}` : ''}`, {
    params: { take },
  })
  return response.data
}

export const useGetPostsAll = () => {
  const [searchParam] = useSearchParams()
  const keyword = searchParam.get('keyword') ?? ''
  return useQuery({
    queryKey: ['postsAll', keyword],
    queryFn: () => getPostsAll(10, keyword),
    initialData: {
      data: [] as PostPreviewProps[],
      meta: { hasNextData: false, nextCursor: 0 } as PostPreviewByBoardMeta,
    },
  })
}

export const useGetRecentPostsPreview = () => {
  return useQuery({
    queryKey: ['recentPosts'],
    queryFn: () => getPostsAll(5),
    initialData: {
      data: [] as PostPreviewProps[],
      meta: { hasNextData: false, nextCursor: 0 } as PostPreviewByBoardMeta,
    },
  })
}

const getHotPosts = async (take: number) => {
  const response = await apiInterface.get<PostPreviewResponse>(`post/hot`, {
    params: { take },
  })
  return response.data
}

export const useGetHotPosts = () => {
  return useQuery({
    queryKey: ['hotPosts'],
    queryFn: () => getHotPosts(10),
    initialData: {
      data: [] as PostPreviewProps[],
      meta: { hasNextData: false, nextCursor: 0 } as PostPreviewByBoardMeta,
    },
  })
}

export const useGetHotPostPreview = () => {
  return useQuery({
    queryKey: ['hotPostsPreview'],
    queryFn: () => getHotPosts(5),
    initialData: {
      data: [] as PostPreviewProps[],
      meta: { hasNextData: false, nextCursor: 0 } as PostPreviewByBoardMeta,
    },
  })
}

const getPostsByBoard = async (boardId: number, take: number, keyword?: string | null) => {
  const response = await apiInterface.get<PostByBoardResponse>(`post?${keyword ? `&keyword=${keyword}` : ''}`, {
    params: { take, boardId },
  })
  return response.data
}

export const useGetPostsByBoard = (boardId: number) => {
  const { searchParam } = useSearch()
  const keyword = searchParam.get('keyword')
  return useQuery({
    queryKey: ['postsByBoard', boardId, keyword],
    queryFn: () => getPostsByBoard(boardId, 10, keyword),
    initialData: {
      board: {} as BoardInfo,
      data: [] as BoardPostPreviewProps[],
      meta: { hasNextData: false, nextCursor: 0 } as PostPreviewByBoardMeta,
    },
  })
}

const getPostById = async (postId: number) => {
  const response = await apiInterface.get<PostViewProps>(`post/${postId}`)
  return response.data
}

export const useGetPostById = (postId: number) => {
  return useQuery({
    queryKey: ['postById', postId],
    queryFn: () => getPostById(postId),
    initialData: {} as PostViewProps,
    enabled: !isNaN(postId),
  })
}

const postReaction = async ({ postId, reaction }: PostReactionRequest) => {
  const response = await apiInterface.post<PostReactionResponse>(`post/${postId}/reaction`, { reaction })
  const postIdString = postId.toString()
  return { postId: postIdString, ...response.data }
}

export const usePostReaciton = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: postReaction,
    onSuccess: data => {
      queryClient.setQueryData<PostViewProps>(['postById', parseInt(data.postId)], (oldData): PostViewProps => {
        if (!oldData) {
          return {} as PostViewProps
        }
        const newReactionTarget = Object.keys(oldData.reactionCount)[data.isReacted] as ReactionType
        const newReactionCount = {
          ...oldData.reactionCount,
          [newReactionTarget]: oldData.reactionCount[newReactionTarget] + 1,
        }
        if (oldData.myReaction !== undefined) {
          const beforeReaction = Object.keys(oldData.reactionCount)[oldData.myReaction] as ReactionType
          newReactionCount[beforeReaction] = oldData.reactionCount[beforeReaction] - 1
        }
        return {
          ...oldData,
          reactionCount: newReactionCount,
          myReaction: data.isReacted,
        }
      })
    },
  })
}

const postScrap = async (postId: number) => {
  const response = await apiInterface.post<PostScrapResponse>(`post/${postId}/scrap`)
  const postIdString = postId.toString()
  return { postId: postIdString, ...response.data }
}

export const usePostScrap = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: postScrap,
    onSuccess: data => {
      queryClient.setQueryData<PostViewProps>(['postById', parseInt(data.postId)], (oldData): PostViewProps => {
        if (!oldData) {
          return {} as PostViewProps
        }
        return {
          ...oldData,
          scrapCount: data.isScrapped ? oldData.scrapCount + 1 : oldData.scrapCount - 1,
          myScrap: data.isScrapped,
        }
      })
    },
  })
}

const postComment = async ({ postId, parentCommentId, content, isAnonymous }: PostCommentRequest) => {
  const response = await apiInterface.post<PostCommentResponse>(
    '/comment',
    { content, isAnonymous },
    { params: { postId, parentCommentId } },
  )
  const postIdString = postId.toString()
  return { postId: postIdString, comment: response.data, parentCommentId }
}

export const usePostComment = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: postComment,
    onSuccess: data => {
      queryClient.setQueryData<PostViewProps>(['postById', parseInt(data.postId)], (oldData): PostViewProps => {
        if (!oldData) {
          return {} as PostViewProps
        }
        return { ...oldData, comments: [...oldData.comments, { ...data.comment, reply: [] }] }
      })
    },
  })
}

export const usePostCommentReply = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: postComment,
    onSuccess: data => {
      queryClient.setQueryData<PostViewProps>(['postById', parseInt(data.postId)], (oldData): PostViewProps => {
        if (!oldData) {
          return {} as PostViewProps
        }
        const newComments = oldData.comments.map(comment => {
          if (comment.id === data.parentCommentId) {
            return { ...comment, reply: [...comment.reply, data.comment] }
          }
          return comment
        })
        return { ...oldData, comments: newComments }
      })
    },
  })
}

const postCommentLike = async ({ postId, commentId, isReply, parentCommentId }: PostCommentLikeRequest) => {
  const response = await apiInterface.post<{ isLiked: boolean }>(`/comment/${commentId}/like`)
  const postIdString = postId.toString()
  return { postId: postIdString, commentId, isReply, parentCommentId, ...response.data }
}

export const usePostCommentLike = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: postCommentLike,
    onSuccess: data => {
      queryClient.setQueryData<PostViewProps>(['postById', parseInt(data.postId)], (oldData): PostViewProps => {
        if (!oldData) return {} as PostViewProps
        const updateLike = <T extends CommentProps | Omit<CommentProps, 'reply'>>(item: T, isLiked: boolean) => ({
          ...item,
          likeCount: isLiked ? item.likeCount + 1 : item.likeCount - 1,
          myLike: isLiked,
        })
        const updateComment = (comment: CommentProps) => {
          if (data.isReply && comment.id === data.parentCommentId) {
            return {
              ...comment,
              reply: comment.reply.map(reply =>
                reply.id === data.commentId ? updateLike(reply, data.isLiked) : reply,
              ),
            }
          }
          if (!data.isReply && comment.id === data.commentId) return updateLike(comment, data.isLiked)

          return comment
        }
        const newComments = oldData.comments.map(updateComment)
        return { ...oldData, comments: newComments }
      })
    },
  })
}
