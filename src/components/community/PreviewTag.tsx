import { css } from '@styled-stytem/css'
import { tag } from '@styled-stytem/recipes'
import { BookText, LucideProps, MessageCircleQuestion, Users } from 'lucide-react'

type PreviewType = 'question' | 'information' | 'community'
const previewTagConfig: Record<
  PreviewType,
  { text: string; svg: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>> }
> = {
  question: { text: 'Question Board', svg: MessageCircleQuestion },
  information: { text: 'Information Board', svg: BookText },
  community: { text: 'Community Board', svg: Users },
}

interface PreviewTagProps {
  preview: PreviewType
}
const PreviewTag = ({ preview }: PreviewTagProps) => {
  const { text, svg: SvgIcon } = previewTagConfig[preview]
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
