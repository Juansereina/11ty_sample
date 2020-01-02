const { importHtml, render } = require('../utils/testing');
const SnippetSample = importHtml('index.html')

describe('SnippetSample', () => {
  it('Should render the title correctly', () => {
      const { getByText } = render(SnippetSample);

      expect(getByText('Hello world')).not.toBeEmpty()
  })
})
