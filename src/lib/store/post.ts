import { atom } from 'jotai'

import { CommentProps, ImageProps, Reaction } from '@/types/community'

export const postAtom = atom({
  id: 0,
  isMyPost: false,
  title: '',
  content: '',
  createdAt: new Date(),
  updatedAt: new Date(),
  username: '',
  views: 0,
  scrapCount: 0,
  reaction: {} as Reaction,
  comments: [] as CommentProps[],
  imageDirs: [] as ImageProps[],
})
