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
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .image-one {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(50%);
    }
  }
  .image-two {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(50%);
    }
  }
`

export default SideByImages
