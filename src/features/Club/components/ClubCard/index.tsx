import * as s from './style.css'

import HeartIcon from '@/assets/icon/HeartIcon'
import ContactButton from '@/features/Club/components/ClubCard/ContactButton'
import { ClubInterface } from '@/types/club'
import { useMediaQueryByName } from '@/util/hooks/useMediaQueryByName'
import upperCaseHighlight from '@/util/upperCaseHighlight'

interface Props {
  clubData: ClubInterface
  handleLikeClick: (clubId: number) => void
}
const ClubCard = ({ clubData, handleLikeClick }: Props) => {
  const isDesktop = !useMediaQueryByName('smDown')

  return (
    <div className={s.Wrapper}>
      <button className={s.ContentsWrapper}>
        <img className={s.Image} src={clubData.imageUrl} alt={clubData.name} />
        <div className={s.DescriptionWrapper}>
          <div className={s.Header}>
            <div className={s.TitleWrapper}>
              <p className={s.Summary}>{clubData.summary}</p>
              <h2 className={s.Title}>{clubData.name}</h2>
            </div>
            <div className={s.ScheduleWrapper}>
              <p>Regular Meeting | {upperCaseHighlight(clubData.regularMeeting)}</p>
              <p>Recruitment Period | {upperCaseHighlight(clubData.recruitmentPeriod)}</p>
            </div>
          </div>
          <div className={s.Footer}>
            <div className={s.Description}>{clubData.description}</div>
            {isDesktop && (
              <div>
                {clubData.instagramLink && <ContactButton type="instagram" url={clubData.instagramLink} />}
                {clubData.youtubeLink && <ContactButton type="youtube" url={clubData.youtubeLink} />}
              </div>
            )}
          </div>
        </div>
      </button>
      <button className={s.LikeButton({ myLikes: clubData.isLiked })} onClick={() => handleLikeClick(clubData.clubId)}>
        <div className={s.HeartIcon({ myLikes: clubData.isLiked })}>
          <HeartIcon />
        </div>
        <p>{clubData.likeCount}</p>
      </button>
    </div>
  )
}
export default ClubCard
