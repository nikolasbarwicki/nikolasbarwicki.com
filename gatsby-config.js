module.exports = {
  siteMetadata: {
    title: `Nikolas Barwicki`,
    description: `Jestem Javascript developerem. To miejsce jest moim blogiem i portfolio. `,
    author: `Nikolas Barwicki`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nikolas Barwicki Blog`,
        short_name: `Barwicki Blog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#610239`,
        display: `minimal-ui`,
        icon: `src/assets/images/personal-logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/`,
      },
    },
    `gatsby-plugin-mdx`,
  ],
}
