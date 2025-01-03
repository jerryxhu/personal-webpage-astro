/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "light-beige": "#f1ead2",
        "main-black": "#212121",
        "second-gray": "#424242",
        "main-blue": "#55B6EF",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    screens: {
      md: "920px",
      sm: "480px",
    },
    plugins: [],
  },
};
