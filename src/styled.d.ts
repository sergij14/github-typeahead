import "styled-components";

// creating declaration for typed styled-component theme

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      primaryDarker: string;
      secondaryDarker: string;
    };
    breakPoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
