import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    margin-left:  250px;
    background-color: rgb(238, 240, 246);
    padding-top: 110px;
    padding-bottom: 100px;
    font-size: 10px;
    font-family: "Helvetica Neue","Apple SD Gothic Neo","Malgun Gothic", sans-serif;
  }
  img {
    vertical-align: top;
  }
  a {
    text-decoration: none; color: inherit;
  }

`;
