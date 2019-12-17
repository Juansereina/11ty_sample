const config = require('./config');
const nunjucksFilters = require('./nunjucksFilters');

module.exports = ((eleventyConfig) => {
  nunjucksFilters(eleventyConfig);

  return config;
});
