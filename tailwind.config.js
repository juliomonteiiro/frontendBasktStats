module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#FF6F00",
        black: "#000000",
        white: "#FFFFFF",
        blueLight: "#4A90E2",
        grayLight: "#F4F4F4",
        grayDark: "#2D2D2D",
        green: "#1B5E20",
      },
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
        secondary: ['Oswald', 'sans-serif'],
        heading: ['Bebas Neue', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
      },
      boxShadow: {
        'button': '0 4px 8px rgba(0, 0, 0, 0.1)',
        'card': '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
