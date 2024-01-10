import React from 'react'
import { useRouter } from 'next/router'
import { IconCheck, IconChevronRight } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { hoverAnimation, listItemAnimation } from '@/shared/const/animations'

type ProductCardProps = {
  product: ProductData
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter()

  const handleNavigation = () => router.push(`/services/${product.key}`)

  return (
    <motion.li
      variants={listItemAnimation}
      className={`rounded-xl p-4 text-center text-text-800 relative border-2 border-transparent hover:border-secondary-500 transition-all duration-150 ease-in-out ${
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
            <IconCheck className='h-6 w-6 shrink-0 text-accent-600' />
            <span className='font-medium text-sm'>{feature}</span>
          </li>
        ))}
      </ul>
      <motion.button
        type='button'
        className='absolute bottom-0 button-accent m-4 inset-x-0 w-fit mx-auto inline-flex items-center'
        whileHover={hoverAnimation}
        onClick={handleNavigation}
      >
        <span>Learn more</span>
        <IconChevronRight className='h-5 w-5 ml-2' />
      </motion.button>
    </motion.li>
  )
}
