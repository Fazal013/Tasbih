/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warmBg: '#fdf6f0',
        softGreen: '#4CAF50',
        softGray: '#333333',
      },
      boxShadow: {
        glow: '0 0 20px rgba(76, 175, 80, 0.6)',
      },
    },
  },
  plugins: [],
}
