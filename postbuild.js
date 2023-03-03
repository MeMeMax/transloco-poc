const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist/apps/webcomponent');
const appAssetsFolder = path.join(__dirname, 'apps/showcase/src/assets');
const wcFileName = 'webcomponent.js';

const filesToJoin = fs
  .readdirSync(distDir)
  .filter((file) => {
    return file.endsWith('.js') && file !== wcFileName;
  })
  .reduce((agg, file) => {
    agg[file.split('.')[0]] = path.join(distDir, file);
    return agg;
  }, {});

let result = '';
if (filesToJoin.polyfills) {
  result += fs.readFileSync(filesToJoin.polyfills, 'utf-8');
}
if (filesToJoin.runtime) {
  result += fs.readFileSync(filesToJoin.runtime, 'utf-8');
}
if (filesToJoin.main) {
  result += fs.readFileSync(filesToJoin.main, 'utf-8');
}

fs.writeFileSync(path.join(appAssetsFolder, wcFileName), result, 'utf-8');
console.info(`Merged polyfills, runtime and main into ${wcFileName}`);
