/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        //Brand colors
        primary: '#FF0000',
        secondary: '#00FF00',
        accent: '#0000FF',

        //Background colors
        background: '#F5F5F5',
        surface: '#FFFFFF',

        //Text colors
        textPrimary: '#000000',
        textSecondary: '#666666',
        textAccent: '#FF0000',

        //state colors
        success: '#00FF00',
        warning: '#FFFF00',
        error: '#FF0000',  
      },

      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Open Sans', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },

    },
  },
  plugins: [],
}