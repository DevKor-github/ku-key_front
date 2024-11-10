import * as SheetPrimitive from '@radix-ui/react-dialog'
import { css, cx, RecipeVariantProps } from '@styled-system/css'
import { sheet } from '@styled-system/recipes'
import { X } from 'lucide-react'
import { forwardRef } from 'react'

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => <SheetPrimitive.Overlay className={cx(css({}), className)} {...props} ref={ref} />)
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

type SheetContentProps = React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> &
  RecipeVariantProps<typeof sheet> & { closeButton?: boolean }

const SheetContent = forwardRef<React.ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(
  ({ side = 'right', className, children, closeButton, ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content ref={ref} className={cx(sheet({ side }), className)} {...props}>
        {children}
        <SheetPrimitive.Close
          className={css({
            display: closeButton ? 'flex' : 'none',
            pos: 'absolute',
            right: 4,
            top: 4,
            rounded: 'sm',
            opacity: 70,
            ringOffset: 'background',
            transition: 'opacity',
            _hover: { opacity: 100 },
            _focus: { outline: 2, ring: 'ring', ringOffset: 2 },
            _open: { bg: 'secondary' },
          })}
        >
          <X className={css({ h: 4, w: 4 })} />
          <span className={css({ srOnly: true })}>Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  ),
)
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cx(css({ display: 'flex', flexDir: 'column', spaceY: 2, textAlign: 'center' }), className)}
    {...props}
  />
)
SheetHeader.displayName = 'SheetHeader'

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cx(css({ display: 'flex', flexDir: 'column-reverse' }), className)} {...props} />
)
SheetFooter.displayName = 'SheetFooter'

const SheetTitle = forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => <SheetPrimitive.Title ref={ref} className={cx(className)} {...props} />)
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => <SheetPrimitive.Description ref={ref} className={cx(className)} {...props} />)
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
