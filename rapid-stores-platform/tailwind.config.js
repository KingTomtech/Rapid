/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rapid: {
          primary: '#16a34a',    // Green for growth and trust
          secondary: '#f59e0b',  // Amber for energy and warmth
          dark: '#1f2937',       // Dark gray for text
          light: '#f3f4f6',      // Light gray for backgrounds
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
