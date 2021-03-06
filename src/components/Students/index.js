import React from "react";
import axios from "axios";
import { AiFillContainer } from "react-icons/ai";

import ModalStudent from "../ModalStudent";

import {
  ButtonAlterarPontuacao,
  ContainerStudent,
  TableStudents,
} from "./style";

const Students = ({ setShowLoading }) => {
  const [students, setStudents] = React.useState([]);
  const [studentModal, setStudentsModal] = React.useState({});
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => {
        setStudents(response.data);
        setShowLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleScore = (student) => {
    setStudentsModal(student);
    setShowModal(true);
  };

  return (
    <>
      <ContainerStudent>
        <TableStudents>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Casa</th>
              <th>Alterar Pontução</th>
            </tr>
          </thead>

          <tbody>
            {students.map(({ name, house, image }) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{house}</td>
                <td>
                  <ButtonAlterarPontuacao
                    onClick={() => handleScore({ name, house, image })}
                  >
                    <AiFillContainer />
                  </ButtonAlterarPontuacao>
                </td>
              </tr>
            ))}
          </tbody>
        </TableStudents>
      </ContainerStudent>

      {showModal && (
        <ModalStudent
          studentModal={studentModal}
          setShowModal={setShowModal}
        ></ModalStudent>
      )}
    </>
  );
};

export default Students;
