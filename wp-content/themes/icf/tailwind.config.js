/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./template-parts/**/*.{html,js,php}",
        "./inc/*.{html,js,php}",
        "./js/*.{html,js,php}",
        "./header.php",
        "./footer.php",
        "./page.php",
        "./single.php"
    ],
    theme: {
        extend: {
            colors: {
                'copy': '#121826',
                'icf-green': '#CCFF00',
                'icf-blue': '#0066FF',
                'icf-coral': '#FF6F61'
            }
        },
        screens: {
            xs: '320px',
            xsm: '450px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            xl2: '1440px',
            xl3: '1900px'
        },
        
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio')
    ],
}

