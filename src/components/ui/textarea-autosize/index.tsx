import { SystemStyleObject } from '@styled-stytem/types'
import { forwardRef, memo } from 'react'
import { TextareaAutosizeProps } from 'react-textarea-autosize'
import TextareaAutosize from 'react-textarea-autosize'

import { useTextArea } from '@/util/useTextArea'

type MemoizedTextAreaAutosizeProps = TextareaAutosizeProps & { css?: SystemStyleObject }
export const MemoizedTextAreaAutosize = memo(
  forwardRef<HTMLTextAreaElement, MemoizedTextAreaAutosizeProps>(({ className, ...props }, ref) => {
    const { value, onChange } = useTextArea(props.value?.toString() ?? '')
    const parentControlled = props.value !== undefined && props.onChange !== undefined
    return (
      <TextareaAutosize
        {...props}
        ref={ref}
        value={parentControlled ? props.value : value}
        onChange={parentControlled ? props.onChange : onChange}
        className={className}
      />
    )
  }),
)
