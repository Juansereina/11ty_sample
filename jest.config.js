const path = require('path');
const fs = require('fs');
const eleventyInstance = require('@11ty/eleventy');

async function compileFiles() {
  const srcPath = path.join(__dirname, './src');
  const distPath = path.join(__dirname, './dist');

  // Remove dist folder
  await fs.rmdir(distPath, { recursive: true }, () => console.log('dist folder cleaned'));

  const eleventy = new eleventyInstance(srcPath, distPath);

  // Allows to copy files in the dist folder
  eleventy.setPassthroughAll(true);

  // Compile files
  await eleventy.init();
  await eleventy.write();
}

compileFiles();

module.exports = () => ({})
