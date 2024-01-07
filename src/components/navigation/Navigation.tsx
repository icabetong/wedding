import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import links from '@/shared/const/navigation'
import Item from './item'

export default function Navigation() {
  return (
    <header className='border-b'>
      <nav className='container flex items-center justify-between p-4'>
        <h1 className='text-xl font-bold uppercase'>Primaestra</h1>
        <div className='hidden md:flex items-center gap-2 shrink-0'>
          {links.map((e) => (
            <Item key={e.key} href={e.key} label={e.data} />
          ))}
        </div>
        <div className='md:hidden'>
          <Popover className='relative'>
            <Popover.Button className='button-ghost'>
              <span className='sr-only'>Links</span>
              <Bars3Icon className='h-5 w-5' />
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
              <Popover.Panel className='absolute right-0 z-10 w-screen max-w-xs'>
                <div className='bg-background-50/60  border border-background-100 rounded-lg'>
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
