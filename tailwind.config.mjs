/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': "radial-gradient(circle, rgba(252,4,4,1) 79%, rgba(0,0,0,1) 100%)",
      },
    },
  },
  plugins: [],
};
