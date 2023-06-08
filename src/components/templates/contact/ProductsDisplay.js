import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { medWrapper } from "../../../styles/helpers"

const ProductsDisplay = ({ data }) => {
  return (
    <StyledDiv>
      <div className="wrapper">
        {data.productsDisplayProducts.map((item, index) => {
          const image = getImage(
            item?.productImage?.localFile?.childImageSharp?.gatsbyImageData
          )
          const alt = item?.productImage?.altText

          return (
            <Item key={index}>
              <div className="item-image">
                <GatsbyImage image={image} alt={alt} />
              </div>
            </Item>
          )
        })}
      </div>
      <div className="products-overlay" />
      <div
        className="products-bg"
        style={{
          backgroundImage: `url(${data.productsDisplayBackgroundImage.mediaItemUrl})`,
        }}
      />
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  position: relative;
  padding-bottom: 19rem;

  .wrapper {
    ${medWrapper};
    position: relative;
    z-index: 10;
  }

  .products-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #212326;
    opacity: 0.6;
    z-index: 1;
  }
  .products-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
`

const Item = styled.div`
  width: calc(50%);

  @media (min-width: 768px) {
    width: calc(50%);
  }

  @media (min-width: 1025px) {
    width: calc(25% - 2rem);
    margin: 1rem;
  }

  .item-image {
    padding: 2rem 2rem;
  }
`

export default ProductsDisplay
