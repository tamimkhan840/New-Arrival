/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#DB4444',
      },
    },
  },
  plugins: [
    // require('tailwindnpm-scrollbar-hide'),
    require('daisyui'),
  ],
  daisyui: {
    themes: ['light'],
  },


}