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
    `gatsby-plugin-sharp`,
  ],
};
