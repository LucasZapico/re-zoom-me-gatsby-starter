export const Buttons = {
  baseStyle: {
    backgroundColor: 'transparent',
    borderRadius: '10px',
    _focus: { boxShadow: 'none' },
    _hover: {
      textDecoration: 'none',
    },
    fontWeight: 500,
    minWidth: '10rem',
    paddingLeft: '.5rem',
    paddingRight: '.5rem',
    textTransform: 'uppercase',
  },
  sizes: {
    none: {
      height: '100%',
      width: '100%',
    },
  },
  variants: {
    btnCTA: {
      fontWeight: 500,
      textDecoration: 'none',
      color: 'gray.900',
      backgroundColor: 'brand.cta',
      textTransform: "uppercase",
      _active: {
        outlineWidth: '2px',
        outlineColor: 'brand.three',
      },
      _hover: {
        backgroundColor: '#00DBb7',
        // color: 'white',

        boxShadow: '5px 5px 20px #C1E2DD',
      },
    },
    btnOne: {
      color: 'brand.zero',
      backgroundColor: 'brand.three',
      height: '100%',
      width: 'auto',
      _active: {
        backgroundColor: 'brand.three',
      },
      _hover: {
        backgroundColor: 'brand.two',
      },
    },
    btnTwo: {
      color: 'brand.dark',

      fontWeight: '400',

      _active: {
        backgroundColor: '#3E4D4A',
      },
      _hover: {
        backgroundColor: 'brand.three',
        color: 'brand.one',
      },
    },
  },
};

export const Links = {
  baseStyle: {
    color: 'black',
    fontWeight: 900,
    textDecoration: 'none',
    __hover: {
      textDecoration: 'none',
    },
  },
  variants: {
    linkOne: {
      color: 'black',
      paddingRight: '.5rem',
      paddingLeft: '.5rem',
      position: 'relative',
      fontWeight: 900,
      textDecoration: 'none',
      letterSpacing: '.1rem',
      zIndex: 0,
      _after: {
        transition: 'all 0.15s ease-out',
        zIndex: '-1',
        // bgGradient: 'linear(to-br, , brand.one 80%,  brand.three )',
        background: 'brand.seven',
        position: 'absolute',
        content: '""',
        height: '2px',
        width: '100%',
        paddingRight: '0rem',
        paddingLeft: '0rem',
        bottom: '-5px',
        right: '0%',
      },
      _active: {
        _after: {
          zIndex: '-1',
          // bgGradient: 'linear(to-br,  brand.three 80%,  brand.one )',
          background: 'brand.seven',
          position: 'absolute',

          content: '""',
          width: '100%',
          height: '4px',
        },
      },
      _hover: {
        _after: {
          zIndex: '-1',
          // bgGradient: 'linear(to-br,  brand.three 80%,  brand.one )',
          background: 'brand.seven',
          position: 'absolute',

          content: '""',
          width: '100%',
          height: '40%',
        },
      },
    },

    linkInline: {
      color: 'black',
      paddingRight: '.3rem',
      paddingLeft: '.3rem',
      position: 'relative',
      fontWeight: 900,
      letterSpacing: '.1rem',
      _after: {
        transition: 'all 0.15s ease-out',
        zIndex: '-1',
        // bgGradient: 'linear(to-br, , brand.one 80%,  brand.three )',
        background: 'brand.seven',
        position: 'absolute',
        content: '""',
        height: '5px',
        width: '100%',
        paddingRight: '0rem',
        paddingLeft: '0rem',
        bottom: '-5px',
        right: '0%',
      },
      _active: {
        _after: {
          zIndex: '-1',
          // bgGradient: 'linear(to-br,  brand.three 80%,  brand.one )',
          background: 'brand.seven',
          position: 'absolute',

          content: '""',
          width: '100%',
          height: '40%',
        },
      },
      _hover: {
        _after: {
          zIndex: '-1',
          // bgGradient: 'linear(to-br,  brand.three 80%,  brand.one )',
          background: 'brand.seven',
          position: 'absolute',

          content: '""',
          width: '100%',
          height: '40%',
        },
      },
    },
  },
};
