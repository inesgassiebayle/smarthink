/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        fontSize: {
            xs: ['10px', '120%'],
            sm: ['12px', '120%'],
            base: ['16px', '120%'],
            h5: ['20px', '120%'],
            h4: ['24px', '120%'],
            h2: ['28px', '120%'],
            h1: ['32px', '120%'],
        },
        fontWeight: {
            regular: 400,
            bold: 700,
        },
        colors: {
            primary: {
                100: '#a9e0e1',
                200: '#7fd0d3',
                300: '#54c1c4',
                400: '#3eb9bc',
                500: '#29b1b5',
                600: '#259fa3',
                700: '#218e91',
                800: '#1d7c7f',
                900: '#15595b',
            },
            grayscale: {
                black: '#000000',
                100: '#c9dcdc',
                200: '#a5c4c5',
                300: '#9FABAE',
                400: '#899395',
                500: "#6C6F6F",
                white: '#FFFFFF'
            },
            text: {
                black: '#000000',
                white: '#FFFFFF',
                primary: '#29b1b5',
            },
            bg: {
                white: '#FFFFFF'
            },
            avatars: {
                blue: '#007bdb',
                orange: '#ff865b',
                purple: '#6e34a7',
                pink: '#fa5076'
            },
            state: {
                succes: '#58C25C',
                warning: '#FFC75F',
                error: '#F04E42'
            }
        },
        width: {
            'icon-small': '16px',
            'icon-medium': '24px',
            'icon-large': '32px',
        },
        height: {
            'icon-small': '16px',
            'icon-medium': '24px',
            'icon-large': '32px',
        },
    },
  },
  plugins: [],
}

