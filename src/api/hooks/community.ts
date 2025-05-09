import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
  useSuspenseInfiniteQuery,
  useSuspenseQuery,
} from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'

import { useErrorHandledMutation } from '@/api/hooks/useErrorHandledMutation'
import {
  GetMyCommentsResponse,
  PostByBoardResponse,
  PostCommentLikeRequest,
  PostCommentRequest,
  PostCommentResponse,
  PostCreateRequest,
  PostEditRequest,
  PostPreviewResponse,
  PostReactionRequest,
  PostReactionResponse,
  PostScrapResponse,
} from '@/api/types/community'
import { CommentProps, PostPreviewByBoardMeta, PostPreviewProps, PostViewProps, ReactionType } from '@/types/community'
import { apiInterface } from '@/util/axios/custom-axios'
import { useGetPostQueryKey } from '@/util/hooks/useGetPostQueryKey'
import { useSearch } from '@/util/hooks/useSearch'

const getBoard = async () => {
  const response = await apiInterface.get('board')
  return response.data
}

export const useGetBoard = () => {
  return useQuery({ queryKey: ['board'], queryFn: getBoard })
}
const getPostsAll = async (take: number, keyword?: string | null, cursor?: string) => {
  const response = await apiInterface.get<PostPreviewResponse>(`post/all`, {
    params: { take, cursor: cursor?.length === 14 ? cursor : undefined, keyword: keyword ?? undefined },
  })
  return response.data
}

export const useGetPostsAll = () => {
  const [searchParam] = useSearchParams()
  const keyword = searchParam.get('keyword')
  return useSuspenseInfiniteQuery({
    queryKey: ['postsAll', keyword],
    queryFn: ({ pageParam: cursor }) => getPostsAll(10, keyword, cursor.toString()),
    getNextPageParam: lastPage => (lastPage.meta.hasNextData ? lastPage.meta.nextCursor : undefined),
    initialPageParam: 0,
    select: data => (data.pages ?? []).flatMap(page => page.data),
  })
}

export const useGetRecentPostsPreview = () => {
  return useSuspenseQuery({
    queryKey: ['recentPosts'],
    queryFn: () => getPostsAll(5),
    initialData: {
      data: [] as PostPreviewProps[],
      meta: { hasNextData: false, nextCursor: 0 } as PostPreviewByBoardMeta,
    },
  })
}

const getHotPosts = async (take: number, cursor?: string) => {
  const response = await apiInterface.get<PostPreviewResponse>(`post/hot`, {
    params: { take, cursor: cursor?.length === 14 ? cursor : undefined },
  })
  return response.data
}

export const useGetHotPosts = () => {
  return useSuspenseInfiniteQuery({
    queryKey: ['hotPosts'],
    queryFn: ({ pageParam: cursor }) => getHotPosts(10, cursor.toString()),
    getNextPageParam: lastPage => (lastPage.meta.hasNextData ? lastPage.meta.nextCursor : undefined),
    initialPageParam: 0,
    select: data => (data.pages ?? []).flatMap(page => page.data),
  })
}

export const useGetHotPostPreview = () => {
  return useSuspenseQuery({
    queryKey: ['hotPostsPreview'],
    queryFn: () => getHotPosts(5),
    // placeholderData: {
    //   data: [] as PostPreviewProps[],
    //   meta: { hasNextData: false, nextCursor: 0 } as PostPreviewByBoardMeta,
    // },
  })
}

const getPostsByBoard = async (boardId: number, take: number, keyword?: string | null, cursor?: string) => {
  const response = await apiInterface.get<PostByBoardResponse>(`post`, {
    params: { take, boardId, cursor: cursor?.length === 14 ? cursor : undefined, keyword: keyword ?? undefined },
  })
  return response.data
}

export const useGetPostsByBoard = (boardId: number) => {
  const { searchParam } = useSearch()
  const keyword = searchParam.get('keyword')
  return useInfiniteQuery({
    queryKey: ['postsByBoard', boardId, keyword],
    queryFn: ({ pageParam: cursor }) => getPostsByBoard(boardId, 10, keyword, cursor.toString()),
    getNextPageParam: lastPage => (lastPage.meta.hasNextData ? lastPage.meta.nextCursor : undefined),
    initialPageParam: 0,
    select: data => (data.pages ?? []).flatMap(page => page.data),
  })
}

const getPostById = async (postId: number) => {
  const response = await apiInterface.get<PostViewProps>(`post/${postId}`)
  return response.data
}

export const useGetPostById = (postId: number) => {
  return useSuspenseQuery({
    queryKey: ['postById', postId],
    queryFn: () => getPostById(postId),
  })
}

const postReaction = async ({ postId, reaction }: PostReactionRequest) => {
  const response = await apiInterface.post<PostReactionResponse>(`post/${postId}/reaction`, { reaction })
  const postIdString = postId.toString()
  return { postId: postIdString, ...response.data }
}

