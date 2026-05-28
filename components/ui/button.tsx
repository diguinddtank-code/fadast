import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-white hover:text-black border border-black transition-all duration-300",
        destructive:
          "bg-red-500 text-white hover:bg-red-500/90",
        outline:
          "border border-black bg-transparent text-black hover:bg-black hover:text-white transition-all duration-300",
        secondary:
          "bg-zinc-100 text-black hover:bg-zinc-200",
        ghost: "hover:bg-zinc-100/50 hover:text-zinc-900",
        link: "text-zinc-900 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2 uppercase tracking-wider text-xs",
        sm: "h-9 px-3 text-xs uppercase tracking-wider",
        lg: "h-14 px-8 text-sm uppercase tracking-wider",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
