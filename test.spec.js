const eleventyInstance = require('@11ty/eleventy');
const path = require('path');

describe('test', () => {
  it('works', async () => {
    try {

      const eleventy = new eleventyInstance(path.join(__dirname, './src'), path.join(__dirname, './src/test'));
      eleventy.setFormats('.md');
      eleventy.setPassthroughAll(true);
      eleventy.setDryRun(true);

      await eleventy.init();
      await eleventy.write();

    } catch (error) {
      console.log(error);
    }
  })
})
