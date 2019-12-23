const config = require('./config');
const nunjucksFilters = require('./nunjucksFilters');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = ((eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPlugin(syntaxHighlight,
    {
      templateFormats:  ["njk", "md"],
      init: function({ Prism }) {
        Prism.languages.markdown = Prism.languages.extend('markup', {
          'frontmatter': {
            pattern: /^---[\s\S]*?^---$/m,
            greedy: true,
            inside: Prism.languages.yaml
          }
        });
      }
    });
  nunjucksFilters(eleventyConfig);

  return config;
});
