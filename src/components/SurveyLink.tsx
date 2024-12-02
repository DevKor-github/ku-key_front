import { css } from '@styled-system/css'

const SURVEY_LINK = 'https://forms.gle/mCF465PCq9VE7mKw5'

const SurveyLink = () => {
  return (
    <a
      className={css({
        textDecoration: 'underline',
      })}
      href={SURVEY_LINK}
      target="_blank"
      rel="noopener noreferrer"
    >
      Please join our Survey!
    </a>
  )
}

export default SurveyLink
