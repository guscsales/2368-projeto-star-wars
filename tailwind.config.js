/** @type {import('tailwindcss').Config} */
export default {
  content: ['src/**/*.{js,jsx,css,svg}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.75rem',
        lg: '1rem',
      },
    },
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
};
