import { css } from '@styled-system/css'

const SurveyLink = () => {
  return (
    <a
      className={css({
        textDecoration: 'underline',
      })}
      href={import.meta.env.VITE_API_GOOGLE_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      Please join our Survey!
    </a>
  )
}

export default SurveyLink
