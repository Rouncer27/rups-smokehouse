import { colors, fontSizer, fonts } from "./index"
import { css } from "styled-components"

const Btn1Base = css`
  ${fontSizer(2, 3.1, 76.8, 150, 2)};
  position: relative;
  display: inline-block;
  padding: 0.75rem 6.3rem;
  border: none;
  transition: all 0.3s ease;
  border-radius: 0.4rem;
  background-color: ${colors.colorTertiary};
  color: ${colors.white};
  font-family: ${fonts.fontPrimary};
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  line-height: 2.16;
  letter-spacing: normal;
  text-align: center;
  outline: none;

  &:hover {
    color: ${colors.black};
    background-color: ${colors.colorAccent};
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      background: ${colors.white};
      color: ${colors.colorPrimary};
      cursor: not-allowed;
    }
  }
`

export const Btn1One = css`
  ${Btn1Base};
  color: ${colors.white};
  background-color: ${colors.colorTertiary};
  text-transform: uppercase;

  &:hover {
    color: ${colors.black};
    background-color: ${colors.colorAccent};
  }

  &:focus {
    transition: all 0.35s ease-in-out;
  }

  &:disabled {
    opacity: 0.5;

    &:hover {
      background: ${colors.white};
      color: ${colors.colorPrimary};
      cursor: not-allowed;
    }
  }
`

export const Btn1Two = css`
  ${Btn1Base};
  background-color: ${colors.colorSecondary};
  color: ${colors.white};
  text-transform: uppercase;

  &:hover {
    background-color: ${colors.colorTertiary};
    color: ${colors.white};
  }

  &:focus {
    transition: all 0.35s ease-in-out;
  }

  &:disabled {
    opacity: 0.5;

    &:hover {
      background: ${colors.white};
      color: ${colors.colorPrimary};
      cursor: not-allowed;
    }
  }
`

export const Btn1Three = css`
  ${Btn1Base};
  padding-right: 7.5rem;
  color: ${colors.white};
  background: ${colors.colorTertiary};
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    color: ${colors.colorTertiary};
    background: ${colors.colorSecondary};
  }

  &:focus {
    transition: all 0.35s ease-in-out;
  }

  &:disabled {
    opacity: 0.5;

    &:hover {
      background: ${colors.white};
      color: ${colors.colorPrimary};
      cursor: not-allowed;
    }
  }
`

export const Btn1Four = css`
  ${Btn1Base};
  padding: 0.75rem 1rem;
  color: ${colors.white};
  background: ${colors.colorAccent};
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    background: ${colors.colorTertiary};
  }

  &:focus {
    transition: all 0.35s ease-in-out;
  }

  &:disabled {
    opacity: 0.5;

    &:hover {
      background: ${colors.white};
      color: ${colors.colorPrimary};
      cursor: not-allowed;
    }
  }
`

const TextBtnBase = css`
  ${fontSizer(1.4, 1.8, 76.8, 150, 1.8)};
  font-family: ${fonts.fontTertiary};
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.73;
  letter-spacing: normal;
  text-transform: uppercase;
  box-shadow: 0 0.4rem 0 0 ${colors.colorPrimary};
`

export const TextBtnWhite = css`
  ${TextBtnBase};
  color: ${colors.white};
`

export const TextBtnBlack = css`
  ${TextBtnBase};
  color: ${colors.black};
`

export const TextBtnDark = css`
  ${TextBtnBase};
  color: #212326;
`
