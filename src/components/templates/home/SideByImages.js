import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SideByImages = ({ data }) => {
  const imageOne = getImage(
    data?.sideByImagesImageOne?.localFile?.childImageSharp?.gatsbyImageData
  )
  const imageTwo = getImage(
    data?.sideByImagesImageTwo?.localFile?.childImageSharp?.gatsbyImageData
  )
  const imageOneAlt = data?.sideByImagesImageOne?.altText
  const imageTwoAlt = data?.sideByImagesImageTwo?.altText

  return (
    <StyledDiv>
      <div className="wrapper">
        <div className="image-one">
          <GatsbyImage image={imageOne} alt={imageOneAlt} />
        </div>
        <div className="image-two">
          <GatsbyImage image={imageTwo} alt={imageTwoAlt} />
        </div>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  .wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    min-height: 80rem;

    @media (min-width: 768px) {
      min-height: 40vw;
    }

    @media (min-width: 1025px) {
      min-height: 40vw;
    }
  }

  .image-one {
    position: absolute;
    top: 0;
    left: 0%;
    width: 100%;
    height: 50%;
    transform-origin: center center;
    z-index: 1;

    @media (min-width: 768px) {
      width: calc(50%);
      height: 100%;
    }

    .gatsby-image-wrapper {
      width: 100% !important;
      height: 100% !important;
    }

    img {
      display: block !important;
      width: 100% !important;
      height: 100% !important;
      object-fit: cover;
    }
  }
  .image-two {
    position: absolute;
    top: 50%;
    left: 0%;
    width: 100%;
    height: 50%;
    transform-origin: center center;
    z-index: 1;

    @media (min-width: 768px) {
      width: calc(50%);
      top: 0;
      left: 50%;
      height: 100%;
    }

    .gatsby-image-wrapper {
      width: 100% !important;
      height: 100% !important;
    }

    img {
      display: block !important;
      width: 100% !important;
      height: 100% !important;
      object-fit: cover;
    }
  }
`

export default SideByImages
