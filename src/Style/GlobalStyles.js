import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    padding: 90px 0  30px;
    font-size: 14px;
    line-height: 21px;
    font-family: -apple-system, 'Open Sans', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    color: ${props => props.theme.greyColor};
    background-color: ${props => props.theme.bgColor};
  }
  * {
    box-sizing: border-box;
  }
  a {
    color:${props => props.theme.blueColor};
    text-decoration:none;
  }
  input:focus{
      outline:none;
  }
  img {
    vertical-align: top;
    max-width: 100%;
  }
`;
