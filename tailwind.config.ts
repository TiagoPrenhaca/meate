import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          base: '#CA991A',
          placeholder: '#A9821D',
        },
        social: {
          base: '#333',
          placeholder: '#5F5F5F',
        },
        grey: '#878787',
        'white-dark': '#A5A5A5',
        placeholder: '#A0A0A0',
        dark: '#222222',
        darker: '#1B1B1B',
      },
      backgroundImage: {
        hero: "url('./carousel.svg')",
        'hero-mobile': "url('./carousel-mobile.svg')",
        menu: "url('./menu.svg')",
        'menu-mobile': "url('./menu-mobile.svg')",
        restaurant: "url('./restaurant.svg')",
        'restaurant-mobile': "url('./restaurant-mobile.svg')",
      },
    },
  },
  plugins: [],
}
export default config
