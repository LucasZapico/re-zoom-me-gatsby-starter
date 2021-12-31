import { extendTheme } from '@chakra-ui/react';

import { Fonts, Headings, Texts } from './typography';
import { Buttons, Links } from './buttons-links';

const Color = {
  black: '#000000',
  white: '#FFFFFF',
  brand: {
    cta: "#79B4B7",
    zero: '#FFFFFF',
    one: '#FBFBFB',
    two: '#32502E', 
    three: "#CEE5D0"
  },
 
   "gray": {
      "50": "#F0F4F4",
      "100": "#D6E0E1",
      "200": "#BCCDCD",
      "300": "#A1B9BA",
      "400": "#87A5A6",
      "500": "#6C9293",
      "600": "#577475",
      "700": "#415758",
      "800": "#2B3A3B",
      "900": "#161D1D"
    }

}

export const customTheme = extendTheme({
  components: {
    Link: Links,
    Button: Buttons,
    Heading: Headings,
    Text: Texts,
    Input: {
      borderRadius: '0%',
    },
  },
  colors: Color,
  fonts: Fonts,
  styles: {
    global: {},
  },
});
