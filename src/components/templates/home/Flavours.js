import React, { useEffect } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1Black,
  Btn1One,
  H2White,
  colors,
  medWrapper,
} from "../../../styles/helpers"
import { Link } from "gatsby"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Flavours = ({ data }) => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#flavours-section",
          markers: false,
          start: "top 30%",
          toggleActions: "play none none none",
        },
      })
      .add("start")
      .fromTo(
        `#flavours-section .fav-item`,
        {
          autoAlpha: 0,
          y: 100,
        },
        {
          autoAlpha: 1,
          ease: "power2.out",
          y: 0,
          duration: 1.25,
          stagger: {
            each: 0.25,
          },
        }
      )
      .fromTo(
        `#flavours-section .flavours-link`,
        {
          autoAlpha: 0,
          x: -300,
        },
        {
          autoAlpha: 1,
          ease: "elastic.out(1, 0.4)",
          x: 0,
          duration: 1.5,
        }
      )
  }, [])

  return (
    <StyledSection id="flavours-section">
      <div className="wrapper">
        <div className="flavours-title">
          <h2>{data.flavoursTitle}</h2>
        </div>
        <div className="flavours-items">
          {data.flavoursItems.map((item, index) => {
            const image = getImage(
              item?.image?.localFile?.childImageSharp?.gatsbyImageData
            )
            const alt = item?.image?.altText

            return (
              <Item className="fav-item" key={index} colorHead={item.colour}>
                <div className="item-title">
                  <h3>{item.name}</h3>
                </div>
                <div className="item-image">
                  <GatsbyImage image={image} alt={alt} />
                </div>
              </Item>
            )
          })}
        </div>

        <div className="flavours-link">
          <Link to="/contact">Order Now!</Link>
        </div>
      </div>
      <div
        className="flavours-fire"
        style={{
          backgroundImage: `url(${data.flavoursFireIcon.mediaItemUrl})`,
        }}
      />
      <div className="flavours-overlay" />
      <div
        className="flavours-bg"
        style={{
          backgroundImage: `url(${data.flavoursBackgroundImage.mediaItemUrl})`,
        }}
      />
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: relative;
  padding-top: 20rem;
  padding-bottom: 10rem;
  z-index: 10;

  @media (min-width: 768px) {
    padding-top: 14rem;
    padding-bottom: 10rem;
  }

  .wrapper {
    ${medWrapper};
    position: relative;
    z-index: 10;
  }

  .flavours-title {
    width: 100%;

    h2 {
      ${H2White};
      text-align: center;
    }
  }

  .flavours-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
  }

  .flavours-link {
    width: 100%;
    margin-top: 4rem;
    text-align: center;

    a {
      ${Btn1One};
    }
  }

  .flavours-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #212326;
    opacity: 0.6;
    z-index: 1;
  }

  .flavours-fire {
    position: absolute;
    top: 2rem;
    left: 50%;
    width: calc(20.8rem / 1.5);
    height: calc(25.2rem / 1.5);
    transform: translateX(-50%);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 2;

    @media (min-width: 768px) {
      top: -9rem;
      left: 50%;
      width: calc(20.8rem / 1.25);
      height: calc(25.2rem / 1.25);
    }
  }

  .flavours-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
`

const Item = styled.div`
  width: calc(50% - 1rem);
  margin: 0.5rem;

  @media (min-width: 768px) {
    width: calc(50% - 2rem);
    margin: 1rem;
  }

  @media (min-width: 1025px) {
    width: calc(25% - 2rem);
    margin: 1rem;
  }

  .item-title {
    background-color: ${props =>
      props.colorHead === "yellow"
        ? colors.colorAccent
        : props.colorHead === "orange"
        ? colors.colorTertiary
        : props.colorHead === "blue"
        ? colors.colorShad
        : props.colorHead === "green"
        ? colors.colorShad2
        : props.colorHead === "teal"
        ? "#40bfb4"
        : props.colorHead === "red"
        ? colors.colorPrimary
        : colors.colorSecondary};
    text-align: center;

    h3 {
      ${B1Black};
      text-transform: uppercase;
    }
  }

  .item-image {
    padding: 2rem 2rem;
  }
`

export default Flavours
