/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'red-personal-color': '#c1282a',
        'text-primary-color': '#383838',
        'title-color': '#000000',
        'alternative-bg-color': '#FFBE00',
        'text-alternative-color': '#24355A',
        'custom-blue-color': '#007BFF', // Ajusta este valor a un azul que prefieras
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/images/img6.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
}

