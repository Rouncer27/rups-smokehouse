import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors, medWrapper } from "../styles/helpers"

import MainLogo from "./Logos/MainLogo"

const HeaderAlt = ({ siteTitle }) => (
  <StyledHeader>
    <div className="wrapper">
      <div className="headerLogo">
        <h1>
          <Link to="/">
            <MainLogo />
            <span>{siteTitle}</span>
          </Link>
        </h1>
      </div>
    </div>
  </StyledHeader>
)

const StyledHeader = styled.header`
  position: relative;
  z-index: 999999;

  .wrapper {
    ${medWrapper};
  }

  .headerLogo {
    max-width: 30rem;
    margin: 0 auto 5rem;

    @media (min-width: 768px) {
      width: 100%;
      margin: 2.5rem auto 0;
    }

    @media (min-width: 1025px) {
      width: 20%;
      max-width: 100%;
      margin: 0 auto;
    }

    a {
      width: 100%;
      display: block;
      margin: auto 0;

      &:focus {
        outline: 0.25rem dashed ${colors.colorTertiary};
      }
    }

    h1 {
      width: 100%;
      margin: 0;
      padding: 0;

      span {
        position: absolute;
        left: -999%;
      }

      @media (min-width: 768px) {
        width: calc(100%);
        margin: 0;
      }
    }
  }
`

export default HeaderAlt
