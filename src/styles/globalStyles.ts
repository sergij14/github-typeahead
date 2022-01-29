import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.colors.primary}; 
  }

  a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
  }

  img {
    display: block;
    width: 100%;
  }
`;
