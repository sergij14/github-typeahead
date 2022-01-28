import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 10px;
  }

  body {
    background-color: ${({ theme }) => theme.colors.primary}; 
    min-height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
  }
`;
