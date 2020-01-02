import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: ${props => props.theme.backgroundColor};
    padding-top: 110px;
    padding-bottom: 100px;
    font-size: 14px;
    line-height: 1.2;
    font-family: "Helvetica Neue","Apple SD Gothic Neo","Malgun Gothic", sans-serif;
  }
  img {
    vertical-align: top;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

`;
