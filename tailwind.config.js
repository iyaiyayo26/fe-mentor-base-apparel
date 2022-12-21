/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "Desaturated-Red": "hsl(0, 36%, 70%)",
        "Soft-Red": "hsl(0, 93%, 68%)",
        "Dark-Grayish-Red": "hsl(0, 6%, 24%)",
      },
      fontFamily: {
        "Josefin-Sans": ["Josefin Sans", "sans serif"],
      },
    },
  },
  plugins: [],
};
