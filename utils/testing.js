const path = require('path');
const fs = require('fs');
const {getQueriesForElement} = require('@testing-library/dom');
require('@testing-library/jest-dom/extend-expect');

const importHtml = (route) => fs.readFileSync(path.resolve(__dirname, `../dist/${route}`), 'utf8');

const render = (component) => {
  const container = document.createElement('div');
  container.innerHTML = component;

  return {
    container,
    ...getQueriesForElement(container)
  }
}


module.exports = {
  importHtml,
  render
}
