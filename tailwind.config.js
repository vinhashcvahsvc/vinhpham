/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main-pink": "#EA4C89",
      },
      boxShadow: {
        noibat:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
      },
      keyframes: {
        giatgiat: {
          "0%": { transform: "translateX(0px)" },
          "10%": { transform: "translateX(100px)" },
          "20%": { transform: "scale(2)" },
          "30%": { transform: "translateX(40px)" },
          "50%": { transform: "scale(0.5)" },
          "70%": { transform: "translateX(50px)" },
          "100%": { transform: "translateX(0px)" },
        },
      },
      animation: {
        "giatgiat-animation": "giatgiat 1s linear infinite",
      },
      backgroundImage: {
        neon: `url('https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg')`,
      },
      // screens: {
      //   xs:
      // }
    },
  },
  plugins: [],
};
