import { atomWithStorage, createJSONStorage } from 'jotai/utils'
import { atom } from 'jotai/vanilla'

import { CommentProps, ImageProps, PostViewProps, Reaction, User } from '@/types/community'

export const initialPostData = {
  id: 0,
  isMyPost: false,
  title: '',
  content: '',
  createdAt: new Date(),
  updatedAt: new Date(),
  user: {
    username: '',
    isAnonymous: true,
    isDeleted: false,
    character: {
      type: 'character1',
      level: null,
    },
  } as User,
  views: 0,
  scrapCount: 0,
  myScrap: false,
  reactionCount: {} as Reaction,
  myReaction: undefined,
  comments: [] as CommentProps[],
  imageDirs: [] as ImageProps[],
}
export const postAtom = atom<PostViewProps>(initialPostData)

export const persistedPostData = atomWithStorage<PostViewProps>(
  'persistedPostData',
  initialPostData,
  createJSONStorage(() => localStorage),
  { getOnInit: true },
)
