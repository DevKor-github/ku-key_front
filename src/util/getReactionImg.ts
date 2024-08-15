import AngryTagImg from '@/assets/AngryTagImg.jpg'
import FunnyTagImg from '@/assets/FunnyTagImg.jpg'
import LikeTagImg from '@/assets/LikeTagImg.jpg'
import SadTagImg from '@/assets/SadTagImg.jpg'
import SurprisedTagImg from '@/assets/SurprisedTagImg.jpg'
import { ReactionType } from '@/types/community'

const reactionImgConfig: Record<ReactionType, string> = {
  angry: AngryTagImg,
  good: LikeTagImg,
  funny: FunnyTagImg,
  sad: SadTagImg,
  amazing: SurprisedTagImg,
}

export const getReactionImg = (reaction: ReactionType) => reactionImgConfig[reaction]
