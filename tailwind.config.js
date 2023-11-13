/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-from-left': 'slide-from-left 1.5s ease',
        'slide-from-right': 'slide-from-right 1.5s ease',
      },
      keyframes: {
        'slide-from-left': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
        'slide-from-right': {
          '0%': {
            transform: 'translateX(100%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
      },
    },
    fontFamily: {
      abc: ["Chela One", "cursive"],
      qwe: ["Belanosima", "sans-serif"],
    },
  },
};
