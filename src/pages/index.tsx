import React from 'react'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import Content from '@/components/content/Content'
import Page from '@/components/page'

//https://unsplash.com/photos/woman-holding-beige-petaled-flower-bouquet-30UOqDM5QW0
export default function Home() {
  return (
    <Page title='Wedding'>
      <Content className='min-h-screen'>
        <section className='flex md:flex-row flex-col-reverse items-center justify-center gap-8 py-16 md:py-32'>
          <div className='flex-1 text-center md:text-left'>
            <h2 className='text-3xl md:text-4xl font-bold leading-tight'>
              Elegance <span className='text-accent-600'>Redefined</span>:
              Crafting Your Unforgettable Day
            </h2>
            <p className='text-md text-text-600 mt-4 '>
              At Primaestra, we specialize in turning your wedding dreams into a
              flawless reality. Our dedicated team ensures every detail is
              perfect, creating a day that reflects the uniqueness of your love
              story. Experience the art of seamless celebrations with us.
            </p>
            <div className='mt-8 space-x-4'>
              <motion.button
                type='button'
                className={twMerge('button-secondary', 'py-4 px-5')}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                Learn more
              </motion.button>
              <motion.button
                type='button'
                className={twMerge('button-primary', 'py-4 px-5')}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <span>Get Started</span>
                <ArrowRightIcon className='h-5 w-5 ml-2 inline-block' />
              </motion.button>
            </div>
          </div>
          <div className='flex-1 flex items-center justify-center'>
            <Image
              src='/images/hero.jpg'
              width='512'
              height='512'
              alt='hero image, groom and bride'
              className='rounded-lg shadow'
            />
          </div>
        </section>
      </Content>
    </Page>
  )
}
