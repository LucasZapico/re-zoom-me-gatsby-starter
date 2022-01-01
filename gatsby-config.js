if (process.env.STAGING) {
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}.staging`,
  });
} else {
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
  });
}


module.exports = {
  siteMetadata: {
    title: "re-zoom-me-gatsby-starter",
    siteUrl: `${process.env.GATSBY_SITE_URL}`,
    titleTemplate: 'gatsby resume showcase starter | %s ',
    description: 'gatsby resume showcase starter',
    baseUrl: 'rezoomme.com',
    author: '@rezoomme.com',
    image: '/opengraph-gen.png',
    contactEmail: 'Connect@rezoomme.com',
    phone: '111.111.1111',
    address: '',
    twitterUsername: '',
    facebookUsername: '',
    linkedInUsername: '',
    redditUsername: '',
    youtubeUsername: '',
    instagramUsername: '',
    zillowUsername: '',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [process.env.GATSBY_GOOGLE_ANALYTIC_ID],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
        gtagConfig: {
          dimension: '{{ BRANCH }}',
        },
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: process.env.GATSBY_SITE_URL,
        sitemap: `${process.env.GATSBY_SITE_URL}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve(`${__dirname}/src/components/base/layout.js`),
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/content/`,
      },
    },
  ],
};
