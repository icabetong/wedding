import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-primary-900 text-primary-50 py-8'>
      <div className='container py-2 px-8 flex flex-col lg:flex-row items-center justify-between'>
        <div>
          <div className='font-medium'>Primaestra</div>
          <ul className='flex items-center gap-2'>
            <li>
              <Link href='tel:+639209788987' className='text-link'>
                (+63) 920 978 8987
              </Link>
            </li>
            <li>•</li>
            <li>
              <Link href='mailto:primaestra.ph@gmail.com' className='text-link'>
                primaestra.ph@gmail.com
              </Link>
            </li>
          </ul>
          <p>Manila, Philippines</p>

          <p className='text-white/50 mt-8'>
            Copyright 2024, Primaestra. All Rights Reserved
          </p>
        </div>
        <div>
          <ul className='flex items-center gap-2'>
            <li>
              <Link
                href='https://www.facebook.com/primaestra.ph'
                target='_blank'
                rel='noopenner norefferrer'
                className='text-link'
              >
                Facebook
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
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
