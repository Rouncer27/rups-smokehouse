import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import SchemaOrg from "./SchemaOrg"

function Seo({ description, lang, meta, title, metaImg, location }) {
  const { site, siteLogo, defaultFb } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteLogo
            metaImg
            siteUrl
          }
        }

        siteLogo: file(relativePath: { eq: "rups-logo-rups.png" }) {
          publicURL
        }

        defaultFb: file(relativePath: { eq: "rups-logo-rups.png" }) {
          publicURL
        }
      }
    `
  )
  const isBlogPost = false
  const siteLogoUrl = `${site.siteMetadata.siteUrl}/${siteLogo.publicURL}`
  const metaDescription = description || site.siteMetadata.description

  const backupDefaultFBImgUrl = defaultFb.publicURL
  const pageSpecificityFBImgUrl = metaImg
  const imgToUse =
    pageSpecificityFBImgUrl !== null
      ? pageSpecificityFBImgUrl
      : `${site.siteMetadata.siteUrl}/${backupDefaultFBImgUrl}`
  const canonicalUrl = `${site.siteMetadata.siteUrl}${location}`

  return (
    <React.Fragment>
      <Helmet htmlAttributes={{ lang }}>
        {/* General tags */}
        <title>{title}</title>
        <meta charset="UTF-8" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="description" content={metaDescription} />
        <meta name="image" content={imgToUse} />
        <link rel="canonical" href={canonicalUrl} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={canonicalUrl} />
        {isBlogPost ? (
          <meta property="og:type" content="article" />
        ) : (
          <meta property="og:type" content="website" />
        )}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={imgToUse} />
        <meta property="og:image:alt" content={metaDescription} />
        {/* <meta property="fb:app_id" content={seo.social.fbAppID} /> */}
        <meta property="og:site_name" content={title} />
        <meta property="og:locale" content={`en_US`} />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={site.siteMetadata.author} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={imgToUse} />
        {/* Google Ownership Verification */}
        {/* <meta
          name="google-site-verification"
          content=""
        /> */}
      </Helmet>

      <SchemaOrg
        isBlogPost={false}
        url={site.siteMetadata.siteUrl}
        title={title}
        image={siteLogoUrl}
        logo={siteLogoUrl}
        description={description}
        datePublished="June 28, 2023"
        canonicalUrl="http://rupssmokehousejerky.com/"
        author="@switchback4ever"
        organization="Rup's Smokehouse Jerky"
        defaultTitle="Rup's Smokehouse Jerky"
      />
    </React.Fragment>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
