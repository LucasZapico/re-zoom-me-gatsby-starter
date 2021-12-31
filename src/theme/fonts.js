import { Global } from '@emotion/react';
import React from 'react';

const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'Zodiak';
      src: url('/Zodiak-Medium.woff2') format('woff2'),
        url('/Zodiak-Medium.woff') format('woff'); 
    }
    @font-face {
      font-family: 'Satoshi';
      src: url('/Satoshi-Medium.woff2') format('woff2'),
        url('/Satoshi-Medium.woff') format('woff'); 
    }
  `}
  />
);

export default Fonts;
