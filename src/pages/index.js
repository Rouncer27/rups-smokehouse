import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import HomeIntro from "../components/templates/home/HomeIntro"
import Flavours from "../components/templates/home/Flavours"
import SideByImages from "../components/templates/home/SideByImages"

const IndexPage = props => {
  return (
    <Layout>
      <Seo title="Home Page" />
      <HomeIntro data={props.data.homeIntro.template.homeTemplate} />
      <Flavours data={props.data.flavours.template.homeTemplate} />
      <SideByImages data={props.data.sideByImages.template.homeTemplate} />
    </Layout>
  )
}

export default IndexPage

export const homeQuery = graphql`
  {
    seoInfo: wpPage(slug: { eq: "home" }) {
      seoFields {
        seoMetaTitle
        seoMetaDescription
        seoMetaImage {
          mediaItemUrl
        }
      }
    }

    homeIntro: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          homeTemplate {
            homeIntroTopTitle
            homeIntroTitle
            homeIntroContent
            homeIntroSideText
            homeIntroSideIcon {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
            homeIntroLogo {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
          }
        }
      }
    }

    flavours: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          homeTemplate {
            flavoursFireIcon {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
            flavoursTitle
            flavoursItems {
              name
              colour
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 1500)
                  }
                }
              }
            }
            flavoursBackgroundImage {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 3000)
                }
              }
            }
            flavoursButtonText
            flavoursLink {
              ... on WpPage {
                slug
              }
            }
          }
        }
      }
    }

    sideByImages: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          homeTemplate {
            sideByImagesImageOne {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }

            sideByImagesImageTwo {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
          }
        }
      }
    }
  }
`
