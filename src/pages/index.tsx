import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { IconChevronRight } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import Content from '@/components/content/Content'
import Page from '@/components/page'
import { hoverAnimation } from '@/shared/const/animations'
import reasons from '@/shared/const/hero'

// https://unsplash.com/photos/woman-holding-beige-petaled-flower-bouquet-30UOqDM5QW0
export default function Home() {
  const router = useRouter()

  const handleToServices = () => router.push('/services')
  const handleToAbout = () => router.push('/about')

  return (
    <Page title='Wedding'>
      <Content className='min-h-screen px-8'>
        <section className='relative flex md:flex-row flex-col-reverse items-center justify-center gap-8 py-16 md:py-32 mb-16'>
          <Image
            src='/images/ornament.png'
            width='512'
            height='256'
            alt='ornament-top'
            className='absolute -top-8 mx-auto inset-x-0 -z-10 filter-hero'
          />
          <Image
            src='/images/flower.png'
            width='512'
            height='256'
            alt='flower ornament'
            className='absolute -bottom-4 left-0 -z-10 filter-hero'
          />
          <div className='flex-1 text-center md:text-left'>
            <h2 className='text-3xl md:text-4xl font-bold font-heading leading-tight'>
              Elegance <span className='text-accent-600'>Redefined</span>:
              Crafting Your Unforgettable Day
            </h2>
            <p className='text-md text-text-600 mt-4 font-medium'>
              At Primaestra, we specialize in turning your wedding dreams into a
              flawless reality. Our dedicated team ensures every detail is
              perfect, creating a day that reflects the uniqueness of your love
              story. Experience the art of seamless celebrations with us.
            </p>
            <div className='mt-8 space-x-4'>
              <motion.button
                type='button'
                className={twMerge('button-secondary', 'py-4 px-5')}
                whileHover={hoverAnimation}
                whileTap={{ scale: 0.9 }}
                onClick={handleToAbout}
              >
                Learn more
              </motion.button>
              <motion.button
                type='button'
                className={twMerge('button-primary', 'py-4 px-5')}
                whileHover={hoverAnimation}
                whileTap={{ scale: 0.9 }}
                onClick={handleToServices}
              >
                <span>Get Started</span>
                <IconChevronRight className='h-5 w-5 ml-2 inline-block' />
              </motion.button>
            </div>
          </div>
          <div className='flex-1 flex items-center justify-center'>
            <motion.img
              src='/images/hero.jpg'
              width='512'
              height='512'
              alt='hero image, groom and bride'
              className='rounded-lg shadow'
              initial={{ rotate: 0 }}
              animate={{
                rotate: 8,
                transition: { duration: 0.8, delay: 0.5 },
                origin: 'bottom left',
              }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            />
          </div>
        </section>
        <section className='text-center pb-16'>
          <h2 className='section-title'>Why choose Primaestra?</h2>
          <ul className='grid grid-cols-1 md:grid-cols-3 gap-4 my-8'>
            {reasons.map((r) => (
              <li
                key={r.key}
                className='bg-secondary-50 rounded-xl px-4 py-8 group'
              >
                <div className='w-fit mx-auto mb-4'>
                  {React.createElement(r.icon, { className: 'w-12 h-12' })}
                </div>
                <div className='relative w-fit mx-auto mb-6'>
                  <dt className='font-bold font-heading'>{r.title}</dt>
                  <div className='absolute -bottom-2 h-1/3 inset-x-0 bg-accent-500/50 group-hover:h-2/3 transition-all ease-in-out duration-150' />
                </div>
                <dd>{r.description}</dd>
              </li>
            ))}
          </ul>
          <motion.button
            type='button'
            className={twMerge('button-primary', 'py-4 px-5 mx-auto w-fit')}
            whileHover={hoverAnimation}
            whileTap={{ scale: 0.9 }}
            onClick={handleToServices}
          >
            Learn more...
          </motion.button>
        </section>
      </Content>
    </Page>
  )
}
