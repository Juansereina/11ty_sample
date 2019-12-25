const { importHtml, render } = require('../utils/testing');
const SnippetSample = importHtml('index.html')

describe('test', () => {
  it('works', async () => {
      const { getByText } = render(SnippetSample);

      expect(getByText('Hello world')).not.toBeEmpty()
  })
})
