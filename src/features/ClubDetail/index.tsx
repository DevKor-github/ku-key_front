import { LinkIcon } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'

import * as s from './style.css'

import HeartIcon from '@/assets/icon/HeartIcon'
import Toast from '@/components/ui/toast'
import { usePostClubLike } from '@/domain/Club/hooks/usePostClubLike'
import { useReadClubDetail } from '@/domain/Club/hooks/useReadClubDetail'
import ContactButton from '@/features/Club/components/ClubCard/ContactButton'
import ClubSchedule from '@/features/ClubSchedule'
import { USER_AUTH_MESSAGE } from '@/lib/messages/common'
import { useAuth } from '@/util/auth/useAuth'
import { useDeepCompareCallback } from '@/util/hooks/useDeepCompare'

const ClubDetail = () => {
  const isLogin = useAuth().authState ?? false
  const { clubId } = useParams()

  const { data: clubData } = useReadClubDetail(Number(clubId))
  const { mutate: likeClub } = usePostClubLike()

  const handleLikeClick = useDeepCompareCallback(() => {
    if (isLogin) likeClub({ clubId: Number(clubId) })
    else toast.custom(() => <Toast message={USER_AUTH_MESSAGE.REQUIRE_LOGIN} type="error" />)
  }, [likeClub, isLogin])

  return (
    <div className={s.Layout}>
      <div className={s.Wrapper}>
        <img className={s.Image} src={clubData.imageUrl[0]} alt={clubData.name} /> {/* TODO: IMG array로 만들기 */}
        <div className={s.ContentsWrapper}>
          <div className={s.ContentsHeader}>
            <div className={s.TitleWrapper}>
              <div className={s.Category}>{clubData.summary}</div>
              <h1 className={s.Title}>{clubData.name}</h1>
            </div>
            <button className={s.LikeButton({ clicked: clubData.isLiked })} onClick={() => handleLikeClick()}>
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
    </div>
  )
}
export default ClubDetail
