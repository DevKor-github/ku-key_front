// import { css } from '@styled-stytem/css'
// import { useCallback } from 'react'
// import { useNavigate } from 'react-router-dom'

// import { useGetHotPosts } from '@/api/hooks/community'
// import PostTextPreview from '@/components/community/PostTextPreview'

// const HotBoardHorizontalPreview = () => {
//   const { data: hotPosts } = useGetHotPosts()
//   const navigate = useNavigate()
//   const handleNavigate = useCallback(
//     (id: number, boardName: string) => navigate(`/community/${boardName}/post/${id}`),
//     [navigate],
//   )
//   const firstColumn = hotPosts.data.slice(0, 3)
//   const secondColumn = hotPosts.data.slice(3, 6)
//   return (
//     <div
//       className={css({
//         display: 'flex',
//         maxW: '1536px',

//         flexDir: 'column',
//         gap: '30px',
//         alignItems: 'flex-start',
//         overflow: 'hidden',
//         border: '1px solid #E5E5E5',
//         alignSelf: 'center',
//       })}
//     >
//       <div
//         className={css({
//           display: 'flex',
//           w: 'min-content',
//           maxW: '1536px',
//           py: 0.5,
//           alignItems: 'center',
//           gap: '30px',
//           alignSelf: 'stretch',
//         })}
//       >
//         {firstColumn.map(post => (
//           <PostTextPreview
//             title={post.title}
//             createdAt={post.createdAt}
//             user={post.user}
//             variant="default"
//             handleNavigate={() => handleNavigate(post.id, post.boardName.split(' ')[0].toLowerCase())}
//           />
//         ))}
//       </div>
//       <div
//         className={css({
//           display: 'flex',
//           w: 'min-content',
//           maxW: '1536px',
//           py: 0.5,
//           alignItems: 'center',
//           gap: '30px',
//           alignSelf: 'stretch',
//         })}
//         style={{ left: -400 }}
//       >
//         {secondColumn.map(post => (
//           <PostTextPreview
//             title={post.title}
//             createdAt={post.createdAt}
//             user={post.user}
//             variant="default"
//             handleNavigate={() => handleNavigate(post.id, post.boardName.split(' ')[0].toLowerCase())}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default HotBoardHorizontalPreview
