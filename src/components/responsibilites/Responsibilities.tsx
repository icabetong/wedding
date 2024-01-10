import React from 'react'
import { responsibilities } from '@/shared/const/services'
import Item from './item'

export default function Responsibilities() {
  return (
    <section className='my-8'>
      <h2 className='section-title'>Our Duties and Responsibilites</h2>
      <ul className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {responsibilities.map((r) => (
          <Item key={r.key} data={r} />
        ))}
      </ul>
    </section>
  )
}
