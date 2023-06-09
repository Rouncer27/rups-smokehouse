require("dotenv").config({ path: ".env" })

module.exports = {
  siteMetadata: {
    title: `Rup's Smokehouse`,
    description: `Rup's Smokehouse`,
    author: `@switchback4ever`,
    metaImg: `src/images/rups-logo-rups.png`,
    siteLogo: `src/images/rups-logo-rups.png`,
    siteUrl: `https://rupssmokehousejerky.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: process.env.WORDPRESS_URL,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-KT1QWDLM69"],
      },
      pluginConfig: {
        head: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://rupssmokehousejerky.com/",
        sitemap: "https://rupssmokehousejerky.com/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rupssmokehousejerky.com/`,
      },
    },
    `gatsby-plugin-netlify`,
  ],
}
