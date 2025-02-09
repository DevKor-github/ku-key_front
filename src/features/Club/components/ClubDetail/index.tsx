import { LinkIcon } from 'lucide-react'
import { useLocation } from 'react-router-dom'

import * as s from './style.css'

import HeartIcon from '@/assets/icon/HeartIcon'
import ContactButton from '@/features/Club/components/ClubCard/ContactButton'
import ClubSchedule from '@/features/Club/components/ClubSchedule'
import { ClubInterface } from '@/types/club'

const ClubDetail = () => {
  // const { clubId } = useParams()
  // TODO: 추후에 단일 동아리 api 파서 옮기기
  const { clubData } = useLocation().state as { clubData: ClubInterface }

  return (
    <div className={s.Wrapper}>
      <img className={s.Image} src={clubData.imageUrl} alt={clubData.name} />
      <div className={s.ContentsWrapper}>
        <div className={s.ContentsHeader}>
          <div className={s.TitleWrapper}>
            <div className={s.Category}>{clubData.summary}</div>
            <h1 className={s.Title}>{clubData.name}</h1>
          </div>
          <button className={s.LikeButton}>
            <HeartIcon />
          </button>
        </div>
        <div className={s.Contents}>
          <div className={s.ScheduleWrapper}>
            <ClubSchedule recruitmentPeriod={clubData.recruitmentPeriod} regularMeeting={clubData.regularMeeting} />
          </div>
          <div className={s.Description}>{clubData.description}</div>
        </div>
        <div className={s.ContactsWrapper}>
          <div className={s.ContactsLabel}>
            <LinkIcon size={16} />
            <p>Link</p>
          </div>
          <div className={s.Contacts}>
            {clubData.instagramLink && <ContactButton type="instagram" url={clubData.instagramLink} />}
            {clubData.youtubeLink && <ContactButton type="youtube" url={clubData.youtubeLink} />}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ClubDetail
