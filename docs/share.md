---
sidebar_position: 6
---

import ThemedImage from '../src/components/ThemedImage';

# Sharing a diagram

Easily share and receive diagrams with a few clicks.

## How to share

Share a diagram by clicking the `Share` button in the menubar, then copy and distribute the generated link that can be used to get a copy of the diagram.

:::info

Sharing a diagram doesn't start a collaboration session and does not let others edit your instance of the diagram.

:::

<ThemedImage lightImageSrc={require("./img/light/share.png").default} darkImageSrc={require("./img/dark/share.png").default} alt="Share" />

## What happens when you share

When you click `Share` a secret gist gets created with the raw json of the diagram. Then when you load a diagram from a shared link the json gets loaded from the gist.

:::warning

While secret gists are not visible to search engines they are still visible if someone comes accross the url.

:::

To learn more about gists, please, refer to the [GitHub Documentation](https://docs.github.com/en/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists).

In case you want to delete a gist, you can click the `Unshare` button.

Additionally, the gist does not get synced with your working diagram unless you re-share.
