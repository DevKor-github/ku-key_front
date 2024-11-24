import { css } from '@styled-system/css'

import ContactButton from '@/components/club/ContactButton'
import { ClubInterface } from '@/types/club'
import upperCaseHighlight from '@/util/upperCaseHighlight'

interface Props {
  clubData: ClubInterface
}
const DesktopClubCardContents = ({ clubData }: Props) => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        justifyContent: 'space-between',
        gap: 3,
      })}
    >
      <div className={css({ display: 'flex', flexDir: 'column', gap: { base: 4, mdDown: 2 } })}>
        <div className={css({ display: 'flex', flexDir: 'column', gap: 1.5 })}>
          <p className={css({ fontSize: { base: 18, mdDown: 12 } })}>{clubData.summary}</p>
          <h2 className={css({ fontSize: { base: 30, mdDown: 18 }, fontWeight: 700 })}>{clubData.name}</h2>
        </div>
        <div
          className={css({
            display: 'flex',
            flexDir: 'column',
            gap: 1.5,
            fontSize: { base: 16, mdDown: 12 },
            fontWeight: 600,
          })}
        >
          <p>Regular Meeting | {upperCaseHighlight(clubData.regularMeeting)}</p>
          <p>Recruitment Period | {upperCaseHighlight(clubData.recruitmentPeriod)}</p>
        </div>
        <p
          className={css({
            fontWeight: 400,
            color: 'darkGray.1',
            fontSize: 12,
            maxW: '580px',
            lineClamp: 4,
          })}
        >
          {clubData.description}
        </p>
      </div>
      <div className={css({ display: 'flex', gap: 2 })}>
        {clubData.instagramLink && <ContactButton type="instagram" url={clubData.instagramLink} />}
        {clubData.youtubeLink && <ContactButton type="youtube" url={clubData.youtubeLink} />}
      </div>
    </div>
  )
}

export default DesktopClubCardContents
