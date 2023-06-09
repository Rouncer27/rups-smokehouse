import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import HomeIntro from "../components/templates/home/HomeIntro"
import Flavours from "../components/templates/home/Flavours"
import SideByImages from "../components/templates/home/SideByImages"
import Testimonial from "../components/templates/home/Testimonial"

const IndexPage = props => {
  const seoInfo = props.data.seoInfo
  return (
    <Layout>
      <Seo
        title={seoInfo.seoFields.seoMetaTitle}
        description={seoInfo.seoFields.seoMetaDescription}
        metaImg={seoInfo.seoFields.seoMetaImage.mediaItemUrl}
        location={props.location.pathname}
      />
      <HomeIntro data={props.data.homeIntro.template.homeTemplate} />
      <Flavours data={props.data.flavours.template.homeTemplate} />
      <SideByImages data={props.data.sideByImages.template.homeTemplate} />
      <Testimonial data={props.data.testimonal.template.homeTemplate} />
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
              mediaItemUrl
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
              mediaItemUrl
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
                  gatsbyImageData(width: 2000)
                }
              }
            }

            sideByImagesImageTwo {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 2000)
                }
              }
            }
          }
        }
      }
    }

    testimonal: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          homeTemplate {
            testimonialQuote
          }
        }
      }
    }
  }
`
