import React from 'react'
import Image from 'next/image'
import Content from '@/components/content/Content'
import Page from '@/components/page'
import ProductCards from '@/components/product-cards'
import { services } from '@/shared/const/services'

export default function ServicesPage() {
  return (
    <Page title='Services | Primaestra'>
      <Content>
        <section>
          <div className='relative overflow-clip rounded-xl'>
            <Image
              src='/images/banner-services.jpg'
              width='1920'
              height='1281'
              alt='wedding venue'
              className='object-cover h-36'
            />
            <h1 className='page-title absolute bottom-0 inset-x-0 p-4 backdrop-blur bg-gray-50/70'>
              Services
            </h1>
          </div>
          <div className='mt-8'>
            <ProductCards products={services} />
          </div>
        </section>
      </Content>
    </Page>
  )
}
