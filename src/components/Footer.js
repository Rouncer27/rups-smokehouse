import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <StyledFooter>
      © {new Date().getFullYear()} &middot; Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer``

export default Footer
