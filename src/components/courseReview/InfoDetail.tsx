import { css, cx } from '@styled-stytem/css'
import { shadow } from '@styled-stytem/recipes'

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
  attendance: number
  classLevel: number
  teamProject: number
  amountLearned: number
  teachingSkills: number
}
const InfoDetail = ({ attendance, classLevel, teamProject, amountLearned, teachingSkills }: InfoDetailProps) => {
  return (
    <div
      className={cx(
        css({
          display: 'flex',
          flexDir: 'column',
          gap: 5,
          rounded: 10,
          px: 5,
          pt: 5,
          pb: 11,
        }),
        shadow(),
      )}
    >
      <div className={css({ display: 'flex', gap: 5, alignItems: 'center' })}>
        <span className={LabelStyle}>Attendance</span>
        <span className={StateStyle}>{attendaceArray[attendance]}</span>
      </div>
      <div className={css({ display: 'flex', flexDir: 'column', gap: 10 })}>
        <div className={css({ display: 'flex' })}>
          <div className={ScoreBoxStyle}>
            <div className={LabelStyle}>Class Level</div>
            <div className={css({ display: 'flex', gap: 2.5, alignItems: 'center' })}>
              <span className={StateStyle}>{classLevelArray[classLevel]}</span>
              <RatePercentage rate={classLevel} total={3} />
            </div>
          </div>
          <div className={ScoreBoxStyle}>
            <div className={LabelStyle}>Difficulty of Team Project</div>
            <div className={css({ display: 'flex', gap: 2.5, alignItems: 'center' })}>
              <span className={StateStyle}>{teamProjectArray[teamProject]}</span>
              <RatePercentage rate={teamProject} total={4} />
            </div>
          </div>
        </div>
        <div className={css({ display: 'flex' })}>
          <div className={ScoreBoxStyle}>
            <div className={LabelStyle}>Amount Learned</div>
            <div className={css({ display: 'flex', gap: 2.5, alignItems: 'center' })}>
              <span className={StateStyle}>{learnAmountArray[amountLearned]}</span>
              <RatePercentage rate={amountLearned} total={3} />
            </div>
          </div>
          <div className={ScoreBoxStyle}>
            <div className={LabelStyle}>Teaching Skills </div>
            <div className={css({ display: 'flex', gap: 2.5, alignItems: 'center' })}>
              <span className={StateStyle}>{teachingSkillsArray[teachingSkills]}</span>
              <RatePercentage rate={teachingSkills} total={4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoDetail
