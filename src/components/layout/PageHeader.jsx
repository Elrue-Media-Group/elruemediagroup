import React from 'react'
import { cn } from '../../lib/utils'
import { Badge } from '../ui/Badge'

export function PageHeader({ heading, text, badge, children, className, ...props }) {
  return (
    <div className={cn('space-y-4', className)} {...props}>
      <div className="space-y-2">
        {badge && (
          <Badge variant="secondary" className="mb-4">
            {badge}
          </Badge>
        )}
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
          {heading}
        </h1>
        {text && (
          <p className="text-xl text-muted-foreground max-w-[42rem]">
            {text}
          </p>
        )}
      </div>
      {children}
    </div>
  )
}
