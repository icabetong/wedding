import React, { type PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'
import Footer from '@/components/footer'
import Navigation from '@/components/navigation'

type ContentProps = PropsWithChildren & {
  className?: string
} & Partial<typeof defaultProps>
const defaultProps = {
  className: '',
}

export default function Content({ children, className }: ContentProps) {
  return (
    <>
      <Navigation />
      <main className={twMerge('container px-4 py-4', className)}>
        {children}
      </main>
      <Footer />
    </>
  )
}
Content.defaultProps = defaultProps
