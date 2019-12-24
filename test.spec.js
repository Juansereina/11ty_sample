const eleventyInstance = require('@11ty/eleventy');
const path = require('path');
const fs = require('fs');
const importedHtml = fs.readFileSync(path.resolve(__dirname, './testing/index.html'), 'utf8');

const {
getQueriesForElement,

} = require('@testing-library/dom');
// adds special assertions like toHaveTextContent
require('@testing-library/jest-dom/extend-expect')
/* jest
    .dontMock('fs'); */

describe('test', () => {
  it('works', async () => {
    try {

      /* const eleventy = new eleventyInstance(path.join(__dirname, './src'), path.join(__dirname, './testing')); */
      /* eleventy.setConfigPathOverride(config()) */;

  /*     eleventy.setPassthroughAll(true);

      await eleventy.init();
      await eleventy.write(); */




      const temp = document.createElement('div');
      temp.innerHTML = importedHtml;

      const { getByText } = getQueriesForElement(temp);


      expect(getByText('Hello world')).not.toBeEmpty()

    } catch (error) {
      console.log(error);
    }
  })
})
