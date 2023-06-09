import { createGlobalStyle } from "styled-components"
import styledNormalize from "styled-normalize"
import theme from "../theme/Theme"

import FontAwesome from "../Fonts/FontAwesome"
import PrimaryFonts from "../Fonts/PrimaryFonts"
import SecondaryFonts from "../Fonts/SecondaryFonts"
import TertiaryFonts from "../Fonts/TertiaryFonts"

import { Btn1One, fontSizer } from "../helpers/index"

const GlobalStyle = createGlobalStyle`
/* Browser Reset */
${styledNormalize}
/* Fonts */
${FontAwesome}
${PrimaryFonts}
${SecondaryFonts}
${TertiaryFonts}


:root {
    --primary: #35c567;
    --secondary: #004565;
    --tertiary: #1d6383;
    --accent: #35c567;
    --shadow: #004565;
    --greybrown: #707070;
    --brown: #454545;
    --black: #363636;
    --white: #f5f5f5;
    --grey: #e3e1e2;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    overflow-x: hidden !important;
  }

  body {
    position: relative;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    font-family: ${theme.fontPrimary};
    font-weight: normal;
    letter-spacing: 0.1rem;
    line-height: 1.5;
    overflow-x: hidden !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    font-family: ${theme.fontPrimary};
    font-size: 1.8rem;
    font-weight: normal;
    line-height: ${theme.baseLineHeight};
  }
  h1 {
    ${fontSizer(3.2, 5.6, 76.8, 120)}
  }

h2 {
  ${fontSizer(2.6, 4.6, 76.8, 120)}
  }

h3 {
  ${fontSizer(2.2, 3.4, 76.8, 120)}
}

h4 {
  ${fontSizer(2, 2.8, 76.8, 120)}
}

h5 {
  ${fontSizer(2, 2.4, 76.8, 120)}
}

h6 {
  ${fontSizer(1.8, 2.2, 76.8, 120)}
}

p {
  ${fontSizer(1.6, 2.4, 76.8, 150, 1.8)};
  margin: 0;
  margin-bottom: 1.5em;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
}

a {
  ${fontSizer(1.6, 2.4, 76.8, 150, 1.8)};
  text-decoration: none;
  color: ${props => props.theme.colorPrimary};
  font-weight: normal;
  transition: all 0.3s ease;
}

button {
  ${Btn1One};
}

a:hover {
	color: ${props => props.theme.colorSecondary}
}

a:focus {
  outline: 0.4rem solid #003b49;
  transition: outline-width 0.35s ease-in-out;
}

span {
  font-size: 1em;
}

ul,
li {
  margin: 0;
  padding: 0;
  font-size: 1.8rem;
  list-style-type: none;
}

img {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}

`

export default GlobalStyle
