import type { Config } from 'tailwindcss'
import { Averia_Serif_Libre } from 'next/font/google'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      scrollbar: ['rounded'],
      fontFamily: {
        serif: ['var(--font-averia)'],
      }
    },
    colors: {
      'bg': '#f4ebd9',
      'bg2': '#e3e3e3',
      'fg': '#57786d',
    },
    fontFamily: {
      'serif': 'Averia_Serif_Libre'
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
export default config
