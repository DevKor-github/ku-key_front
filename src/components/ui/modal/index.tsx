import { cx, RecipeVariantProps } from '@styled-stytem/css'
import { modalCard } from '@styled-stytem/recipes'
import { forwardRef } from 'react'

type ModalCardProps = React.HTMLAttributes<HTMLDivElement> & RecipeVariantProps<typeof modalCard>
const ModalCard = forwardRef<HTMLDivElement, ModalCardProps>(({ variant, className, children }, ref) => {
  return (
    <div ref={ref} className={cx(modalCard({ variant }), className)}>
      {children}
    </div>
  )
})

export default ModalCard
