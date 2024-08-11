import { atom } from 'jotai'

import { CommentProps, ImageProps, Reaction, User } from '@/types/community'

export const postAtom = atom({
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
  myReaction: undefined as number | undefined,
  comments: [] as CommentProps[],
  imageDirs: [] as ImageProps[],
})
