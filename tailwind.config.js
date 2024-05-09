/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./_site/**/*.html"],
  theme: {
    extend: {},
  },
  plugins:[
    require('daisyui'),
  ],
}


