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
        'hover:bg-secondary-100 rounded-lg px-4 py-2 transition-colors duration-150',
        className
      )}
    >
      {label}
    </Link>
  )
}
Item.defaultProps = defaultProps
