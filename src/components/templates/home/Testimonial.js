import React from "react"
import styled from "styled-components"
import { B1White, colors, standardWrapper } from "../../../styles/helpers"

const Testimonial = ({ data }) => {
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="testimonial">
          <div dangerouslySetInnerHTML={{ __html: data.testimonialQuote }} />
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding-top: 2rem;
  background-color: ${colors.colorPrimary};

  .wrapper {
    ${standardWrapper};
  }

  .testimonial {
    text-align: center;

    p {
      ${B1White};
    }
  }
`

export default Testimonial
