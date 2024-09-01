import { css } from '@styled-stytem/css'

import * as Characters from '@/components/ui/profile/profile-img'
import { CharacterType, User } from '@/types/community'
interface ProfileProps extends Pick<User, 'isAnonymous' | 'isDeleted' | 'character'> {
  onlyTitle: boolean
}

const characterConfig: Record<CharacterType, Record<number, string>> = {
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

const bgConfig: Record<CharacterType, string> = {
  character1: '#B8BEDDF4',
  character2: '#B1EBF2',
  character3: '#FFCFCF',
  character4: '#D2F4B8',
  character5: '#939393',
  default: '#D9D9D9',
}
const Profile = ({ isAnonymous, isDeleted, character, onlyTitle }: ProfileProps) => {
  const profileImg = characterConfig[character.type][character.level ?? 1]
  const bgColor = bgConfig[character.type]
  return (
    <img
      src={isDeleted ? Characters.CharacterDeleted : isAnonymous ? Characters.CharacterDefault : profileImg}
      alt="Profile"
      className={css({ w: onlyTitle ? 15 : 20, h: onlyTitle ? 15 : 20, rounded: 'full' })}
      style={{ backgroundColor: bgColor }}
    />
  )
}

export default Profile
