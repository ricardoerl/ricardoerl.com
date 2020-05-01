module.exports = {
  siteMetadata: {
    title: `ricardoerl.com`,
    description: `Personal blog by Ricardo Ramírez`,
    author: `@ricardoerl`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ricardoerl.com`,
        short_name: `ricardoerl`,
        start_url: `/`,
        background_color: `#fefdf3`,
        theme_color: `#2c223b`,
        icon: `src/images/avatar-thumbnail.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwindcss: true,
        whitelist: ['a'],
        whitelistPatternsChildren: [/markdown/],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
  ],
};
