let mix = require('laravel-mix');
require('mix-tailwindcss');
// your Wordpress theme name here
const themePath = './';
const resources = themePath;
mix.setPublicPath(`${themePath}`);

mix.sass(`${resources}/sass/style.scss`, `${themePath}/`).sourceMaps().tailwind();

    mix.browserSync({
        watch: true,
        proxy: "http://icf.local",
        files: [
            `${themePath}/**/*.php`,
            `${themePath}/**/*.js`,
            `${themePath}/**/*.css`,
            `${themePath}/**/*.scss`,
        ]
 });