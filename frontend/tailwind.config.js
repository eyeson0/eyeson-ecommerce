/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#FFFFFF',
          text: '#000000',
          secondary: '#555555',
          border: '#E6E6E6',
          surface: '#F7F7F7',
        },
        dark: {
          bg: '#000000',
          text: '#FFFFFF',
          secondary: '#BDBDBD',
          border: '#2A2A2A',
          surface: '#111111',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [],
}
