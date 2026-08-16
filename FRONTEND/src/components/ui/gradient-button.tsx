import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const gradientButtonVariants = cva('gradient-button', {
  variants: {
    variant: {
      default: '',
      variant: 'gradient-button-variant',
      ghost: 'gradient-button-ghost',
    },
  },
  defaultVariants: { variant: 'default' },
})

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof gradientButtonVariants> {
  asChild?: boolean
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className = '', variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp ref={ref} className={cn(gradientButtonVariants({ variant }), className)} {...props} />
  },
)

GradientButton.displayName = 'GradientButton'

export { GradientButton, gradientButtonVariants }
