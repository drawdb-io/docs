import React from 'react';
import {useColorMode} from '@docusaurus/theme-common';

export default function ThemedImage({lightImageSrc, darkImageSrc, ...props}) {
  const {isDarkTheme} = useColorMode();

  return <img src={isDarkTheme ? darkImageSrc : lightImageSrc} {...props} />;
}