export const usePostReaction = () => {
  const queryClient = useQueryClient()
  return useErrorHandledMutation({
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
  return useErrorHandledMutation({
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
  console.log('comment sending...', new Date())
  const response = await apiInterface.post<PostCommentResponse>(
    '/comment',
    { content, isAnonymous },
    { params: { postId, parentCommentId } },
  )
  console.log('comment sent...', new Date())
  return { postId, comment: response.data, parentCommentId }
}

export const usePostComment = () => {
  const queryClient = useQueryClient()
  return useErrorHandledMutation({
    mutationFn: postComment,
    onSuccess: data => {
      queryClient.setQueryData<PostViewProps>(['postById', Number(data.postId)], (oldData): PostViewProps => {
        if (!oldData) {
          return {} as PostViewProps
        }
        return { ...oldData, comments: [{ ...data.comment, reply: [] }, ...oldData.comments] }
      })
    },
  })
}

export const usePostCommentReply = () => {
  const queryClient = useQueryClient()
  return useErrorHandledMutation({
    mutationFn: postComment,
    onSuccess: data => {
      queryClient.setQueryData<PostViewProps>(['postById', Number(data.postId)], (oldData): PostViewProps => {
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
  return useErrorHandledMutation({
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

const postCreate = async ({ boardId, title, content, isAnonymous, images }: PostCreateRequest) => {
  const formData = new FormData()
  formData.append('title', title)
  formData.append('content', content)
  formData.append('isAnonymous', isAnonymous.toString())
  images?.forEach(image => formData.append('images', image))
  const response = await apiInterface.post<PostViewProps>(`/post`, formData, { params: { boardId } })
  return response.data
}

export const usePostCreate = () => {
  return useErrorHandledMutation({
    mutationFn: postCreate,
  })
}

const patchPost = async ({ postId, title, content, isAnonymous, images, imageUpdate }: PostEditRequest) => {
  const formData = new FormData()
  formData.append('title', title)
  formData.append('content', content)
  formData.append('isAnonymous', isAnonymous.toString())
  formData.append('imageUpdate', imageUpdate.toString())
  images?.forEach(image => formData.append('images', image))
  const response = await apiInterface.patch<PostViewProps>(`/post/${postId}`, formData)
  return response.data
}

export const usePatchEditPost = () => {
  const queryClient = useQueryClient()
  return useErrorHandledMutation({
    mutationFn: patchPost,
    onSuccess: data => {
      queryClient.setQueryData<PostViewProps>(['postById', data.id], (oldData): PostViewProps => {
        if (!oldData) return {} as PostViewProps
        return { ...data }
      })
    },
  })
}

const deletePost = async (postId: number) => {
  const response = await apiInterface.delete(`/post/${postId}`)
  return response.data
}

export const useDeletePost = () => {
  return useErrorHandledMutation({ mutationFn: deletePost })
}

const getMyPost = async (take: number, cursor?: string) => {
  const response = await apiInterface.get<PostPreviewResponse>('post/my', {
    params: { take, cursor: cursor?.length === 14 ? cursor : undefined },
  })
  return response.data
}

export const useGetMyPost = () => {
  return useInfiniteQuery({
    queryKey: ['myPost'],
    queryFn: ({ pageParam: cursor }) => getMyPost(10, cursor.toString()),
    getNextPageParam: lastPage => (lastPage.meta.hasNextData ? lastPage.meta.nextCursor : undefined),
    initialPageParam: 0,
    select: data => (data.pages ?? []).flatMap(page => page.data),
  })
}
const getMyScrap = async (take: number, cursor?: string) => {
  const response = await apiInterface.get<PostPreviewResponse>('post/scrap', {
    params: { take, cursor: cursor?.length === 14 ? cursor : undefined },
  })
  return response.data
}

export const useGetMyScrap = () => {
  return useInfiniteQuery({
    queryKey: ['myScrap'],
    queryFn: ({ pageParam: cursor }) => getMyScrap(10, cursor.toString()),
    getNextPageParam: lastPage => (lastPage.meta.hasNextData ? lastPage.meta.nextCursor : undefined),
    initialPageParam: 0,
    select: data => (data.pages ?? []).flatMap(page => page.data),
  })
}
const getMyReactPost = async (take: number, cursor?: string) => {
  const response = await apiInterface.get<PostPreviewResponse>('post/react', {
    params: { take, cursor: cursor?.length === 14 ? cursor : undefined },
  })
  return response.data
}

export const useGetMyReactPost = () => {
  return useInfiniteQuery({
    queryKey: ['myReactPost'],
    queryFn: ({ pageParam: cursor }) => getMyReactPost(10, cursor.toString()),
    getNextPageParam: lastPage => (lastPage.meta.hasNextData ? lastPage.meta.nextCursor : undefined),
    initialPageParam: 0,
    select: data => (data.pages ?? []).flatMap(page => page.data),
  })
}

const getMyComments = async (take: number, cursor?: string) => {
  const response = await apiInterface.get<GetMyCommentsResponse>('/comment/my', {
    params: { take, cursor: cursor?.length === 14 ? cursor : undefined },
  })
  return response.data
}

export const useGetMyComments = () => {
  return useInfiniteQuery({
    queryKey: ['myComments'],
    queryFn: ({ pageParam: cursor }) => getMyComments(10, cursor.toString()),
    getNextPageParam: lastPage => (lastPage.meta.hasNextData ? lastPage.meta.nextCursor : undefined),
    initialPageParam: 0,
    select: data => (data.pages ?? []).flatMap(page => page.data),
  })
}

const deleteComment = async (commentId: number) => {
  const response = await apiInterface.delete(`/comment/${commentId}`)
  return response.data
}

export const useDeleteComment = () => {
  const queryClient = useQueryClient()
  const queryKey = useGetPostQueryKey()
  return useErrorHandledMutation({
    mutationFn: deleteComment,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKey }),
  })
}
