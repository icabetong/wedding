import React from 'react'
import Image from 'next/image'
import Content from '@/components/content/Content'
import Page from '@/components/page'
import ProductCards from '@/components/product-cards'
import { services } from '@/shared/const/services'

export default function ServicesPage() {
  return (
    <Page title='Services | Primaestra'>
      <Content className='my-8'>
        <section className='flex gap-16'>
          <div className='relative flex-grow-1 hidden lg:block'>
            <Image
              src='/images/banner-services.jpg'
              width='1920'
              height='1281'
              alt='wedding venue'
              className='object-cover object-center w-96 h-full rounded-xl'
            />
          </div>
          <div className='flex-1 w-2/3'>
            <h1 className='page-title mb-4'>Services</h1>
            <ProductCards products={services} />
          </div>
        </section>
      </Content>
    </Page>
  )
}
