import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700;800&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='relative font-body bg-background-50/50 text-text-800 accent-blue-500'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
