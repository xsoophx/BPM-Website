/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            colors: {
                purpleBackground: '#130826',
                lightPurpleBackground: '#2f0142',
            },
            fontFamily: {
                sans: ['Cabin', 'sans-serif']
            },
            textColor: {
                'custom': '#ffffff',
            },
        },
    },
    plugins: [],
}
