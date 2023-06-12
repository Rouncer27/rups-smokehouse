import React from "react"
import styled from "styled-components"
import { colors, B1Black, B2White } from "../../../styles/helpers"
const InputNumber = ({
  value,
  handler,
  errors,
  size,
  position,
  title,
  type,
  nameId,
  required,
  handleNumberUp,
  handleNumberDown,
  color,
}) => {
  return (
    <InputFieldStyled size={size} position={position} color={color}>
      <label htmlFor={nameId}>
        <button
          type="button"
          disabled={value >= 25}
          onClick={() => {
            if (value < 25) {
              handleNumberUp(nameId)
            }
          }}
        >
          &#43;
        </button>
        <input
          name={nameId}
          type={type}
          value={value}
          id={nameId}
          onChange={handler}
          aria-required={required}
          required={required}
          min="0"
          max="25"
          step="1"
        />
        <button
          type="button"
          disabled={value <= 0}
          onClick={() => {
            if (value > 0) {
              handleNumberDown(nameId)
            }
          }}
        >
          &#8722;
        </button>
        <span className="color-mark" />
        <span className="main-label">
          {title} <span className="required">&#42;</span>
        </span>
        <span
          className={`error-message ${
            errors.findIndex(error => error.idref === nameId) !== -1 &&
            " error-active"
          }`}
        >
          You must input a {title}
        </span>
      </label>
    </InputFieldStyled>
  )
}

const InputFieldStyled = styled.div`
  position: relative;
  display: flex;
  width: calc(100%);
  align-items: center;
  margin-bottom: 1rem;

  button {
    ${B1Black};
    display: inline-block;
    padding: 0 1rem;
    margin: 0;
    border-radius: 0px;
    background-color: #fff;

    &:first-of-type {
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
    }

    &:last-of-type {
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }
  }

  label {
    ${B2White};
    display: block;
    width: 100%;
    line-height: 1.5;

    .color-mark {
      display: inline-block;
      width: 2.5rem;
      height: 2.5rem;
      margin-left: 2.5rem;
      border-radius: 50%;
      background-color: ${props =>
        props.color === "yellow"
          ? colors.colorAccent
          : props.color === "orange"
          ? colors.colorTertiary
          : props.color === "blue"
          ? colors.colorShad
          : props.color === "green"
          ? colors.colorShad2
          : props.color === "red"
          ? colors.colorPrimary
          : colors.colorPrimary};
    }

    .main-label {
      padding-left: 2.5rem;
    }

    &:hover {
      cursor: initial;
    }

    .error-message {
      display: none;
    }

    .error-active {
      ${B1Black};
      display: inline-block;
      color: red;
      padding-left: 2rem;
      font-weight: 900;
    }

    input {
      ${B1Black};
      display: inline-block;

      line-height: 1.5;
      padding: 0 2rem;
      margin: 0;

      border: 0 solid #eee;
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type="number"] {
      -moz-appearance: textfield;
    }
  }
`

export default InputNumber
