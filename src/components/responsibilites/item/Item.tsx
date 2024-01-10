import React from 'react'
import { motion } from 'framer-motion'
import { hoverAnimation } from '@/shared/const/animations'

type ItemProps = {
  data: CardData
}

export default function Item({ data }: ItemProps) {
  return (
    <motion.li
      whileHover={hoverAnimation}
      className='bg-secondary-100 p-4 rounded-xl flex items-center justify-center gap-4 cursor-pointer'
    >
      <div className='w-fit rounded-full bg-secondary-200 p-2'>
        {React.createElement(data.icon, { className: 'h-10 w-10' })}
      </div>
      <dt className='font-medium'>{data.title}</dt>
    </motion.li>
  )
}
