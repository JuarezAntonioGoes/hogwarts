import React from "react";
import axios from "axios";
import { AiFillContainer } from "react-icons/ai";

import { ReactComponent as ArrowSVG } from "../../assets/icons/up-arrow.svg";
import { ReactComponent as RedArrowSVG } from "../../assets/icons/red-arrow.svg";

import ModalStudent from "../ModalStudent";

import {
  ButtonAlterarPontuacao,
  ContainerStudent,
  MessageAddPts,
  MessageRemovePts,
  TableStudents,
} from "./style";

const Students = ({ setShowLoading }) => {
  const [students, setStudents] = React.useState([]);
  const [studentModal, setStudentsModal] = React.useState({});
  const [pontos, setPontos] = React.useState("0");

  const [showModal, setShowModal] = React.useState(false);
  const [showMessageAddPts, setShowMessageAddPts] = React.useState(false);
  const [showMessageRemovePts, setShowMessageRemovePts] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => {
        setStudents(response.data);
        setShowLoading(false);
      })
      .catch((err) => console.log(err));
  }, [setShowLoading]);

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
          setPontos={setPontos}
          studentModal={studentModal}
          setShowModal={setShowModal}
          setShowMessageAddPts={setShowMessageAddPts}
          setShowMessageRemovePts={setShowMessageRemovePts}
        ></ModalStudent>
      )}

      {showMessageAddPts && (
        <MessageAddPts>
          <h3>{studentModal.house}</h3>
          <div>
            <ArrowSVG />
            <span>
              +{pontos}
              <br /> Pontos
            </span>
          </div>
        </MessageAddPts>
      )}

      {showMessageRemovePts && (
        <MessageRemovePts>
          <h3>{studentModal.house}</h3>
          <div>
            <RedArrowSVG />
            <span>
              -{pontos}
              <br /> Pontos
            </span>
          </div>
        </MessageRemovePts>
      )}
    </>
  );
};

export default Students;
