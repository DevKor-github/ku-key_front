import { atomWithStorage, createJSONStorage } from 'jotai/utils'

import { UserCredential } from '@/types/user'

export const userCredentialAtom = atomWithStorage<UserCredential | null>(
  'userCredential',
  null,
  createJSONStorage(() => localStorage),
  { getOnInit: true },
)
