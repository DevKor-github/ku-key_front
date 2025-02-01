export const MEDIA_QUERY_MAP = {
  xsDown: '(max-width: 390px)',
  smDown: '(max-width: 580px)',
  mdDown: '(max-width: 900px)',
  lgDown: '(max-width: 1200px)',
} as const

export const b = {
  xsDonw: `screen and ${MEDIA_QUERY_MAP.xsDown}`,
  smDown: `screen and ${MEDIA_QUERY_MAP.smDown}`,
  mdDown: `screen and ${MEDIA_QUERY_MAP.mdDown}`,
  lgDown: `screen and ${MEDIA_QUERY_MAP.lgDown}`,
}
