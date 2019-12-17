const config = require('./config');
const nunjucksFilters = require('./nunjucksFilters');

module.exports = ((eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('css');
  nunjucksFilters(eleventyConfig);

  return config;
});
