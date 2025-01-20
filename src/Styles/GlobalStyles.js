import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body, html {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    color: ${({ theme }) => theme.colors.color};
    background-color: ${({ theme }) => theme.colors.background};
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    padding: 0  0 1.5rem 0; 
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.color};
  }

  button {
    cursor: pointer;
  }

  /* Breakpoints */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet || "768px"}) {
    body {
      font-size: 14px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile || "480px"}) {
    body {
      font-size: 12px;
    }
  }
`;

export default GlobalStyles;
