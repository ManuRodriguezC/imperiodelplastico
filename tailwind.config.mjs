/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': "radial-gradient(circle, rgba(252,4,4,1) 79%, rgb(134, 69, 69) 100%)",
        'hero': "linear-gradient(0deg, rgb(176, 207, 255),rgb(92, 104, 168))",
        'products': "repeating-linear-gradient(90deg, rgba(246, 111, 139,0.5) 0px, rgba(246, 111, 139,0.5) 10px,transparent 10px, transparent 20px),repeating-linear-gradient(0deg, rgba(246, 111, 139,0.5) 0px, rgba(246, 111, 139,0.5) 10px,transparent 10px, transparent 20px),linear-gradient(90deg, #ffffff,#ffffff)",
        'hero2': "radial-gradient(circle at 52% 37%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 15%,transparent 15%, transparent 65%,transparent 65%, transparent 100%),radial-gradient(circle at 70% 3%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 33%,transparent 33%, transparent 62%,transparent 62%, transparent 100%),radial-gradient(circle at 38% 28%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 15%,transparent 15%, transparent 94%,transparent 94%, transparent 100%),radial-gradient(circle at 12% 92%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 1%,transparent 1%, transparent 19%,transparent 19%, transparent 100%),radial-gradient(circle at 50% 84%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 28%,transparent 28%, transparent 96%,transparent 96%, transparent 100%),radial-gradient(circle at 11% 43%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 20%,transparent 20%, transparent 63%,transparent 63%, transparent 100%),radial-gradient(circle at 45% 11%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 19%,transparent 19%, transparent 65%,transparent 65%, transparent 100%),radial-gradient(circle at 90% 54%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 11%,transparent 11%, transparent 19%,transparent 19%, transparent 100%),radial-gradient(circle at 23% 100%, hsla(165,0%,91%,0.05) 0%, hsla(165,0%,91%,0.05) 35%,transparent 35%, transparent 86%,transparent 86%, transparent 100%),linear-gradient(0deg, rgb(95, 19, 0),rgb(187, 23, 4))"
      },
      boxShadow: {
        'back': 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
      }
    },
  },
  plugins: [],
};
