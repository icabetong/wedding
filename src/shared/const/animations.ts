export const listVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
}

export const listItemAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export const hoverAnimation = { y: 2.8, transition: { duration: 0.3 } }
