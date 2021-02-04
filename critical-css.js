const critical = require('critical');

const extract = require('extract-inline-css');


extract('./out/index.html', {
  dist: './out',
  extractGlobalStyles: true
});

critical.generate({
  // Inline the generated critical-path CSS
  // - true generates HTML
  // - false generates CSS
  inline: false,

  // Your base directory
  base: 'out/',

  // HTML source file
  src: 'output.html',

  css: ['out/extracted.css'],

  // Viewport width
  width: 1300,

  // Viewport height
  height: 900,

  // Output results to file
  target: {
    css: 'critical.css',
    html: 'index-critical.html',
    uncritical: 'uncritical.css',
  },

  // Minify critical-path CSS when inlining
  minify: true,

});