import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { IconChevronLeft } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import Content from '@/components/content/Content'
import Page from '@/components/page'
import { hoverAnimation } from '@/shared/const/animations'

export default function ErrorNotFoundPage() {
  const router = useRouter()

  const handleNavigateToHome = () => router.push('/')

  return (
    <Page title='Not Found | Primaestra'>
      <Content className='my-8'>
        <section className='text-center'>
          <Image
            src='/images/404.png'
            width='512'
            height='256'
            alt='404'
            className='inline-block'
          />
          <h1 className='page-title mt-4 mb-2'>Something is Wrong</h1>
          <p className='font-medium text-lg mb-8'>
            The page you are looking for was removed, renamed, or might never
            existed!
          </p>
          <motion.button
            type='button'
            className='button-accent py-3 px-4 inline-flex items-center'
            whileHover={hoverAnimation}
            onClick={handleNavigateToHome}
          >
            <IconChevronLeft className='h-5 w-5 mr-2' />
            <span>Back to Home</span>
          </motion.button>
        </section>
      </Content>
    </Page>
  )
}
