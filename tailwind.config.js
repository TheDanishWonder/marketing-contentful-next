module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "nxa-white": "#ffffff",
        "nxa-black": "#1F2121",
        "nxa-red": "#FF002B",
        "nxa-gray": "#F5F5F5",
        "nxa-pink": "#FEBEC3",
        "nxa-gray-dark": "#7d7d7d",
      }
    },
  },
  plugins: [],
};
