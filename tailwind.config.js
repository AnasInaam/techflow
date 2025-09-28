/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // This includes your Next.js app pages
    './components/**/*.{js,ts,jsx,tsx}', // If you add custom components
    './pages/**/*.{js,ts,jsx,tsx}', // For any pages outside the app directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
