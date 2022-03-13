import styled, { css, keyframes } from "styled-components";
import { IsVisibleConsumerType } from "./SearchUser.types";

export const Container = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.primary};
  overflow: visible;
  margin: 0 auto;
  margin-top: 1.5rem;
  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    max-width: 50rem;
  }
`;

export const Input = styled.input<IsVisibleConsumerType>`
  background-color: ${({ theme }) => theme.colors.secondaryDarker};
  color: ${({ theme }) => theme.colors.primary};
  border: 0;
  padding: 1.6rem 1.4rem;
  ${({ isVisible }) =>
    isVisible
      ? css`
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
        `
      : css`
          border-radius: 1rem;
        `};
  font-size: 1.6rem;
  width: 100%;
  outline: 4px ${({ theme }) => theme.colors.primaryDarker} solid;
  &:focus {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Data = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.secondary};
  outline: 4px ${({ theme }) => theme.colors.primaryDarker} solid;
  top: 5.5rem;
  padding: 1rem;
  z-index: 10;
  width: 100%;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

export const DataError = styled.p`
  color: ${({ theme }) => theme.colors.error};
`;

export const UserData = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 0.5rem 0;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  margin: 2.5rem auto;
  border-top: 2px solid ${({ theme }) => theme.colors.primary};
  border-right: 2px solid ${({ theme }) => theme.colors.primary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  border-left: 4px solid ${({ theme }) => theme.colors.primaryDarker};
  background: transparent;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1.4rem;
  align-items: flex-start;
`;

export const UserName = styled.p`
  font-weight: bold;
  font-size: 1.6rem;
`;

export const UserURL = styled.button`
  margin-top: 0.5rem;
  background-color: ${({ theme }) => theme.colors.secondaryDarker};
  padding: 0.5rem 0.8rem;
  border-radius: 0.5rem;
  border: 0;
  opacity: 0.8;
  &:focus,
  &:active {
    opacity: 1;
  }
  & a:hover {
    text-decoration: underline;
  }
`;

export const UserImage = styled.div`
  & img {
    border-radius: 0.5rem;
    border: 1px ${({ theme }) => theme.colors.primary} solid;
    opacity: 0.9;
    width: 10rem;
    @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
      width: 13rem;
    }
    &:hover {
      opacity: 1;
    }
  }
`;
