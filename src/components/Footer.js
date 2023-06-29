import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import { B1White, B2White, colors, medWrapper } from "../styles/helpers"

const getData = graphql`
  {
    footerData: wp {
      acfOptionsSiteWideSettings {
        footer {
          footerContentContent
        }
      }
    }
  }
`

const Footer = () => {
  const data = useStaticQuery(getData)
  return (
    <StyledFooter>
      <div className="wrapper">
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html:
              data.footerData.acfOptionsSiteWideSettings.footer
                .footerContentContent,
          }}
        />
        <div className="foot-links">
          <p>
            <Link to="/privacy-policy">Privacy Policy</Link>
            {" | "}
            <Link to="/disclaimer">Disclaimer</Link>
          </p>
        </div>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: ${colors.colorPrimary};

  .wrapper {
    ${medWrapper};
    padding: 4.2rem;
  }

  .content {
    width: 100%;
    text-align: center;

    p:last-of-type {
      margin: 0;
    }
  }

  p {
    ${B1White};
    color: rgba(255, 255, 255, 0.55);

    a {
      ${B1White};
      color: rgba(255, 255, 255, 0.55);
    }
  }

  .foot-links {
    width: 100%;
    text-align: center;

    p {
      ${B2White};
      margin: 0;
      color: rgba(255, 255, 255, 0.55);
    }

    a {
      ${B2White};
      color: rgba(255, 255, 255, 0.55);
    }
  }
`

export default Footer
