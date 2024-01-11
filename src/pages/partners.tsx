import React from 'react'
import Link from 'next/link'
import Content from '@/components/content/Content'
import Page from '@/components/page'
import suppliers from '@/shared/const/suppliers'

export default function PartnersPage() {
  return (
    <Page title='Partners | Primaestra'>
      <Content className='my-8'>
        <section className='px-8'>
          <h1 className='page-title'>Partners & Suppliers</h1>
          <div className='my-8'>
            <ul className='columns-1 md:columns-2 gap-4 space-y-2'>
              {suppliers.map((e) => (
                <li
                  key={e.key}
                  className='bg-secondary-50 rounded-xl p-4 h-min'
                >
                  <dt className='font-heading font-bold text-lg'>{e.label}</dt>
                  <ul>
                    {e.suppliers.map((s) => (
                      <li key={s.data}>
                        <Link
                          href={s.data}
                          target='_blank'
                          rel='noopenner noreferrer'
                          className='text-link'
                        >
                          <span>{s.key}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Content>
    </Page>
  )
}
