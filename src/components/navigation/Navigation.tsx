import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IconMenu, IconMoon, IconSun, IconX } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import Sidebar from '@/components/sidebar'
import links from '@/shared/const/navigation'
import useTheme from '@/shared/hooks/use-themes'
import Item from './item'

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const { change, theme } = useTheme()

  const handleThemeChange = () => change(theme === 'dark' ? 'light' : 'dark')
  const handleSidebar = () => setOpen((prev) => !prev)

  return (
    <header className='border-b border-background-secondary dark:border-background-secondary-dark'>
      <nav className='container flex items-center justify-between py-4 px-8'>
        <div className='flex items-center gap-2'>
          <Image
            src='/images/logo.png'
            width='128'
            height='128'
            alt='logo'
            className='h-14 w-14'
          />
          <Link href='/' className='text-xl font-bold uppercase font-brand'>
            Primaestra
          </Link>
        </div>
        <div className='hidden md:flex items-center gap-2 shrink-0'>
          {links.map((e) => (
            <Item key={e.key} href={e.key} label={e.data} />
          ))}
          <button
            type='button'
            className='navigation-link p-2'
            onClick={handleThemeChange}
          >
            {theme === 'dark' ? (
              <IconSun className='h-5 w-5' />
            ) : (
              <IconMoon className='h-5 w-5' />
            )}
          </button>
        </div>
        <div className='md:hidden'>
          <button type='button' onClick={handleSidebar}>
            <IconMenu className='h-5 w-5' />
            <span className='sr-only'>Open Sidebar</span>
          </button>
          <Sidebar className='md:hidden text-center' open={open}>
            <div className='text-left'>
              <button
                type='button'
                className='button-ghost'
                onClick={handleSidebar}
              >
                <IconX className='h-5 w-5' />
                <span className='sr-only'>Close sidebar</span>
              </button>
            </div>
            <ul className='p-4 space-y-2'>
              {links.map((e) => (
                <motion.li
                  key={e.key}
                  className='w-full'
                  whileHover={{ y: -4 }}
                >
                  <Link className='block py-2 font-medium' href={e.key}>
                    {e.data}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <button
              type='button'
              className='navigation-link p-2 inline-block mx-auto'
              onClick={handleThemeChange}
            >
              {theme === 'dark' ? (
                <IconSun className='h-5 w-5' />
              ) : (
                <IconMoon className='h-5 w-5' />
              )}
            </button>
          </Sidebar>
        </div>
      </nav>
    </header>
  )
}
