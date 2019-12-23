const markdownIt = require("markdown-it");

const animalSection = (label, content) => `
  <div class="animal__text">
    <strong class="label">${label}:</strong>
    ${content}
  </div>
`;

const CopyClipboardElementWrapper = (content, prefixCode) => {
  return `<div onclick="handleCopyToClipboard(this)">

${content}

</div>`;
};

const nunjucksFilters = (eleventyConfig) => {
  eleventyConfig.addNunjucksShortcode("animal_section", animalSection);
  eleventyConfig.addPairedShortcode("copy", CopyClipboardElementWrapper);
}

module.exports = nunjucksFilters;
