import * as primary from "./primary"
import { css } from "styled-components"

const PrimaryFonts = css`
  @font-face {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 400;
    src: local(""), url("${primary.WOFF2_4}") format("woff2"),
      url("${primary.WOFF_4}") format("woff");
  }
`

export default PrimaryFonts
