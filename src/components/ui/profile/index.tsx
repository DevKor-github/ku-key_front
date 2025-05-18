import { css } from '@styled-system/css'

import { characterConfig } from '@/components/ui/profile/CharacterConfig'
import * as Characters from '@/components/ui/profile/profile-img'
import { CharacterType, User } from '@/types/community'

const bgConfig: Record<CharacterType, string> = {
  character1: '#B8BEDDF4',
  character2: '#B1EBF2',
  character3: '#FFCFCF',
  character4: '#D2F4B8',
  character5: '#939393',
  anonymous: '#D9D9D9',
  deleted: '#D9D9D9',
}
interface ProfileProps extends Pick<User, 'isAnonymous' | 'isDeleted' | 'character'> {
  onlyTitle: boolean
  bgWhite?: boolean
  size?: number
}

const Profile = ({ isAnonymous, isDeleted, character, onlyTitle, bgWhite, size = 20 }: ProfileProps) => {
  const profileImg = characterConfig[character.type][character.level ?? 1]
  const bgColor = bgConfig[character.type]

  const w = size ?? (onlyTitle ? 15 : 20)
  return (
    <img
      src={isDeleted ? Characters.CharacterDeleted : isAnonymous ? Characters.CharacterDefault : profileImg}
      alt="Profile"
      className={css({ w, h: w, rounded: 'full' })}
      style={{ backgroundColor: bgWhite ? 'white' : bgColor }}
    />
  )
}

export default Profile
