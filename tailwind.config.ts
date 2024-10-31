import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/app/**/*.{html,ts}",
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#138f82",
        blueLess:'#f3fafa',
        grey:'#838484',
        lightGrey:'rgb(180,180,180)',
        darkGrey:'rgb(120,120,120)',
      },
      fontSize:{
        'text-xxs':'0.4rem',
      },
      screens: {
        'xs': '350px',
      },
    },
  },
  plugins: [],
}

export default config;

