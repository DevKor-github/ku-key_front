import { clubTag } from '@styled-stytem/recipes'

const ClubTag = ({ tagName }: { tagName: string }) => {
  return <div className={clubTag()}>{tagName}</div>
}

export default ClubTag
