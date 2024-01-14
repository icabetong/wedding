import React from 'react'
import Link from 'next/link'
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconMail,
  IconPhone,
} from '@tabler/icons-react'

export default function Footer() {
  return (
    <footer className='bg-text text-primary py-8'>
      <div className='container py-2 px-8 text-center space-y-4'>
        <div>
          <div className='font-semibold'>Visit us</div>
          <ul className='inline-flex items-center gap-2 mt-2'>
            <li>
              <Link
                href='https://www.facebook.com/primaestra.ph'
                target='_blank'
                rel='noopenner norefferrer'
                className='text-link'
              >
                <IconBrandFacebookFilled className='h-5 w-5' />
                <span className='sr-only'>Facebook</span>
              </Link>
            </li>
            <li>•</li>
            <li>
              <Link
                href='https://www.instagram.com/primaestra.ph/'
                target='_blank'
                rel='noopenner norefferrer'
                className='text-link'
              >
                <IconBrandInstagram className='h-5 w-5' />
                <span className='sr-only'>Instagram</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className='font-semibold'>Contact Us</div>
          <ul className='inline-block text-center mt-2'>
            <li>
              <Link href='tel:+639209788987' className='text-link'>
                <IconPhone className='h-5 w-5 inline-block mr-2' />
                <span>(+63) 920 978 8987</span>
              </Link>
            </li>
            <li>
              <Link href='mailto:primaestra.ph@gmail.com' className='text-link'>
                <IconMail className='h-5 w-5 inline-block mr-2' />
                <span>primaestra.ph@gmail.com</span>
              </Link>
            </li>
          </ul>
          <p className='text-white/50 mt-8'>
            Copyright 2024, Primaestra. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
