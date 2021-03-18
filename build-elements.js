const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist.aot.prod/main.js',
    './dist.aot.prod/polyfills.js',
    './dist.aot.prod/runtime.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/card-element.js');
})();
