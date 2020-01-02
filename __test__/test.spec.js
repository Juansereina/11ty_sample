const { render } = require('../utils/testing');

describe('SnippetSample', () => {
  const inputDirFile = "../src/index.njk";
  const outputDirFile = "../__test__/";

  it('Should render the title correctly', async () => {
      const { getByText } = await render(inputDirFile, outputDirFile);

      expect(getByText('Hello world')).not.toBeEmpty();
  });
})
