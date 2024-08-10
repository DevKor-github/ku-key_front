import { ClubInterface } from '@/types/club'

interface ClubCardProps {
  clubData: ClubInterface
}
const ClubCard = ({ clubData }: ClubCardProps) => {
  return <div>{clubData.name}</div>
}

export default ClubCard
