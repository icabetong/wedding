import React from 'react'
import { motion } from 'framer-motion'
import ProductCard from './card'

type ProductCardsProps = {
  products: ProductData[]
}

const animation = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
}

export default function ProductCards({ products }: ProductCardsProps) {
  return (
    <motion.ul
      initial='hidden'
      animate='visible'
      variants={animation}
      className='grid grid-cols-1 lg:grid-cols-3 gap-4'
    >
      {products.map((product) => (
        <ProductCard key={product.key} product={product} />
      ))}
    </motion.ul>
  )
}
