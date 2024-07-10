import { css } from '@styled-stytem/css'

import { useGetBoard } from '@/api/hooks/community'

const CommunityPage = () => {
  const { data: boardList } = useGetBoard()

  return (
    <div className={css({ display: 'flex', flexDir: 'column', alignItems: 'center' })}>
      <h1>커뮤니티입니다</h1>
      <div>
        <h2>게시판 목록</h2>
        {boardList.map(val => (
          <div>{val.name}</div>
        ))}
      </div>
    </div>
  )
}

export default CommunityPage
