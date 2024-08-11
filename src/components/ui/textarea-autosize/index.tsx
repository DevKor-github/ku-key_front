import { SystemStyleObject } from '@styled-stytem/types'
import { memo } from 'react'
import { TextareaAutosizeProps } from 'react-textarea-autosize'
import TextareaAutosize from 'react-textarea-autosize'

type MemoizedTextAreaAutosizeProps = TextareaAutosizeProps & { css?: SystemStyleObject }
export const MemoizedTextAreaAutosize = memo(({ className, ...props }: MemoizedTextAreaAutosizeProps) => {
  return <TextareaAutosize {...props} className={className} />
})
