import styled, { keyframes } from "styled-components";

const animationBruxa = keyframes`
  0%{
      transform: rotate(0);
  }
  25%{
      transform: rotate(-20deg);
  }
  50%{
      transform: rotate(0);
  }
  75%{
      transform: rotate(10deg);
  }
  100%{
      transform: rotate(0);
  }
`;

export const BackgroundLoading = styled.div`
  position: fixed;
  background-image: url("./images/fundoLoading2.gif");
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 5rem;
    width: 5rem;
    background-color: pink;
    border-radius: 50%;

    animation: ${animationBruxa} 0.4s linear infinite;
  }
`;
