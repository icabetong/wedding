import React from 'react'
import { motion } from 'framer-motion'
import { listVariants } from '@/shared/const/animations'
import ProductCard from './card'

type ProductCardsProps = {
  products: ProductData[]
}

export default function ProductCards({ products }: ProductCardsProps) {
  return (
    <motion.ul
      initial='hidden'
      animate='visible'
      variants={listVariants}
      className='grid grid-cols-1 lg:grid-cols-3 gap-4'
    >
      {products.map((product) => (
        <ProductCard key={product.key} product={product} />
      ))}
    </motion.ul>
  )
}
