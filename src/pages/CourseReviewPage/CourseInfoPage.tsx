import { useParams } from 'react-router-dom'

const CourseInfoPage = () => {
  const { courseCode, prof } = useParams()
  return (
    <div>
      {courseCode}, {prof} 리뷰
    </div>
  )
}

export default CourseInfoPage
