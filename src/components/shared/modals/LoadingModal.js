import React from "react"
import styled from "styled-components"

import { B1White, colors } from "../../../styles/helpers"
import loadingImg from "../../../images/loading.gif"

const LoadingModal = () => {
  return (
    <LoadingModalStyled>
      <div className="innerLoading">
        <div className="innerLoading__spinner">
          <img src={`${loadingImg}`} alt="Form is sending" />
        </div>
        <p>Validating and sending your contact form. Please standby.</p>
      </div>
    </LoadingModalStyled>
  )
}

const LoadingModalStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(42, 74, 83, 0.7);
  z-index: 999999;

  .innerLoading {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-self: center;
    background-color: ${colors.white};
    width: 30rem;
    margin: 0 auto;
    padding: 1rem 0 0 0;
    border-radius: 1rem;
    text-align: center;
    z-index: 10;

    @media (min-width: 768px) {
      width: 40rem;
    }

    p {
      ${B1White};
      width: 100%;
      margin: 0;
      padding: 5rem 2rem;
      border-bottom-right-radius: 1rem;
      border-bottom-left-radius: 1rem;
      background-color: ${props =>
        props.feedback ? colors.colorSecondary : colors.colorPrimary};
    }

    &__spinner {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-self: center;
      width: 15rem;
      margin: 0 auto;
      padding: ${props => (props.feedback ? "2rem 0" : "0")};
    }
  }
`

export default LoadingModal
