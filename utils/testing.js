const path = require('path');
const fs = require('fs');
const {getQueriesForElement} = require('@testing-library/dom');
const Eleventy = require('@11ty/eleventy');
require('@testing-library/jest-dom/extend-expect');

const importHtml = (route) => fs.readFileSync(path.join(__dirname, route), 'utf8');

const renderHtml = (component) => {
  const container = document.createElement('div');
  container.innerHTML = component;

  return {
    container,
    ...getQueriesForElement(container)
  }
}

const render = async (inputDir, outputDir) => {
  const elev = new Eleventy(path.join(__dirname, inputDir), path.join(__dirname, outputDir));

  await elev.init();
  await elev.write();

  const component = importHtml(`${outputDir}/index.html`);

  return renderHtml(component);
}


module.exports = {
  render
}
