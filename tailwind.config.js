module.exports = {
  content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  darkMode: 'media',
  theme: {
    screens: {
      'xs': '300px',
      'sm': '340px',
      'md': '600px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'black': '#000000',
        'dark-red': '#3D0000',
        'medium-red': '#950101',
        'red': '#FF0000',
      },
      backgroundColor: {
        'black': '#000000',
        'dark-red': '#3D0000',
        'medium-red': '#950101',
        'red': '#FF0000',
      },
      textColor: {
        'black': '#000000',
        'dark-red': '#3D0000',
        'medium-red': '#950101',
        'red': '#FF0000',
      },
      borderColor: {
        'black': '#000000',
        'dark-red': '#3D0000',
        'medium-red': '#950101',
        'red': '#FF0000',
      },
      boxShadow: {
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      transitionProperty: {
        'width': 'width',
        'spacing': 'margin, padding',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backgroundImage: {
        'custom-bg': "linear-gradient(to bottom, rgba(255,255,255,1), rgba(0,0,0,0)), url('./src/assets/background.jpg'), linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,1))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

