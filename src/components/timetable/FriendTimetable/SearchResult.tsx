import { css } from '@styled-stytem/css'
import { Dot } from 'lucide-react'
import { memo } from 'react'

import { useAddFriend } from '@/api/hooks/friends'
import { GetSearchUserResponse } from '@/api/types/friends'

interface SearchResultProps {
  data: GetSearchUserResponse | undefined
}

const SearchResult = memo(({ data }: SearchResultProps) => {
  const { mutate: addFriend } = useAddFriend()
  return (
    <div className={css({ display: 'flex', flexDir: 'column', gap: 5 })}>
      <h2 className={css({ fontWeight: 700, fontSize: 20, color: 'darkGray.1' })}>Search results</h2>
      {data && (
        <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
          <div className={css({ display: 'flex', gap: 5 })}>
            <img
              className={css({ h: 17, w: 17, rounded: 10 })}
              src="https://previews.123rf.com/images/avs1/avs12006/avs1200600713/149429617-%ED%88%AC%EB%AA%85-%EB%B0%B0%EA%B2%BD%EC%9E%85%EB%8B%88%EB%8B%A4-%ED%88%AC%EB%AA%85-%EA%B7%B8%EB%A6%AC%EB%93%9C-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98.jpg"
              alt="profile"
            />
            <div className={css({ display: 'flex', flexDir: 'column', justifyContent: 'space-between' })}>
              <div className={css({ fontWeight: 600, fontSize: 16 })}>{data.username}</div>
              <div
                className={css({
                  display: 'flex',
                  fontSize: 14,
                  fontWeight: 500,
                  alignItems: 'center',
                  color: 'darkGray.1',
                })}
              >
                <div>Korea UNIV</div>
                <Dot />
                <div>{data.major ? data.major : 'Major'}</div>
              </div>
              <div className={css({ fontWeight: 400, fontSize: 12, color: 'darkGray.2' })}>
                Language | {data.language ? data.language : 'Language'}
              </div>
            </div>
          </div>
          <button
            className={css({
              bgColor: 'darkGray.1',
              fontWeight: 700,
              fontSize: 12,
              color: 'white',
              px: 2.5,
              py: 1,
              rounded: 'full',
              cursor: 'pointer',
            })}
            onClick={() => {
              addFriend({ toUsername: data.username })
            }}
          >
            Add friend
          </button>
        </div>
      )}
    </div>
  )
})

export default SearchResult
