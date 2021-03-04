import styled from "styled-components";

export const ContainerSchool = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
  margin: 5rem 0;
`;

export const SchoolItem = styled.div`
  height: 15rem;
  width: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0c2b32;
  gap: 0.5rem;
  border-radius: 5px;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 5px 10px rgba(235, 25, 110, 1);
  }

  img {
    height: 10rem;
    width: 10rem;
    border-bottom: 1px solid #fff;
    padding: 0.5rem 0;
    background-color: #0c2b32;
  }

  h2 {
    color: #fff;
  }

  span {
    color: yellow;
  }
`;
