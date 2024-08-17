import { SystemStyleObject } from '@styled-stytem/types'
import { forwardRef, memo } from 'react'
import { TextareaAutosizeProps } from 'react-textarea-autosize'
import TextareaAutosize from 'react-textarea-autosize'

import { useTextArea } from '@/util/useTextArea'

type MemoizedTextAreaAutosizeProps = TextareaAutosizeProps & { css?: SystemStyleObject }
export const MemoizedTextAreaAutosize = memo(
  forwardRef<HTMLTextAreaElement, MemoizedTextAreaAutosizeProps>(({ className, ...props }, ref) => {
    const { value, onChange } = useTextArea('')
    return <TextareaAutosize value={value} onChange={onChange} className={className} ref={ref} {...props} />
  }),
)
