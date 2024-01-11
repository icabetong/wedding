import React from 'react'
import { type GetServerSideProps, type InferGetServerSidePropsType } from 'next'
import Image from 'next/image'
import { IconCheck } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import Content from '@/components/content/Content'
import Page from '@/components/page'
import Responsibilities from '@/components/responsibilites'
import { listItemAnimation, listVariants } from '@/shared/const/animations'
import { services } from '@/shared/const/services'

type ServicePageData = {
  product: ProductData
}

export default function ServicePage({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Page title={`${product.title} | Primaestra`}>
      <Content className='my-8'>
        <section className='px-8'>
          <h1 className='page-title'>{product.title}</h1>
          <p className='mt-2 font-medium'>{product.summary}</p>
          <div className='mt-8 flex flex-col-reverse lg:flex-row items-center gap-8'>
            <div className='flex-1'>
              <motion.ul
                initial='hidden'
                animate='visible'
                variants={listVariants}
                className='space-y-2'
              >
                {product.features.map((e, i) => (
                  <motion.li
                    key={i}
                    variants={listItemAnimation}
                    className='flex gap-2'
                  >
                    <IconCheck className='h-6 w-6 shrink-0 text-accent-600' />
                    <span className='font-medium'>{e}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            <div className='text-center flex-1'>
              <Image
                src='/images/service.webp'
                height='512'
                width='512'
                alt='service'
                className='w-96 h-96 inline-block object-cover rounded-xl shadow'
              />
            </div>
          </div>
          <Responsibilities />
        </section>
      </Content>
    </Page>
  )
}

export const getServerSideProps: GetServerSideProps<ServicePageData> = async ({
  query,
}) => {
  const { id } = query
  const product = services.find((e) => e.key === id)
  if (product) {
    return {
      props: {
        product,
      },
    }
  }

  return {
    redirect: {
      destination: '/404',
      permanent: false,
    },
  }
}
