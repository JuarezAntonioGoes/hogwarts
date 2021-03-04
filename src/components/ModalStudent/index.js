import React from "react";
import { useDispatch } from "react-redux";
import Field from "../Field";
import { ContainerModal, FundoModal } from "./style";

import { addScore } from "../../store/modules/school/thunks";

const ModalStudent = ({ studentModal }) => {
  const [score, setScore] = React.useState("0");

  const { name, house, image } = studentModal;
  const dispatch = useDispatch();

  return (
    <FundoModal>
      <ContainerModal>
        <img src={image} alt="foto de perfil" />

        <div>
          <h1>{name}</h1>
          <h2>{house}</h2>

          <Field.Text value={score} setValue={setScore}>
            Pontos:
          </Field.Text>

          <footer>
            <button>Lose</button>
            <button onClick={() => dispatch(addScore(studentModal, score))}>
              Gain
            </button>
          </footer>
        </div>
      </ContainerModal>
    </FundoModal>
  );
};

export default ModalStudent;
