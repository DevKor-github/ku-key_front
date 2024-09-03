import AngryTagImg from '@/assets/AngryTagImg.png'
import FunnyTagImg from '@/assets/FunnyTagImg.png'
import LikeTagImg from '@/assets/LikeTagImg.png'
import SadTagImg from '@/assets/SadTagImg.png'
import SurprisedTagImg from '@/assets/SurprisedTagImg.png'
import { ReactionType } from '@/types/community'

const reactionImgConfig: Record<ReactionType, string> = {
  angry: AngryTagImg,
  good: LikeTagImg,
  funny: FunnyTagImg,
  sad: SadTagImg,
  amazing: SurprisedTagImg,
}

export const getReactionImg = (reaction: ReactionType) => reactionImgConfig[reaction]
