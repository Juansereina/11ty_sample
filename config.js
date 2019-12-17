module.exports = {
  dir: { input: 'src', output: 'dist', data: '_data' },
  passthroughFileCopy: true,
  templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
  htmlTemplateEngine: 'njk'
};
