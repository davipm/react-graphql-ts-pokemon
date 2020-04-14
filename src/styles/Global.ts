import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    text-align: left;
    line-height: 1.5;
    font-family: "Josefin Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  img {
    display: inline-block;
    vertical-align: middle;
    border-style: none;
  }
  
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;
