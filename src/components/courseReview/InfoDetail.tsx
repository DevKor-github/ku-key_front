import { css } from '@styled-stytem/css'

import RatePercentage from '@/components/courseReview/RatePercentage'
import {
  attendaceArray,
  classLevelArray,
  learnAmountArray,
  teachingSkillsArray,
  teamProjectArray,
} from '@/util/reviewUtil'

const LabelStyle = css({
  fontWeight: 700,
  fontSize: 14,
  color: 'lightGray.1',
})
const StateStyle = css({
  fontWeight: 500,
  fontSize: 18,
  color: 'darkGray.2',
})
const ScoreBoxStyle = css({
  flexBasis: 0,
  flexGrow: 1,
  display: 'flex',
  flexDir: 'column',
  alignItems: 'flex-start',
  gap: 5,
})

interface InfoDetailProps {
  hasReview: boolean
  attendance?: number
  classLevel?: number
  teamProject?: number
  amountLearned?: number
  teachingSkills?: number
}
const InfoDetail = ({
  hasReview,
  attendance,
  classLevel,
  teamProject,
  amountLearned,
  teachingSkills,
}: InfoDetailProps) => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        gap: 5,
        rounded: 10,
        boxShadow: '0px 0px 4px 0px #00000040',
        px: 5,
        pt: 5,
        pb: 11,
      })}
    >
      <div className={css({ display: 'flex', gap: 5, alignItems: 'center' })}>
        <span className={LabelStyle}>Attendance</span>
        <span className={StateStyle}>{hasReview ? attendaceArray[attendance!] : 'No Infomation'}</span>
      </div>
      <div className={css({ display: 'flex', flexDir: 'column', gap: 10 })}>
        <div className={css({ display: 'flex' })}>
          <div className={ScoreBoxStyle}>
            <div className={LabelStyle}>Class Level</div>
            <div className={css({ display: 'flex', gap: 2.5, alignItems: 'center' })}>
              <span className={StateStyle}>{hasReview ? classLevelArray[classLevel!] : 'No Infomation'}</span>
              <RatePercentage rate={classLevel ?? 0} total={3} />
            </div>
          </div>
          <div className={ScoreBoxStyle}>
            <div className={LabelStyle}>Difficulty of Team Project</div>
            <div className={css({ display: 'flex', gap: 2.5, alignItems: 'center' })}>
              <span className={StateStyle}>{hasReview ? teamProjectArray[teamProject!] : 'No Infomation'}</span>
              <RatePercentage rate={teamProject ?? 0} total={4} />
            </div>
          </div>
        </div>
        <div className={css({ display: 'flex' })}>
          <div className={ScoreBoxStyle}>
            <div className={LabelStyle}>Class Level</div>
            <div className={css({ display: 'flex', gap: 2.5, alignItems: 'center' })}>
              <span className={StateStyle}>{hasReview ? learnAmountArray[amountLearned!] : 'No Infomation'}</span>
              <RatePercentage rate={amountLearned ?? 0} total={3} />
            </div>
          </div>
          <div className={ScoreBoxStyle}>
            <div className={LabelStyle}>Difficulty of Team Project</div>
            <div className={css({ display: 'flex', gap: 2.5, alignItems: 'center' })}>
              <span className={StateStyle}>{hasReview ? teachingSkillsArray[teachingSkills!] : 'No Infomation'}</span>
              <RatePercentage rate={teachingSkills ?? 0} total={4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoDetail
