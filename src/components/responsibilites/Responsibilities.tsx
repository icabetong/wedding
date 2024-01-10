import React from 'react'
import { motion } from 'framer-motion'
import { responsibilities } from '@/shared/const/services'
import Item from './item'

export default function Responsibilities() {
  return (
    <motion.section
      className='my-8'
      initial={{ opacity: 0, y: 100 }}
      transition={{ delay: 1.4, duration: 0.2 }}
      animate={{ opacity: 100, y: 0 }}
    >
      <h2 className='section-title'>Our Duties and Responsibilites</h2>
      <ul className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {responsibilities.map((r) => (
          <Item key={r.key} data={r} />
        ))}
      </ul>
    </motion.section>
  )
}
