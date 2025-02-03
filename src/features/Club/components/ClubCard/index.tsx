import * as s from './style.css'

import Checkmark from '@/assets/icon/Checkmark'
import Handshake from '@/assets/icon/Handshake'
import HeartIcon from '@/assets/icon/HeartIcon'
import { Responsive } from '@/common/Responsive'
import ContactButton from '@/features/Club/components/ClubCard/ContactButton'
import { ClubInterface } from '@/types/club'
import upperCaseHighlight from '@/util/upperCaseHighlight'

interface Props {
  clubData: ClubInterface
  handleLikeClick: (clubId: number) => void
}
const ClubCard = ({ clubData, handleLikeClick }: Props) => {
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
              <Responsive
                desktop={
                  <>
                    <p>Regular Meeting | {upperCaseHighlight(clubData.regularMeeting)}</p>
                    <p>Recruitment Period | {upperCaseHighlight(clubData.recruitmentPeriod)}</p>
                  </>
                }
                mobile={
                  <>
                    <div className={s.MobileSchedule}>
                      <span className={s.MobileScheduleIcon}>
                        <Checkmark />
                      </span>
                      <p className={s.MobileScheduleText}>{clubData.recruitmentPeriod}</p>
                    </div>
                    <div className={s.MobileSchedule}>
                      <span className={s.MobileScheduleIcon}>
                        <Handshake />
                      </span>
                      <p className={s.MobileScheduleText}>{clubData.regularMeeting}</p>
                    </div>
                  </>
                }
              />
            </div>
          </div>
          <div className={s.Footer}>
            <div className={s.Description}>{clubData.description}</div>
            <Responsive
              desktop={
                <div>
                  {clubData.instagramLink && <ContactButton type="instagram" url={clubData.instagramLink} />}
                  {clubData.youtubeLink && <ContactButton type="youtube" url={clubData.youtubeLink} />}
                </div>
              }
            />
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
