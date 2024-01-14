import React from 'react'
import useTheme from '@/shared/hooks/use-themes'

export default function ExpertIcon() {
  const { theme } = useTheme()
  const accent = theme === 'light' ? '#83907a' : '#79856f'
  const secondary = theme === 'light' ? '#b3907a' : '#85624c'
  const primary = theme === 'light' ? '#c1b6a4' : '#5b503e'

  return (
    <svg
      width='112'
      height='114'
      viewBox='0 0 112 114'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='h-[5rem]'
    >
      <rect width='58' height='58' rx='5' fill='#f8fcf8' />
      <rect
        x='69'
        y='25'
        width='33'
        height='33'
        rx='5'
        fill={accent}
        fillOpacity='0.6'
      />
      <rect
        x='69'
        y='71'
        width='43'
        height='43'
        rx='5'
        fill={secondary}
        fillOpacity='0.1'
      />
      <rect x='20' y='70' width='38' height='39' rx='5' fill={primary} />
    </svg>
  )
}
