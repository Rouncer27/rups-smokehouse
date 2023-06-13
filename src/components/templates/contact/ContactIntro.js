import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { B1White, B2White, H1White, medWrapper } from "../../../styles/helpers"

import mountains from "../../../images/mountains-icon.png"

const ContactIntro = ({ data }) => {
  const image = getImage(
    data?.contactIntroLogo?.localFile?.childImageSharp?.gatsbyImageData
  )
  const alt = data?.contactIntroLogo?.altText
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="contact-intro__top-title">
          <h1>{data.contactIntroTopTitle}</h1>
        </div>
        <div className="contact-intro__images">
          <div className="contact-intro__images--logo">
            <GatsbyImage image={image} alt={alt} />
          </div>
          <div
            className="contact-intro__images--mountains"
            style={{
              backgroundImage: `url(${mountains})`,
            }}
          />
          <div
            className="contact-intro__images--mountains"
            style={{
              backgroundImage: `url(${mountains})`,
            }}
          />
        </div>

        <div className="contact-intro__content">
          <div className="contact-intro__content--title">
            <h2>{data.contactIntroContentTitle}</h2>
          </div>
          <div
            className="contact-intro__content--paragraph"
            dangerouslySetInnerHTML={{ __html: data.contactIntroMainContent }}
          />
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  background: linear-gradient(
    to bottom,
    rgba(33, 35, 38, 0.85) 20rem,
    rgba(138, 29, 26, 1) 20rem,
    rgba(138, 29, 26, 1) 100%
  );
  .wrapper {
    ${medWrapper};
  }

  .contact-intro__top-title {
    width: 100%;
    padding: 4rem 0;

    h1 {
      ${B2White};
      text-align: center;
    }
  }

  .contact-intro__images {
    width: 100%;
    position: relative;

    &--logo {
      position: relative;
      width: 100%;
      max-width: 30rem;
      margin: auto;
      z-index: 10;

      @media (min-width: 768px) {
        max-width: 45.6rem;
      }
    }

    &--mountains {
      display: none;
      position: absolute;
      top: 0rem;
      left: 0;
      width: 37.1rem;
      height: 21.4rem;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      z-index: 1;

      @media (min-width: 768px) {
        display: block;
      }

      &:last-of-type {
        left: auto;
        right: 0;
      }
    }
  }

  .contact-intro__content {
    width: 100%;
    padding: 4rem 0;

    &--title {
      width: 100%;
      text-align: center;

      h2 {
        ${H1White};
      }
    }

    &--paragraph {
      width: 100%;
      text-align: center;

      p {
        ${B1White};
      }
    }
  }
`

export default ContactIntro
