/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-mono': ['DM Mono', 'monospace'],
        'inter': ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}