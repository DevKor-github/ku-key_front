import { atom } from 'jotai/vanilla'

import { CommentProps, ImageProps, PostViewProps, Reaction, User } from '@/types/community'

export const initialPostData = {
  id: 0,
  isMyPost: false,
  title: '',
  content: '',
  createdAt: new Date(),
  updatedAt: new Date(),
  user: { username: '', profileImgUrl: '' } as User,
  views: 0,
  scrapCount: 0,
  myScrap: false,
  reactionCount: {} as Reaction,
  myReaction: undefined,
  comments: [] as CommentProps[],
  imageDirs: [] as ImageProps[],
}
export const postAtom = atom<PostViewProps>(initialPostData)

export const postEditAtom = atom<PostViewProps>(initialPostData)
