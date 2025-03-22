import tailwindcssAnimate from "tailwindcss-animate";

export default {
    content: [
      "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}"
      ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
        },
      },
    },
    plugins: [],
  };