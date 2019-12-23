const config = require('./config');
const nunjucksFilters = require('./nunjucksFilters');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = ((eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPlugin(syntaxHighlight, {
		templateFormats:  ["njk", "md"] });
  nunjucksFilters(eleventyConfig);

  return config;
});
