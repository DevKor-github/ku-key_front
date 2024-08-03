import { css } from '@styled-stytem/css'

import DummyImg from '@/assets/DummyImg.jpg'
import Post from '@/components/community/Post'
import SectionTitle from '@/components/community/SectionTitle'
import SearchBox from '@/components/timetable/SearchBox'

const CommunitySearch = () => {
  const onSubmit = (searchParam: string) => {
    console.log(searchParam)
  }
  return (
    <div className={css({ display: 'flex', flexDir: 'column' })}>
      <SearchBox
        placeholder="Search posts from entire board"
        onSubmit={onSubmit}
        cssProps={{ width: 608, borderRadius: '50px' }}
      />
      <SectionTitle title="View recent posts" description="Check out our recent posts" link="/community/board" />
      <div className={css({ display: 'flex', mt: 20, flexDir: 'column', gap: '50px', mb: 25 })}>
        <Post />
        <Post img={DummyImg} />
        <Post />
        <Post img={DummyImg} />
        <Post />
      </div>
    </div>
  )
}

export default CommunitySearch
