/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            DEFAULT: 'rgb(255, 102, 88)',
            5: 'rgb(255, 102, 88 / 0.05)',
            10: 'rgb(255, 102, 88 / 0.10)',
            20: 'rgb(255, 102, 88 / 0.20)',
            30: 'rgb(255, 102, 88 / 0.30)',
            40: 'rgb(255, 102, 88 / 0.40)',
            50: 'rgb(255, 102, 88 / 0.50)',
          },
        }
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
}
