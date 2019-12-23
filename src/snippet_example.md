<link href="/css/prism-a11y-dark.css" rel="stylesheet" />

{% copy %}
```js
    module.exports =
        `<p>These can
        span
    multiple
lines!</p>`;
```
{% endcopy %}

<script>
  async function handleCopyToClipboard(event) {
    const [preElement] = event.children;
    const { innerText, innerHTML } = preElement;

    if (navigator && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(innerText)
        preElement.textContent = 'Copied to clipboard!'
        setTimeout(() => preElement.innerHTML = innerHTML , 2000);
      } catch (err) {
        console.error('Failed to copy!', err)
      }
    }
  }
</script>
