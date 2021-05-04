const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://www.nikolasbarwicki.com",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    title: `Nikolas Barwicki`,
    description: `Cześć! To blog o Javascriptcie, którego autorem jest Nikolas Barwicki. Nowe artykuły, dotyczące zarówno frontendu oraz backendu, co dwa tygodnie. `,
    author: `Nikolas Barwicki`,
    siteUrl: `https://www.nikolasbarwicki.com`,
    keywords: `javascript, programowanie, react, next, nextjs, typescript, deweloper`,
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
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/blog/`, `/categories/`, `/about-me/`],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-D0EKQ929S2"],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
  ],
}
