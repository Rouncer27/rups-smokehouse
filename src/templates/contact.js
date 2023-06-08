import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import ContactIntro from "../components/templates/contact/ContactIntro"
import ContactForm from "../components/templates/contact/ContactForm"
import ProductsDisplay from "../components/templates/contact/ProductsDisplay"
import SideByImages from "../components/templates/contact/SideByImages"

const contact = props => {
  return (
    <Layout>
      <Seo />
      <ContactIntro data={props.data.contactIntro.template.contactTemplate} />
      <ContactForm data={props.data.contactForm.template.contactTemplate} />
      <ProductsDisplay
        data={props.data.productsDisplay.template.contactTemplate}
      />
      <SideByImages data={props.data.sideByImages.template.contactTemplate} />
    </Layout>
  )
}

export const contactTempQuery = graphql`
  query contactTempPage($id: String!) {
    contactIntro: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Contact {
          contactTemplate {
            contactIntroTopTitle
            contactIntroLogo {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
            contactIntroContentTitle
            contactIntroMainContent
          }
        }
      }
    }

    contactForm: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Contact {
          contactTemplate {
            contactFormDisplay
            contactFormFlavoursAvailable {
              name
              availableInStock
              colour
            }
          }
        }
      }
    }

    productsDisplay: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Contact {
          contactTemplate {
            productsDisplayBackgroundImage {
              altText
              mediaItemUrl
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 3000)
                }
              }
            }
            productsDisplayProducts {
              productImage {
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

    sideByImages: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Contact {
          contactTemplate {
            sideByImagesOne {
              altText
              mediaItemUrl
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 2000)
                }
              }
            }

            sideByImagesTwo {
              altText
              mediaItemUrl
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
  }
`

export default contact
