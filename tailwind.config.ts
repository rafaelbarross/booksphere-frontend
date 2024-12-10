import type { Config } from 'tailwindcss'
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: 'class',
  content: [
    // './pages/**/*.{ts,tsx}', './public/**/*.html', './node_modules/flowbite-react/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      // backgroundImage: {
      //   'book-cover': "url('./book-cover.jpg')",
      // },

      colors: {
          // 'dark': '#232A3C',
          'dark': '#26233D',
          'medium': '#293245',
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      boxShadow: {
        '3xl': '0px 0px 18px 0px rgba(0, 0, 0, 0.25)',
      }
    },

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

    }
  },
  // plugins: [require('flowbite/plugin')],
})
// export default config
