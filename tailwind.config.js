module.exports = {
  content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  darkMode: 'media',
  theme: {
    extend: {
      backgroundColor: {
        'light-pink': '#FFCEEA',
        'medium-gray': '#5B5B5B',
        'light-gray': '#AEAEAE',
        'yellow': '#F8F04B',
        'almost-white': '#EFEFEF',
      },
      textColor: {
        'medium-gray': '#5B5B5B',
        'gold': '#FFD700',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

