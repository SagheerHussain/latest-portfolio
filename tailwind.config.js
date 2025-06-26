/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0f0f0f",
        glass: "rgba(255,255,255,0.05)",
      },
      boxShadow: {
        neo: "10px 10px 30px #0a0a0a, -10px -10px 30px #151515",
        glass: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      },
    },
  },
  plugins: [],
};
