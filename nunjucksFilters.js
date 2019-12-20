const animalSection = (label, content) => `
  <div class="animal__text">
    <strong class="label">${label}:</strong>
    ${content}
  </div>
`;

const CopyClipboardElementWrapper = (content) =>
(`<div onclick="handleCopyToClipboard(this)">${content}</div>`);

const nunjucksFilters = (eleventyConfig) => {
  eleventyConfig.addNunjucksShortcode("animal_section", animalSection);
  eleventyConfig.addPairedNunjucksShortcode("copy", CopyClipboardElementWrapper);
}

module.exports = nunjucksFilters;
