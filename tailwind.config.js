/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    backgroundPosition: {
      'left-margin' : 'center top 1rem',
    },
    extend: {
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}

