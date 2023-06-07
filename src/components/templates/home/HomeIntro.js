import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HomeIntro = ({ data }) => {
  console.log("HomeIntro: ", data)

  const image = getImage(
    data?.homeIntroLogo?.localFile?.childImageSharp?.gatsbyImageData
  )

  const alt = getImage(data?.homeIntroLogo?.altText)

  const icon = getImage(
    data?.homeIntroSideIcon?.localFile?.childImageSharp?.gatsbyImageData
  )

  const iconAlt = getImage(data?.homeIntroSideIcon?.altText)

  return (
    <StyledSection>
      <div className="wrapper">
        <div className="main-side">
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

        <div className="second-side">
          <div
            className="second-side__content"
            dangerouslySetInnerHTML={{ __html: data.homeIntroSideText }}
          />
          <div className="second-side__icon">
            <GatsbyImage image={icon} alt={iconAlt} />
          </div>
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section``

export default HomeIntro
