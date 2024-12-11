/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        "PublicSans": ['Public Sans', 'sans-serif'],
        'Dm-serif': ['"DM Serif Display"', 'serif'],}
      
    },
  },
  plugins: [],
}

