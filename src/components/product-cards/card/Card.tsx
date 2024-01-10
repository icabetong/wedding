import React from 'react'
import { useRouter } from 'next/router'
import { IconChevronRight } from '@tabler/icons-react'
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
      className={`rounded-xl p-4 flex md:flex-row flex-col gap-4 lg:gap-8 text-left text-text-800 border-2 border-transparent hover:border-secondary-500 transition-all duration-150 ease-in-out ${
        product.highlight ? 'bg-secondary-100' : 'bg-secondary-50'
      }`}
    >
      <div className='space-y-2'>
        <dt className='text-xl font-bold font-heading'>{product.title}</dt>
        <dd className='font-medium text-text-700 min-h-[100px]'>
          {product.summary}
        </dd>
      </div>
      <div className='shrink-0 flex items-center justify-end'>
        <motion.button
          type='button'
          className='button-accent flex items-center'
          whileHover={hoverAnimation}
          onClick={handleNavigation}
        >
          <span>Learn more</span>
          <IconChevronRight className='h-5 w-5 ml-2' />
        </motion.button>
      </div>
    </motion.li>
  )
}
