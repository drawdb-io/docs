---
sidebar_position: 8
---

# How it works

drawDB is a simple ReactJS app. Below is a high-level overview of how things are constructed but generally if you're wondering how something works, the first thing that comes to mind is most probably it.  

## Editor canvas

The canvas is a an `<svg/>` element and all interaction is handled through pointer events. The tables, areas, and notes are `<foreignObject/>` elements, relationships are `<path/>`-s which get calculated based on the start and end field coordinates and widths.

## Storing diagrams

The diagrams and tables get stored in the browser, specifically IndexedDB. Since everything is stored in the browser, before resetting or moving to a different browser, if you want to save your diagrams export them as JSON files.

In addition, when you share a diagram a gist gets created containing the diagram in JSON.

## Exporting

All export functions take the diagram and generate a string using predefined string templates.

## Importing

You can import diagrams from JSON or from SQL.

When you import from SQL the source code gets passed to a parser and then the resulting AST is used to construct a diagram object.

## Internationalization

i18n is used for internationalization. In order to add a new language, all you need to do is add `<your-language.js>` similar to [`en.js`](https://github.com/drawdb-io/drawdb/blob/main/src/i18n/locales/en.js) but with translated values in `src/i18n/locales`.

<br/>

P.S. if you have any questions hit me up on discord. 
