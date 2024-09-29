/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-backdrop': "url('/images/backdrop.png')",
        
      },

      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        generalsans: ['General Sans', 'sans-serif'],
      },
  },
  plugins: [],
}
}