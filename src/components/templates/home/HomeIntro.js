import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1White,
  B2White,
  Btn1One,
  H1White,
  H2White,
  colors,
} from "../../../styles/helpers"
import { Link } from "gatsby"

import mountians from "../../../images/mountains-icon.png"
import graphicOne from "../../../images/graphic-one.png"

const HomeIntro = ({ data }) => {
  const image = getImage(
    data?.homeIntroLogo?.localFile?.childImageSharp?.gatsbyImageData
  )
  const alt = data?.homeIntroLogo?.altText
  const icon = getImage(
    data?.homeIntroSideIcon?.localFile?.childImageSharp?.gatsbyImageData
  )
  const iconAlt = data?.homeIntroSideIcon?.altText

  return (
    <StyledSection>
      <div className="wrapper">
        <div className="main-side">
          <div className="main-side__inner">
            <div className="main-side__logo">
              <GatsbyImage image={image} alt={alt} />
            </div>
            <div className="main-side__title">
              <p>{data.homeIntroTopTitle}</p>
              <h1>{data.homeIntroTitle}</h1>
            </div>
            <div
              className="main-side__content"
              dangerouslySetInnerHTML={{ __html: data.homeIntroContent }}
            />
          </div>
        </div>

        <div className="second-side">
          <div className="second-side__inner">
            <div className="second-side__order">
              <Link to={`/contact`}>Order Now!</Link>
            </div>
            <div className="second-side__mountains">
              <img src={mountians} alt="mountains" />
            </div>
            <div
              className="second-side__content"
              dangerouslySetInnerHTML={{ __html: data.homeIntroSideText }}
            />
            <div className="second-side__icon">
              <div className="second-side__icon--wrapper">
                <GatsbyImage image={icon} alt={iconAlt} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="graphic-one"
        style={{
          backgroundImage: `url(${graphicOne})`,
        }}
      />
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: relative;
  background-color: ${colors.colorPrimary};
  padding-top: 5.8rem;

  @media (min-width: 768px) {
    background-color: #212326;
  }

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .main-side {
    position: relative;
    width: calc(100%);
    border-top-right-radius: 10rem;
    border-bottom-right-radius: 10rem;
    background-color: transparent;
    z-index: 10;

    @media (min-width: 768px) {
      width: calc(65%);
      background-color: ${colors.colorPrimary};
    }

    @media (min-width: 1025px) {
      width: calc(60%);
    }

    &__inner {
      width: 100%;
      max-width: 67.5rem;
      margin: 0 0 0 auto;
      padding: 2rem 2rem;

      @media (min-width: 768px) {
        max-width: 67.5rem;
        padding: 7rem 12rem;
      }

      @media (min-width: 1025px) {
        max-width: 75rem;
      }
    }

    &__logo {
      max-width: 30rem;
      margin: auto;
      margin-bottom: 5rem;

      @media (min-width: 768px) {
        max-width: 100%;
      }
    }

    &__title {
      text-align: center;
      @media (min-width: 768px) {
        text-align: left;
      }

      p {
        ${B2White};
        text-transform: uppercase;
      }

      h1 {
        ${H1White};
        text-transform: uppercase;
      }
    }

    &__content {
      text-align: center;

      @media (min-width: 768px) {
        text-align: left;
      }

      p {
        ${B1White};
      }
    }
  }

  .second-side {
    position: relative;
    width: calc(100%);
    z-index: 10;

    @media (min-width: 768px) {
      width: calc(35%);
    }

    @media (min-width: 1025px) {
      width: calc(40%);
    }

    &__inner {
      padding: 2rem;

      @media (min-width: 768px) {
        max-width: 30rem;
        padding: 4rem 3.5rem;
      }

      @media (min-width: 1025px) {
        max-width: 40rem;
      }
    }

    &__order {
      text-align: center;

      @media (min-width: 768px) {
        position: absolute;
        top: 2rem;
        right: 0;
        text-align: left;
      }

      a {
        ${Btn1One};
      }
    }

    &__mountains {
      max-width: 20rem;
      margin: 4rem auto;

      @media (min-width: 768px) {
        max-width: 100%;
        margin-top: 7.5rem;
        margin-bottom: 3rem;
      }
    }

    &__content {
      p {
        ${H2White};
        color: ${colors.colorAccent};
        text-align: center;
        text-transform: uppercase;
      }
    }

    &__icon {
      display: none;

      @media (min-width: 768px) {
        display: block;
      }

      &--wrapper {
        margin-left: auto;
        max-width: 26rem;
      }
    }
  }

  .graphic-one {
    display: none;
    position: absolute;
    right: 0;
    bottom: 2rem;
    left: 0;
    height: 4rem;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;

    @media (min-width: 768px) {
      display: block;
    }
  }
`

export default HomeIntro
