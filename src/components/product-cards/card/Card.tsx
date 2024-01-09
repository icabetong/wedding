import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { CheckIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

type ProductCardProps = {
  product: ProductData
}

const animation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.li
      variants={animation}
      className={`rounded-xl p-4 text-center text-text-800 relative ${
        product.highlight ? 'bg-secondary-100' : 'bg-secondary-50'
      }`}
    >
      <div className='space-y-2 mb-4'>
        <dt className='text-xl font-bold font-heading'>{product.title}</dt>
        <dd className='text-sm font-medium text-text-700 min-h-[100px]'>
          {product.summary}
        </dd>
      </div>
      <ul className='text-left space-y-2 mb-12'>
        {product.features.map((feature, index) => (
          <li key={index} className='flex gap-2'>
            <CheckIcon className='h-6 w-6 shrink-0 text-accent-600' />
            <span className='font-medium text-sm'>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        type='button'
        className='absolute bottom-0 button-accent m-4 inset-x-0 w-fit mx-auto inline-flex items-center'
      >
        <span>Learn more</span>
        <ArrowRightIcon className='h-5 w-5 ml-2' />
      </button>
    </motion.li>
  )
}
