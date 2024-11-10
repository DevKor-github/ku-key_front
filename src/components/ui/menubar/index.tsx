import * as MenubarPrimitive from '@radix-ui/react-menubar'
import { css, cx } from '@styled-system/css'
import { menubar } from '@styled-system/recipes'
import { forwardRef } from 'react'

const MenubarMenu = MenubarPrimitive.Menu

const MenubarGroup = MenubarPrimitive.Group

const MenubarPortal = MenubarPrimitive.Portal

const MenubarSub = MenubarPrimitive.Sub

const MenubarRadioGroup = MenubarPrimitive.RadioGroup

const classes = menubar()
const Menubar = forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root ref={ref} className={cx(classes.root, className)} {...props} />
))
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger ref={ref} className={cx(classes.trigger, className)} {...props} />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarContent = forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ className, align = 'end', alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cx(classes.content, className)}
      {...props}
    />
  </MenubarPrimitive.Portal>
))
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item ref={ref} className={cx(classes.item, inset && css({ pl: 8 }), className)} {...props} />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarLabel = forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label ref={ref} className={cx(classes.label, inset && css({ pl: 8 }), className)} {...props} />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarRadioGroup,
  MenubarPortal,
  MenubarGroup,
  MenubarSub,
}
