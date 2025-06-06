import {
  PostAllGetRequestParams,
  PostGetRequestParams,
  PostHotGetRequestParams,
} from '@/packages/api/ku-key/api/post-api'

export const COMMUNITY_POSTS_QUERY_KEY = {
  base: () => ['communityPosts'] as const,
  all: (params: PostAllGetRequestParams) => [...COMMUNITY_POSTS_QUERY_KEY.base(), 'all', params] as const,
  byBoard: (params: PostGetRequestParams) => [...COMMUNITY_POSTS_QUERY_KEY.base(), 'byBoard', params] as const,
  hot: (params: PostHotGetRequestParams) => [...COMMUNITY_POSTS_QUERY_KEY.base(), 'hot', params] as const,
}
