import * as React from 'react'

import { cn } from '@/lib/tailwindMerge'

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className="group relative h-full" {...props}>
    <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-red-600 to-blue-600 opacity-80 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />
    <div className="relative flex h-full flex-col items-center justify-center rounded-lg bg-gradient-to-t from-black to-black/50 p-2 leading-none">
      {children}
    </div>
  </div>
))
Card.displayName = 'Card'

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6 text-white', className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-center text-2xl font-bold leading-none tracking-widest text-white sm:text-3xl',
      className
    )}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

const CardSubtitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h6
    ref={ref}
    className={cn(
      'text-center text-xl font-bold leading-none tracking-widest text-white',
      className
    )}
    {...props}
  />
))
CardSubtitle.displayName = 'CardSubtitle'

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex w-full flex-col gap-6 p-6 pt-5 text-sm tracking-widest text-white xs:text-base sm:gap-10 sm:pt-10 sm:text-lg',
      className
    )}
    {...props}
  />
))
CardContent.displayName = 'CardContent'

const CardRow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex justify-between', className)} {...props} />
))
CardRow.displayName = 'CardRow'

const CardLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props} />
))
CardLabel.displayName = 'CardLabel'

const CardValue = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('text-right', className)} {...props} />
))
CardValue.displayName = 'CardValue'

export {
  Card,
  CardContent,
  CardHeader,
  CardLabel,
  CardRow,
  CardSubtitle,
  CardTitle,
  CardValue,
}
