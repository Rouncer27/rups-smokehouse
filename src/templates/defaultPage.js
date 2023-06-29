import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import MainContent from "../components/templates/default/MainContent"

const defaultPage = props => {
  const seoInfo = props?.data?.seoInfo

  console.log("PROPS", props)

  return (
    <Layout>
      <Seo
        title={seoInfo.seoFields.seoMetaTitle}
        description={seoInfo.seoFields.seoMetaDescription}
        metaImg={seoInfo.seoFields.seoMetaImage.mediaItemUrl}
        location={props.location.pathname}
      />
      <MainContent data={props.data.mainContent.template.defaultTemplate} />
    </Layout>
  )
}

export const defaultTempQuery = graphql`
  query defaultTempPage($id: String!) {
    seoInfo: wpPage(id: { eq: $id }) {
      seoFields {
        seoMetaTitle
        seoMetaDescription
        seoMetaImage {
          mediaItemUrl
        }
      }
    }

    mainContent: wpPage(id: { eq: $id }) {
      template {
        ... on WpDefaultTemplate {
          defaultTemplate {
            mainContentTitle
            mainContentWysiwyg
          }
        }
      }
    }
  }
`

export default defaultPage
