import { css } from '@styled-stytem/css'
import { tag } from '@styled-stytem/recipes'
import { BookText, LucideProps, MessageCircleQuestion, Users } from 'lucide-react'

import { BoardType } from '@/types/community'

const previewTagConfig: Record<
  BoardType,
  { text: string; svg: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>> }
> = {
  'Question Board': { text: 'Question Board', svg: MessageCircleQuestion },
  'Information Board': { text: 'Information Board', svg: BookText },
  'Community Board': { text: 'Community Board', svg: Users },
}

interface PreviewTagProps {
  boardName: BoardType
}
const PreviewTag = ({ boardName }: PreviewTagProps) => {
  const { text, svg: SvgIcon } = previewTagConfig[boardName]
  return (
    <div className={css({ display: 'flex', pl: 2.5, alignItems: 'flex-start' })}>
      <div className={tag()}>
        <SvgIcon size={16} />
        <p className={css({ fontSize: 12, fontWeight: 700 })}>{text}</p>
      </div>
    </div>
  )
}

export default PreviewTag
