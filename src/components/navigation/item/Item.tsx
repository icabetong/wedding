import React from 'react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

type ItemProps = {
  href: string
  label: string
  className?: string
} & Partial<typeof defaultProps>
const defaultProps = {
  className: '',
}

export default function Item({ href, label, className }: ItemProps) {
  return (
    <Link
      href={href}
      className={twMerge(
        'hover:bg-background-secondary dark:hover:bg-background-secondary-dark rounded-lg px-4 py-2 transition-colors duration-150 font-bold font-heading',
        className
      )}
    >
      {label}
    </Link>
  )
}
Item.defaultProps = defaultProps
