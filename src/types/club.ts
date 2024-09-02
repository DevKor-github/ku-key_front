export interface ClubProfileProps {
  img: string
  name: string
  description: string
  clubDivision: string
}
export interface ClubInterface {
  clubId: number
  name: string
  summary: string
  regularMeeting: string
  recruitmentPeriod: string
  description: string
  imageUrl: string
  likeCount: number
  isLiked: boolean
  instagramLink: string | null
  youtubeLink: string | null
}
