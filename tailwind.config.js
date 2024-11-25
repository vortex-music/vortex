/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // React components
    './index.html',               // Vite's HTML entry file
    './electron/**/*.{js,ts}',    // Electron files, if needed
  ],
  theme: {
    extend: [],
  },
  plugins: [],
}

