/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  
  theme: {
    extend: {
      colors:{
        brandblack:{
          light:"#313852",
          DEFAULT:"#1D2130",
          dark:"#1D2130",
          primary:"#1D2130"
        },
        brandblue:{
          DEFAULT:"#F9995D",
        },
        brandviolet:{
          light:"#E0E4FC",
          DEFAULT:"#E0E4FC",
          dark:"rgba(215, 152, 225, 0.15)",
          
        }
      },
      lineHeight: {
        'extra-loose': '150%',
      }
    },
  plugins: [],
}
}