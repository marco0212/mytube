import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
  ${reset}
  body {
    font-size: 14px;
    line-height: 21px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
  }
`;
