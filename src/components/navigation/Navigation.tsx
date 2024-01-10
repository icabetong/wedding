import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import { IconMenu } from '@tabler/icons-react'
import links from '@/shared/const/navigation'
import Item from './item'

export default function Navigation() {
  return (
    <header className='border-b'>
      <nav className='container flex items-center justify-between py-4 px-8'>
        <div className='flex items-center gap-2'>
          <Image
            src='/images/logo.png'
            width='128'
            height='128'
            alt='logo'
            className='h-8 w-8'
          />
          <Link href='/' className='text-xl font-bold uppercase font-brand'>
            Primaestra
          </Link>
        </div>
        <div className='hidden md:flex items-center gap-2 shrink-0'>
          {links.map((e) => (
            <Item key={e.key} href={e.key} label={e.data} />
          ))}
        </div>
        <div className='md:hidden'>
          <Popover className='relative'>
            <Popover.Button className='button-ghost'>
              <span className='sr-only'>Links</span>
              <IconMenu className='h-5 w-5' />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute right-0 z-20 w-screen max-w-xs mt-4'>
                <div className='bg-background-50 border border-background-100 rounded-lg shadow'>
                  <ul className='flex items-center flex-col'>
                    {links.map((e) => (
                      <Item key={e.key} href={e.key} label={e.data} />
                    ))}
                  </ul>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </nav>
    </header>
  )
}
