const animalSection = (label, content) => `
  <div class="animal__text">
    <strong class="label">${label}:</strong>
    ${content}
  </div>
`;

const nunjucksFilters = (eleventyConfig) => {
  eleventyConfig.addNunjucksShortcode("animal_section", animalSection);
}

module.exports = nunjucksFilters;
