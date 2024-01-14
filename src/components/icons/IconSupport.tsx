import React from 'react'
import useTheme from '@/shared/hooks/use-themes'

export default function SupportIcon() {
  const { theme } = useTheme()
  const fillColor = theme === 'light' ? '#83907a' : '#79856f'

  return (
    <svg
      width='178'
      height='89'
      viewBox='0 0 178 89'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='h-[5rem]'
    >
      <rect
        y='26'
        width='154'
        height='63'
        rx='5'
        fill={fillColor}
        fillOpacity='0.6'
      />
      <path
        d='M142 16L142 4'
        stroke='#070e09'
        strokeWidth='8'
        strokeLinecap='round'
      />
      <path
        d='M163 34H174'
        stroke='#070e09'
        strokeWidth='8'
        strokeLinecap='round'
      />
      <path
        d='M158 19L168 9'
        stroke='#070e09'
        strokeWidth='8'
        strokeLinecap='round'
      />
      <path
        d='M62 57L73.5 68L94.5 47'
        stroke='#070e09'
        strokeWidth='8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
