import React, { type PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

type SidebarProps = {
  open: boolean
  className?: string
} & PropsWithChildren &
  Partial<typeof defaultProps>
const defaultProps = {
  className: '',
}

export default function Sidebar({ open, className, children }: SidebarProps) {
  return (
    <div
      className={twMerge(
        'fixed right-0 top-0 z-40 h-full w-3/5 overflow-x-hidden overflow-y-scroll border border-background-secondary dark:border-background-secondary-dark dark:text-text-dark bg-background-secondary dark:bg-background-secondary-dark text-gray-800 shadow duration-300 ease-in-out',
        className,
        open ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      {children}
    </div>
  )
}
Sidebar.defaultProps = defaultProps
