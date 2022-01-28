import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow: visible;
  margin: 0 auto;
  margin-top: 1.5rem;
  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    max-width: 500px;
  }
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border: 0;
  padding: 1.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  width: 100%;
  &:focus {
    outline: 4px ${({ theme }) => theme.colors.primaryDarker} solid;
    background-color: ${({ theme }) => theme.colors.secondaryDarker};
  }
`;

export const Data = styled.div`
  position: absolute;
  background-color: red;
  top: 5rem;
  padding: 1rem;
  z-index: 10;
  width: 100%;
  border-radius: 1rem;
`;

export const DataError = styled.p``;

export const DataLoading = styled.p``;

export const UserData = styled.div``;

export const UserName = styled.p``;

export const UserImage = styled.img``;

export const UserUrl = styled.p``;
