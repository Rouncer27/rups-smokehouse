import React from "react"
import styled from "styled-components"

import LayoutAlt from "../components/LayoutAlt"
import Seo from "../components/Seo"
import { B2Black, Btn1One, H2Black, standardWrapper } from "../styles/helpers"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <LayoutAlt>
      <Seo title="404: Not Found" />
      <StyledNotFound>
        <div className="wrapper">
          <div className="content">
            <h1>404: Not Found</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            <Link to="/">Home</Link>
          </div>
        </div>
      </StyledNotFound>
    </LayoutAlt>
  )
}

const StyledNotFound = styled.div`
  .wrapper {
    ${standardWrapper};
  }

  .content {
    width: 100%;
    padding: 15rem 0;
    text-align: center;

    h1 {
      ${H2Black};
    }

    p {
      ${B2Black};
    }

    a {
      ${Btn1One};
    }
  }
`

export default NotFoundPage
