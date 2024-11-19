module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'key-colors-primary': '#006000',
        'neutral': {
          'neutral30': '#484646',
          'neutral40': '#605D5D',
          'neutral60': '#999999',
        },
      },
    },
  },
  plugins: [],
} 