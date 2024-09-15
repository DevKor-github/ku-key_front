import { boardTag, BoardTagVariantProps } from '@styled-system/recipes'
import { BookText, LucideProps, MessageCircleQuestion, Users } from 'lucide-react'

import { BoardType } from '@/types/community'

const boardTagConfig: Record<
  BoardType,
  { text: string; svg: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>> }
> = {
  'Question Board': { text: 'Question Board', svg: MessageCircleQuestion },
  'Information Board': { text: 'Information Board', svg: BookText },
  'Community Board': { text: 'Community Board', svg: Users },
}

interface BoardTagProps {
  boardName: BoardType
  variant: BoardTagVariantProps['variant']
}

const BoardTag = ({ boardName, variant }: BoardTagProps) => {
  const { text, svg: SvgIcon } = boardTagConfig[boardName]

  return (
    <div className={boardTag({ variant })}>
      <SvgIcon size={variant === 'default' ? 24 : 16} />
      <p>{text}</p>
    </div>
  )
}

export default BoardTag
