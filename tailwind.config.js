/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/presentation/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#f0e6ff",
          200: "#d4a3ff",
          300: "#9d4edd",
          400: "#7b2cbf",
          500: "#5a189a",

        },
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
    },
  },
  plugins: [],
};

