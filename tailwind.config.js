/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{js,html}"],
  theme: {
    extend: {
      "colors": {
        "dark": "#111111",
        "gray": "#444444",
        "orange": "#ff5a34",
        "white": "#ededed"
      },
      "fontSize": {
        "base": "1.25rem",
        "lg": "2rem",
        "xl": "2.5rem"
      },
      "fontFamily": {
        "poppins": "Poppins"
      },
      "borderRadius": {
        "none": "0",
        "xs": "0.3125rem",
        "sm": "0.9375rem"
      },
    },
  },
  plugins: [],
}