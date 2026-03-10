import React from 'react'
import { cn } from '../../lib/utils'

const sizeClasses = {
  sm: 'py-8',
  md: 'py-16',
  lg: 'py-24',
}

export function Section({ children, className, container = true, size = 'md', ...props }) {
  return (
    <section className={cn(sizeClasses[size] || sizeClasses.md, className)} {...props}>
      {container ? (
        <div className="container mx-auto px-4 md:px-8">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  )
}
