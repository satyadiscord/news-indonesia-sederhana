/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
      },
      colors: {
        blues: "#2563eb",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
