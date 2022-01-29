import styled from "styled-components";

export const AppContainer = styled.div`
  font-size: 1.6rem;
  color: white;
  padding: 1.5rem;
  margin: 0 auto;
  max-width: 105rem;
`;

export const MockContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 0;
  margin: 2rem 0;
`;

export const Logo = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 2rem 0;
  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    flex-direction: row;
  }
`;

export const LogoText = styled.h1`
  text-transform: uppercase;
  font-size: 3rem;
`;

export const LogoSVG = styled.svg`
  width: 4rem;
  height: 4rem;
  path {
    fill: white;
  }
`;
