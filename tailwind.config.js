/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        "light": "#FAFAFA",
        "customBlack": "222222",
      },
      colors: {
        "bgWhite": "FAFAFA",
      },
      gridTemplateRows: {
        "custom": "6rem 1fr auto",
        "customSm": "10rem 1fr auto",
      },
      fontFamily: {
        "titles2": "Playfair Display",
        "general": "Montserrat",
        "titles": "Antic Slab",
      },
      backgroundImage: {
        "coffeBeans": "url(/src/assets/img/fondoCoffeBeansV3.png)",
        "banner": "url(/src/assets/img/officialHeaderV4.jpg)",
        "bannerSm": "url(/src/assets/img/officialHeaderV4SM.png)",
        "cardImg": "url(/src/assets/img/taza-de-cafe.png)",
        "testBanner": "url(/src/assets/img/bannerOfficialV2.jpg)",
      },
      backgroundColor:{
        "bgOpacity": "rgba(0, 0, 0, 0.5)",
        "footer": "#6D4930",
        "bgWhite": "#FAFAFA",
        "hoverSelect": "#C0C0C0",
      },
      boxShadow: {
        "cardShadow": ".6rem .6rem 1rem rgba(0, 0, 0, 0.5)",
        "navShadow": "0 .6rem .5rem rgba(0, 0, 0, 0.5)",
      },
      width: {
        "card": "22rem",
      },
      height: {
        "card": "22rem",
      },
      zIndex: {
        "details": "55",
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        customTheme: {
          "primary": "#E2CFAE",
          "secondary": "#222222",
          "accent": "FFA726",
        },
      },
    ],
  },
}








