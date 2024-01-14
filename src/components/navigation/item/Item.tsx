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
    <Link href={href} className={twMerge('navigation-link', className)}>
      {label}
    </Link>
  )
}
Item.defaultProps = defaultProps
