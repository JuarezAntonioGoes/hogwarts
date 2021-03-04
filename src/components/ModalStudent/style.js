import styled from "styled-components";

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
  width: 500px;
  background-color: #fff;
  border-radius: 5px;

  display: grid;
  grid-template-columns: 1fr 2fr;
  color: #252525;

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
  }
`;
