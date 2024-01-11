import React from 'react'
import Link from 'next/link'
import { IconBrandFacebook } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import Content from '@/components/content/Content'
import Page from '@/components/page'
import { listItemAnimation, listVariants } from '@/shared/const/animations'
import suppliers from '@/shared/const/suppliers'

const linkVariants = {
  rest: {
    display: 'none',
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.2,
      type: 'tween',
    },
  },
  hover: {
    display: 'flex',
    opacity: 1,
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeIn',
    },
  },
}

const nameVariants = {
  rest: {
    x: 0,
    transition: {
      duration: 0.5,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    x: 8,
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeOut',
    },
  },
}

export default function PartnersPage() {
  return (
    <Page title='Partners | Primaestra'>
      <Content className='my-8'>
        <section className='px-8'>
          <h1 className='page-title'>Partners & Suppliers</h1>
          <div className='my-8'>
            <motion.ul
              className='columns-1 md:columns-2 gap-4 space-y-2'
              initial='hidden'
              animate='visible'
              variants={listVariants}
            >
              {suppliers.map((e) => (
                <motion.li
                  key={e.key}
                  variants={listItemAnimation}
                  className='bg-secondary-50 rounded-xl p-4 h-min'
                >
                  <dt className='font-heading font-bold text-lg'>{e.label}</dt>
                  <ul>
                    {e.suppliers.map((s) => (
                      <motion.li
                        initial='rest'
                        animate='rest'
                        whileHover='hover'
                        key={s.data}
                      >
                        <Link
                          href={s.data}
                          target='_blank'
                          rel='noopenner noreferrer'
                          className='text-link inline-flex items-center'
                        >
                          <motion.span
                            variants={linkVariants}
                            whileHover={{ scale: 1.1 }}
                          >
                            <IconBrandFacebook className='h-5 w-5' />
                          </motion.span>
                          <motion.span variants={nameVariants}>
                            {s.key}
                          </motion.span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>
      </Content>
    </Page>
  )
}
