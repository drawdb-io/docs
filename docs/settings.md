---
sidebar_position: 4
---

import ThemedImage from '../src/components/ThemedImage';

# General Settings

You can customize general editor settings in the `Settings` menu.

<ThemedImage lightImageSrc={require("./img/light/settings.png").default} darkImageSrc={require("./img/dark/settings.png").default} alt="New File" />

These settings are saved in the local storage and are applied to all your diagrams.

## Settings

| Setting | Description |
| -------- | ------- |
| Show timeline | Show the editing history of the diagram. This is essentially all the items in the stack used to undo changes. |
| Autosave | Disable / enable autosaving changes. |
| Panning | Disable / enable moving the canvas. |
| Table width | Set the width of tables. |
| Language | Set UI language. |
| Flush storage | This permanently deletes all the diagrams and templates from IndexedDB. |
