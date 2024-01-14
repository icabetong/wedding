import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        text: '#1F130C',
        'text-dark': '#f4e8e2',
        background: '#f5f5eb',
        'background-secondary': '#efe7da',
        'background-secondary-dark': '#241c0f',
        'background-tertiary': '#e1daca',
        'background-tertiary-dark': '#342d1d',
        'background-dark': '#14140a',
        primary: '#c1b6a4',
        'primary-dark': '#5b503e',
        secondary: '#b3907a',
        'secondary-dark': '#85624c',
        accent: '#83907a',
        'accent-dark': '#79856f',
      },
      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },
      fontFamily: {
        heading: 'Libre Baskerville',
        body: '"Source Sans 3"',
        brand: 'Danube',
      },
    },
  },
  plugins: [],
}
export default config
