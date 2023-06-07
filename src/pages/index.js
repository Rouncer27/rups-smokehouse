import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
