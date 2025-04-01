import { useMemo } from 'react'
import { LuBookText, LuMessageCircleQuestion, LuUsers } from 'react-icons/lu'
import { match } from 'ts-pattern'

import * as s from './style.css'

import { Typography } from '@/ui/Typography'

type Props = {
  boardName: string
}

const PostCategoryBadge = ({ boardName }: Props) => {
  const svg = useMemo(
    () =>
      match(boardName)
        .with('Community Board', () => <LuUsers />)
        .with('Question Board', () => <LuMessageCircleQuestion />)
        .with('Information Board', () => <LuBookText />)
        .otherwise(() => <LuBookText />),
    [boardName],
  )
  return (
    <div className={s.Wrapper}>
      {svg}
      <Typography mobileTypography="miniTag1M" color="darkGray1">
        {boardName}
      </Typography>
    </div>
  )
}

export default PostCategoryBadge
