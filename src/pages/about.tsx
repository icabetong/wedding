import React from 'react'
import Image from 'next/image'
import { IconX } from '@tabler/icons-react'
import Content from '@/components/content/Content'
import Page from '@/components/page'

export default function AboutPage() {
  return (
    <Page title='About | Primaestra'>
      <Content className='my-8 relative'>
        <Image
          src='/images/flower.png'
          width='512'
          height='256'
          alt='flower ornament'
          className='hidden md:block absolute bottom-2 left-0 -z-10 filter-hero dark:filter-hero-dark'
        />
        <Image
          src='/images/flower.png'
          width='512'
          height='256'
          alt='flower ornament'
          className='hidden md:block absolute bottom-2 right-0 -z-10 filter-hero dark:filter-hero-dark transform -scale-x-[1]'
        />
        <section className='text-center'>
          <Image
            src='/images/hero.webp'
            width='512'
            height='256'
            alt='wedding'
            className='mx-auto rounded-xl mb-8 w-1/2'
          />
          <div className='page-title inline-flex gap-4 items-center'>
            <div>
              <div>Prima</div>
              <p className='text-base italic text-secondary'>
                noun: leading, major
              </p>
            </div>
            <div className='flex items-center justify-center'>
              <IconX className='h-8 w-8 block' />
            </div>
            <div>
              <div>Maestra</div>
              <p className='text-base italic text-secondary'>
                noun: expert, master
              </p>
            </div>
          </div>

          <div className='mt-8 text-center mx-auto space-y-4 max-w-screen-sm'>
            <div>
              <h2 className='font-bold font-heading mb-2'>
                OUR NAME IS BOTH OUR PRIDE, AS WELL AS OUR CHALLENGE,
              </h2>
              <p>
                Above everything, it stands for our GOAL – being among the
                leading expert in events planning, one happy client at a time.
                Challenge by our name, our team is composed of young, passionate
                and laser-focused people that don&apos;t settle for anything
                less than excellence.
              </p>
            </div>

            <p>
              We are driven by customer satisfaction, knowing that&nbsp;
              <span className='font-bold text-accent'>
                AN EVENT&apos;S SUCCESS IS MEASURED SOLELY BY CLIENT&apos;S
                HAPPINESS.
              </span>
            </p>

            <p>
              We believe that the backbone of success is planning done well, and
              done right by you. From on-the-day to full coordination, we invest
              the same attention to detail, care and dedication to making each
              event a success. With this, we believe that&nbsp;
              <span className='font-bold text-accent'>
                THE QUALITY OF PROJECTS WILL ALWAYS BE MORE IMPORTANT THAT
                QUANTITY.
              </span>
            </p>

            <p>
              Lastly, we believe that planning should be fun! While we put
              premium in professionalism, we strive to make the journey fun,
              stress-free and memorable for you.&nbsp;
              <span className='font-bold text-accent'>
                BECAUSE WE, AT PRIMAESTRA, KNOW YOU DESERVE NOTHING LESS.
              </span>
            </p>
          </div>
        </section>
      </Content>
    </Page>
  )
}
