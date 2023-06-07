import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { B1Black, B2Black, Btn1One, H1Black, H2Black } from "../styles/helpers"

const IndexPage = () => {
  return (
    <Layout>
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>

      <StyledSection>
        <h1>Aliquam tincidunt mauris eu risus.</h1>
        <h2>Aliquam tincidunt mauris eu risus.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
        </p>
        <button>Click Me</button>
        <a href="#">Click Me Next Page</a>
      </StyledSection>
    </Layout>
  )
}

const StyledSection = styled.section`
  h1 {
    ${H1Black};
  }

  h2 {
    ${H2Black};
  }

  p:first-of-type {
    ${B1Black}
  }

  p:last-of-type {
    ${B2Black}
  }

  a {
    ${Btn1One};
  }
`

export const Head = () => <Seo title="Home" />

export default IndexPage
