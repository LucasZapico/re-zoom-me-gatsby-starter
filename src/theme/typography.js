export const Fonts = {
  // heading: "'Inter', sans-serif",
  heading: "'Mukta', sans-serif;",
  body: "'Mukta', sans-serif;",
  mono: "'Roboto Mono', monospace",
};

// Heading
export const Headings = {
  baseStyle: {
    fontWeight: 400,
    color: '#3c474e',
    marginBottom: '6',
    lineHeight: 'lineHeights.taller',
    letterSpacing: '0.02rem',
  },
  // Styles for the size variations
  sizes: {
    '4xl': {
      fontSize: ['4xl', null, '7xl'],
      lineHeight: 1.5,
    },
    '3xl': {
      fontSize: ['4xl', null, '6xl'],
      lineHeight: 1.5,
    },
    '2xl': {
      lineHeight: 1.5,
    },
    xl: {
      lineHeight: 1.5,
    },
    lg: {
      lineHeight: 1.5,
    },
  }, 
  // Styles for the visual style variations
  variants: {
    sec: {
      fontFamily: "'Mukta', sans-serif;",
      fontWeight: 300,
      color: "gray.500"
    },
    tri: {
      fontFamily: "'Mukta', sans-serif;",
      color: "gray.300",
      fontWeight: 500,
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
};

export const Texts = {
  baseStyle: {
    fontFamily: "'Mukta', sans-serif",
    color: 'gray.600',
    fontWeight: 500,
    letterSpacing: '0.02rem',
    lineHeight: 1.5,
    marginBottom: '6',
  },
  variants: {
    sec: {
      color: 'gray.700',
    },
    tri: {
      color: 'gray.400',
    },
  },
};
