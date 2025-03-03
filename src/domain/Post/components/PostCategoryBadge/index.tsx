import { useMemo } from 'react'
import { LuBookText, LuMessageCircleQuestion, LuUsers } from 'react-icons/lu'
import { match } from 'ts-pattern'

import * as s from './style.css'

import { Typography } from '@/ui/Typography'

type Props = {
  boarName: string
}

const PostCategoryBadge = ({ boarName }: Props) => {
  const svg = useMemo(
    () =>
      match(boarName)
        .with('Community Board', () => <LuUsers />)
        .with('Question Board', () => <LuMessageCircleQuestion />)
        .with('Information Board', () => <LuBookText />)
        .otherwise(() => <LuBookText />),
    [boarName],
  )
  return (
    <div className={s.Wrapper}>
      {svg}
      <Typography mobileTypography="miniTag1M" color="darkGray1">
        {boarName}
      </Typography>
    </div>
  )
}

export default PostCategoryBadge
