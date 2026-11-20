---
title: Adding and Editing Docs Pages
description: How to add, edit and structure pages on the EyeTrackVR docs site, including the frontmatter every page should carry.
---

# Pages {.text-[var(--font-accent)]}

This section will cover how to add or edit pages on the docs website.

Please use the `Github Markdown` flavour for your Markdown files.

Please look at other pages to see how they are formatted, and for examples of how to use Markdown.

## Adding a Page

To add a page, you will need to create a new Markdown file in the `vitepress/docs/src/pages` folder. The file name will be the URL of the page. For example, if you create a file called `my_page.md`, the URL will be `https://docs.eyetrackvr.dev/my_page`.

### Sub-directories

You can also create sub-directories in the `vitepress/docs/src/pages` folder. For example, if you create a file called `my_page.md` in a folder called `my_folder`, the URL will be `https://docs.eyetrackvr.dev/my_folder/my_page`.

This is useful for organizing pages into categories.

### Adding a Page to the Sidebar

To add a page to the sidebar, you will need to add the page to the `vitepress/docs/src/custom/theme/index.js` file.

To do this, you will need to add the page to the `sidebar` object.

For example, if you want to add a page called `my_page.md` to the sidebar, you will need to add the following to the `sidebar` object:

```js
{
    text: "Getting Started",
    collapsible: true,
    items: [
        { text: "Introduction", link: "/getting_started/intro" },
        { text: "Things to know before you start", link: "/getting_started/things_to_know" },
        { text: "My Page", link: "/my_folder/my_page" }, // Add this line - subdir then file
    ],
},
```

::: info Note
The `link` property does not require a file extension. Please do not add it.
:::

### Title Style {.text-[var(--font-accent)]}

The title style is the style of the title that appears at the top of the page.

We like to keep this cohesive, so please use the following style:

```md
# My Page {.text-[var(--font-accent)]}
```

Page titles are styled by the theme, so every page gets the same plain heading whatever classes it carries. The `{}` attribute syntax still works for other headings and elements, and the site's CSS variables live in `src/styles/theme.css`.

::: tip Tip
This entire site supports `TailWindCSS` classes. You can find the documentation [here](https://tailwindcss.com/docs).

All classes you wish to add, must be prefaced with a `.` when inside of the `{}`.

When using classes on `HTML` elements, you can use the `class` attribute. For example:

```html
<h1 class="text-[#e67e22]">My Page</h1>
```

:::

## Editing a Page

To edit a page, you will need to edit the Markdown file in the `vitepress/docs/src/pages` folder.
