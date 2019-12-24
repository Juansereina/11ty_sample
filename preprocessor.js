/* const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  presets: ['module:@11ty/eleventy/cmd', '@babel/plugin-proposal-class-properties', "@babel/env"],
}); */


const {transform} = require('@babel/core');
const jestPreset = require('babel-jest');

module.exports = {
  process(src, filename) {
    const result = transform(src, {
      filename,
      presets: ['module:@11ty/eleventy/cmd'],
    });

    console.log('hey: ', src, filename);


    return result ? result.code : src;
  },
};
