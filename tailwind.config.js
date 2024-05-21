/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
      backgroundImage: {
        "gradient-text": "linear-gradient(90deg, #F87516 0%, #5E11FF 100%)",
        "gradient-image": "linear-gradient(90deg, #F87516 0%, #5E11FF 100%)",
        "gradient": "linear-gradient(180deg, #0D061F 0%, #251E35 100%)",
      },
    },
  },
  plugins: [],
};
