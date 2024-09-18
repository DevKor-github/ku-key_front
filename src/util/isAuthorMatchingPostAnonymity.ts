import { match } from 'ts-pattern'

interface IsAuthorMatchingPostAnonymity {
  isPostAuthorAnonymous: boolean
  isAnonymous: boolean
  isAuthor: boolean
}
export const isAuthorMatchingPostAnonymity = (props: IsAuthorMatchingPostAnonymity) => {
  return match(props)
    .with({ isAuthor: true, isPostAuthorAnonymous: true, isAnonymous: true }, () => true)
    .with({ isAuthor: true, isPostAuthorAnonymous: false, isAnonymous: false }, () => true)
    .otherwise(() => false)
}
