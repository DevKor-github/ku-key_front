import * as Characters from '@/components/ui/profile/profile-img'
import { CharacterType } from '@/types/community'

export const characterConfig: Record<CharacterType, Record<number, string>> = {
  character1: {
    1: Characters.Character1Lv1,
    2: Characters.Character1Lv2,
    3: Characters.Character1Lv3,
    4: Characters.Character1Lv4,
    5: Characters.Character1Lv5,
  },
  character2: {
    1: Characters.Character2Lv1,
    2: Characters.Character2Lv2,
    3: Characters.Character2Lv3,
    4: Characters.Character2Lv4,
    5: Characters.Character2Lv5,
  },
  character3: {
    1: Characters.Character3Lv1,
    2: Characters.Character3Lv2,
    3: Characters.Character3Lv3,
    4: Characters.Character3Lv4,
    5: Characters.Character3Lv5,
  },
  character4: {
    1: Characters.Character4Lv1,
    2: Characters.Character4Lv2,
    3: Characters.Character4Lv3,
    4: Characters.Character4Lv4,
    5: Characters.Character4Lv5,
  },
  character5: {
    1: Characters.Character5Lv1,
    2: Characters.Character5Lv2,
    3: Characters.Character5Lv3,
    4: Characters.Character5Lv4,
    5: Characters.Character5Lv5,
  },
  default: {
    1: Characters.CharacterDefault,
  },
}
