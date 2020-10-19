const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

imagemin(['out/assets/*.{jpg,png,jpeg}'], {
  destination: __dirname + '/out/assets/',
  plugins: [
    imageminWebp({
      quality: 75,

    })
  ]
}).then(() => {
  console.log('Images optimized');
});