import styled, { keyframes } from "styled-components";

export const ContainerStudent = styled.div``;

export const StudentItem = styled.div``;

export const TableStudents = styled.table`
  width: 100%;
  max-width: 800px;
  margin: 2rem auto 5rem auto;

  thead {
    background-color: #0c2b32;
    color: #fff;
    text-transform: uppercase;
    line-height: 1.2rem;
  }

  td,
  th {
    padding: 0.5rem 1rem;
  }

  tbody tr:nth-child(2n) {
    background-color: #f5f5f5;
  }

  tbody tr {
    transition: 0.2s;
  }

  tbody td:last-child {
    display: flex;
    justify-content: center;
  }

  tbody tr:hover {
    background-color: #cfd8dc;
  }
`;

export const ButtonAlterarPontuacao = styled.button`
  background-color: #ffc107;
  border: none;
  padding: 0.3rem;
  color: #fff;
  border-radius: 5px;
  font-size: 1.5rem;
  cursor: pointer;

  display: flex;
`;

const animationMessage = keyframes`
  from{
    opacity: 0;
    transform: translatey(30px);
  }
  to{
    opacity: initial;
    transform: initial;
  }
`;

export const MessageAddPts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #fff;
  border: 1px solid #6ac259;
  border-radius: 4px;

  position: fixed;
  bottom: 30px;
  left: 30px;
  padding: 0.3rem;

  animation: ${animationMessage} 0.3s forwards;

  h3 {
    text-transform: capitalize;
    color: #333;
  }

  div {
    display: flex;
    gap: 0.5rem;
  }

  svg {
    height: 3rem;
  }

  span {
    color: #6ac259;
    font-weight: 600;
    font-size: 1.2rem;
  }
`;

export const MessageRemovePts = styled(MessageAddPts)`
  border: 1px solid red;

  span {
    color: red;
  }
`;
