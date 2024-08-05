import { css } from '@styled-stytem/css'

import DummyImg from '@/assets/DummyImg.jpg'
import PostPreview from '@/components/community/Post'
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
        <PostPreview
          description="I I live in South Korea, and have learned English since about 14 and a half years old. I am currently 18 years
          old. I am a high school student"
        />
        <PostPreview
          img={DummyImg}
          description="I I live in South Korea, and have learned English since about 14 and a half years old. I am currently 18 years
          old. I am a high school student"
        />
        <PostPreview
          description="I I live in South Korea, and have learned English since about 14 and a half years old. I am currently 18 years
          old. I am a high school student"
        />
      </div>
    </div>
  )
}

export default CommunitySearch
