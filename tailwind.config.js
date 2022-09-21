// @ts-nocheck
/** @ {import('tailwindcss).config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./app/ui/**/*.{js,jsx,ts,tsx}', './client/*.html'],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '650px',
      // => @media (min-width: 576px) { ... }

      'md': '760px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
    },
    lineClamp: {
      7: '7',
      8: '8',
      9: '9',
      10: '10',
    },
    extend: {
      colors: {
        white: '#FFFFFF',
        primary: '#182f3f',
        primary_2: '#182d2d',
        secondary: '#1d3333',
        tertiaryOne: '#eb8338',
        tertiaryTwo: '#abb8c3',
        tertiaryThree: '#cdbda1',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
      },
      boxShadow: {
        sm: '0 2px 4px -0px rgba(11, .10, .55, 0.15)',
        lg: '0 8px 20px -0px rgba(18, .16, .99, 0.6)',
      },
     

      fontFamily: {
        satoshi: 'Satoshi, sans-serif',
        inter: 'Inter, sans-serif',
      },

      variants: {
        lineClamp: ['responsive', 'hover']
      },
      extend: {
        borderRadius: {
          '4xl': '2rem',
        },
        maxWidth: {
          '2xl': '40rem',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
  plugins: [require('@tailwindcss/typography')],
  plugins: [require('@tailwindcss/line-clamp')],
  plugins: [require('@tailwindcss/aspect-ratio')],
}
