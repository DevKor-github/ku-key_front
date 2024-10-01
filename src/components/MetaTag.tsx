import { Helmet } from 'react-helmet-async'

interface MetaTagProps {
  title: string
  description?: string
  keywords?: string
  imgSrc?: string
}
const MetaTag = ({
  title,
  description = 'KU-key is a service designed to help international students on exchange to Korea University have a more convenient school life. Meet friends in KU-key and manage your school life conveniently!',
  keywords,
  imgSrc = 'https://kukeyrun.s3.amazonaws.com/fe/metaImg.jpg',
}: MetaTagProps) => {
  const adjKeywords = `${keywords === undefined ? '' : `${keywords}, `}exchange student, Korea University, KU, KU-key, kukey, Korea Univ, 고려대학교, 쿠키, exchange, timetable, everytime`

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={adjKeywords} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgSrc} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgSrc} />
      <meta property="twitter:image:width" content="1200" />
      <meta property="twitter:image:height" content="630" />
    </Helmet>
  )
}

export default MetaTag
