import { type HTMLRichTextMapSerializer } from '@prismicio/client';

const serializer: HTMLRichTextMapSerializer = {
  heading1: ({ children }) =>
    /* html */ `<h1 class="">${children}</h1>`,
  heading2: ({ children }) =>
    /* html */ `<h2 class="">${children}</h2>`,
  heading3: ({ children }) =>
    /* html */ `<h3 class="">${children}</h3>`,
  paragraph: ({ children }) =>
    /* html */ `<p class="">${children}</p>`,
  oList: ({ children }) =>
    /* html */ `<ol class="">${children}</ol>`,
  oListItem: ({ children }) =>
    /* html */ `<li class="">${children}</li>`,
  list: ({ children }) =>
    /* html */ `<ul class="">${children}</ul>`,
  listItem: ({ children }) =>
    /* html */ `<li class="">${children}</li>`,
  preformatted: ({ children }) =>
    /* html */ `<pre class=""><code>${children}</code></pre>`,
  strong: ({ children }) =>
    /* html */ `<strong class="">${children}</strong>`,
  hyperlink: ({ children, node }) =>
    /* html */`<a href="${node.data.url}" class="">${children}</a>`
}

export default serializer;