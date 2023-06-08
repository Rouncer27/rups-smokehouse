import React from "react"
import styled from "styled-components"

import { B1White, colors } from "../../../styles/helpers"

const SuccessModal = ({ handleSuccessModalClose }) => {
  return (
    <SuccessModalStyled feedback={true}>
      <div className="innerLoading">
        <div className="innerLoading__spinner">
          <img src={``} alt="Form is sending" />
        </div>
        <p>Your form has been successfully sent.</p>
        <div className="close-button">
          <button onClick={() => handleSuccessModalClose()} type="button">
            &#x2715;
          </button>
        </div>
      </div>
      <div
        role="button"
        tabindex={0}
        className="background-modal"
        onClick={() => handleSuccessModalClose()}
        onKeyDown={() => handleSuccessModalClose()}
      >
        <span className="visuallyhidden">Close Modal</span>
      </div>
    </SuccessModalStyled>
  )
}

const SuccessModalStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(107, 161, 165, 0.7);
  z-index: 999999;

  .background-modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    .visuallyhidden {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }
  }

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

    .close-button {
      position: absolute;
      top: 2rem;
      right: 2rem;

      button {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: ${colors.colorPrimary};
        color: ${colors.white};
        border: 0.1rem solid ${colors.white};
        transition: all 0.3s ease-in;
        cursor: pointer;

        &:hover {
          background-color: ${colors.colorSecondary};
        }
      }
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

    a {
      ${B1White};
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

export default SuccessModal
