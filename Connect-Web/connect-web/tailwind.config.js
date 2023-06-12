/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      clipPath: {
        'bottom-swirl': 'polygon(0 0, 100% 0, 100% 100%, 0 85%)',
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],
}
