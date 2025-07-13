/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ubuntu-terminal': '#300924',
        'gemini-blue': '#4285F4',
        'gemini-red': '#DB4437',
        'gemini-yellow': '#F4B400',
        'gemini-green': '#0F9D58',
        'gemini-blue-light': '#BBDEFB',
        'gemini-red-light': '#FFCDD2',
        'gemini-yellow-light': '#FFF9C4',
        'gemini-green-light': '#C8E6C9',
      },
    },
  },
  plugins: [],
  safelist: [
    'border-gemini-blue',
    'border-gemini-red',
    'border-gemini-yellow',
    'border-gemini-green',
    'border-gemini-blue-light',
    'border-gemini-red-light',
    'border-gemini-yellow-light',
    'border-gemini-green-light',
    'text-gemini-blue',
    'text-gemini-red',
    'text-gemini-yellow',
    'text-gemini-green',
    'text-gemini-blue-light',
    'text-gemini-red-light',
    'text-gemini-yellow-light',
    'text-gemini-green-light',
  ],
}
