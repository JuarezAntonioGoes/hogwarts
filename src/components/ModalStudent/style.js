import styled, { keyframes } from "styled-components";

const animationModal = keyframes`
  from{
    opacity: 0;
    transform: translatey(-30px);
  }
  to{
    opacity: initial;
    transform: initial;
  }
`;

export const FundoModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerModal = styled.div`
  position: relative;
  width: 500px;
  background-color: #fff;
  border-radius: 5px;

  display: grid;
  grid-template-columns: 1fr 2fr;
  color: #252525;

  animation: ${animationModal} 0.3s forwards;

  img {
    height: 13rem;
    border-radius: 5px;
    grid-column: 1/2;
    margin: 1rem auto;
  }

  div {
    grid-column: 2/3;

    h1 {
      margin: 1rem 0.5rem;
    }

    h2 {
      margin: 1rem 0.5rem;
      font-size: 1.2rem;
    }
  }

  footer {
    grid-column: 2/3;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    margin-top: 3rem;
  }
`;

export const ButtonClose = styled.button`
  background-color: transparent;
  border: none;
  padding: 0.3rem;
  border-radius: 4px;
  cursor: pointer;

  display: flex;
  align-items: center;

  position: absolute;
  top: 0.5rem;
  right: 0.7rem;
  transition: 0.2s;
`;

export const BtnTirarPonto = styled.button`
  background-color: #c62828;
  text-transform: uppercase;
  font-weight: 600;
  color: #fff;

  padding: 0.5rem;
  border: none;
  border-radius: 2px;
  cursor: pointer;

  grid-column: 1/2;

  &:hover {
    background-color: #d32f2f;
  }
`;

export const BtnAddPts = styled(BtnTirarPonto)`
  background-color: #006064;

  &:hover {
    background-color: #00838f;
  }
`;

