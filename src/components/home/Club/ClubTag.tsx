import { clubTag } from '@styled-system/recipes'

const ClubTag = ({ tagName }: { tagName: string }) => {
  return <div className={clubTag()}>{tagName}</div>
}

export default ClubTag
