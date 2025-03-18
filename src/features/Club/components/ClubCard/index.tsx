import { Link } from 'react-router-dom'

import * as s from './style.css'

import HeartIcon from '@/assets/icon/HeartIcon'
import { Responsive } from '@/common/Responsive'
import ClubSchedule from '@/features/ClubSchedule'
import { ClubInterface } from '@/types/club'

interface Props {
  clubData: ClubInterface
  handleLikeClick: (clubId: number) => void
}
const ClubCard = ({ clubData, handleLikeClick }: Props) => {
  return (
    <div className={s.Wrapper}>
      <Link className={s.ContentsWrapper} to={`detail/${clubData.clubId}`}>
        <div className={s.ImageContainer}>
          <img className={s.Image} src={clubData.imageUrl} alt={clubData.name} />
          <Responsive
            desktop={
              <button
                className={s.DesktopLikeButton({ myLikes: clubData.isLiked })}
                onClick={event => {
                  event.preventDefault()
                  handleLikeClick(clubData.clubId)
                }}
              >
                <div className={s.HeartIcon({ myLikes: clubData.isLiked })}>
                  <HeartIcon />
                </div>
                {clubData.likeCount}
              </button>
            }
          />
        </div>
        <div className={s.DescriptionWrapper}>
          <div className={s.TitleWrapper}>
            <p className={s.Summary}>{clubData.summary}</p>
            <h2 className={s.Title}>{clubData.name}</h2>
          </div>
          <ClubSchedule recruitmentPeriod={clubData.recruitmentPeriod} regularMeeting={clubData.regularMeeting} />
          <div className={s.Description}>{clubData.description}</div>
        </div>
      </Link>
      <Responsive
        mobile={
          <button
            className={s.MobileLikeButton({ myLikes: clubData.isLiked })}
            onClick={event => {
              event.stopPropagation()
              handleLikeClick(clubData.clubId)
            }}
          >
            <div className={s.HeartIcon({ myLikes: clubData.isLiked })}>
              <HeartIcon />
            </div>
            <p>{clubData.likeCount}</p>
          </button>
        }
      />
    </div>
  )
}
export default ClubCard
