import { css } from '@styled-system/css'

const SurveyLink = () => {
  return (
    <a
      className={css({
        w: 'fit-content',
        bg: 'red.3',
        color: 'white',
        p: 2,
        rounded: 7,
        _hover: { bg: 'red.2' },
        fontWeight: 500,
        transition: 'all 0.2s',
        fontSize: 14,
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
