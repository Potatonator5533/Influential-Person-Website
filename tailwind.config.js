/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./pages/**/*.{html,js}"
  ],
  theme: {
    extend: {
      width: {
        '500': '500px',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

