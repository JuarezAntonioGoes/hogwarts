import styled from "styled-components";

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
