/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class', // Enable dark mode using the 'class' strategy
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Add purge option
  variants: {
    extend: {},
  },
  plugins: [],
}
