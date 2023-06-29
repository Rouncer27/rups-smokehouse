import React from "react"
import { graphql } from "gatsby"

import LayoutAlt from "../components/LayoutAlt"
import Seo from "../components/Seo"
import MainContent from "../components/templates/default/MainContent"

const defaultPage = props => {
  const seoInfo = props?.data?.seoInfo

  return (
    <LayoutAlt>
      <Seo
        title={seoInfo.seoFields.seoMetaTitle}
        description={seoInfo.seoFields.seoMetaDescription}
        metaImg={seoInfo.seoFields.seoMetaImage.mediaItemUrl}
        location={props.location.pathname}
      />
      <MainContent data={props.data.mainContent.template.defaultTemplate} />
    </LayoutAlt>
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
