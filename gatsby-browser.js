import './src/assets/sass/index.scss';
import { CSSReset, ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { customTheme } from './src/theme/theme';
import Fonts from './src/theme/fonts';

export const wrapRootElement = ({ element }) => (
  <ChakraProvider theme={customTheme}>
    <Fonts />
    <CSSReset />
    {element}
  </ChakraProvider>
);
