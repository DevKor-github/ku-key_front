import { css } from '@styled-system/css'

import { ClubInterface } from '@/types/club'
import upperCaseHighlight from '@/util/upperCaseHighlight'

interface Props {
  clubData: ClubInterface
}
const MobileClubCardContents = ({ clubData }: Props) => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        justifyContent: 'space-between',
        gap: 1,
        py: 1,
      })}
    >
      <div className={css({ display: 'flex', flexDir: 'column', gap: 1.5 })}>
        <div className={css({ display: 'flex', flexDir: 'column' })}>
          <h2 className={css({ fontSize: 15, lineHeight: 1.2, fontWeight: 500, color: 'black' })}>{clubData.name}</h2>
          <p className={css({ fontSize: 10, fontWeight: 400, lineHeight: 1.2, color: 'darkGray.1' })}>
            {clubData.summary}
          </p>
        </div>
        <div
          className={css({
            display: 'flex',
            flexDir: 'column',
            gap: 0.5,
            fontSize: 9,
            fontWeight: 400,
            lineHeight: 1.2,
            '& p': {
              lineClamp: 1,
            },
          })}
        >
          <p>Regular Meeting | {upperCaseHighlight(clubData.regularMeeting)}</p>
          <p>Recruitment Period | {upperCaseHighlight(clubData.recruitmentPeriod)}</p>
        </div>
      </div>
      <p
        className={css({
          fontWeight: 400,
          color: 'darkGray.1',
          fontSize: 9,
          lineClamp: 2,
          lineHeight: 1.2,
        })}
      >
        {clubData.description}
      </p>
    </div>
  )
}

export default MobileClubCardContents
