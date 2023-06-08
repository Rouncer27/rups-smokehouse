import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Btn1One } from "../../../styles/helpers"

const SideByImages = ({ data }) => {
  const imageOne = getImage(
    data?.sideByImagesOne?.localFile?.childImageSharp?.gatsbyImageData
  )
  const imageTwo = getImage(
    data?.sideByImagesTwo?.localFile?.childImageSharp?.gatsbyImageData
  )
  const imageOneAlt = data?.sideByImagesOne?.altText
  const imageTwoAlt = data?.sideByImagesTwo?.altText
  return (
    <StyledDiv>
      <div className="wrapper">
        <div className="image-one">
          <GatsbyImage image={imageOne} alt={imageOneAlt} />
        </div>
        <div className="image-two">
          <GatsbyImage image={imageTwo} alt={imageTwoAlt} />
        </div>
        <div className="link">
          <Link to="/">About Us</Link>
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
    position: relative;
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    a {
      ${Btn1One};
    }
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
