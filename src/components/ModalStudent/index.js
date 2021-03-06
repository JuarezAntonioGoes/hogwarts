import React from "react";
import { useDispatch } from "react-redux";
import Field from "../Field";
import {
  ButtonClose,
  BtnTirarPonto,
  ContainerModal,
  FundoModal,
  BtnAddPts,
} from "./style";

import { ReactComponent as CloseSVG } from "../../assets/icons/close.svg";

import { addScore, removeScore } from "../../store/modules/school/thunks";

const ModalStudent = ({ studentModal, setShowModal }) => {
  const [score, setScore] = React.useState("0");

  const { name, house, image } = studentModal;
  const dispatch = useDispatch();

  const handleRemoveScore = () => {
    dispatch(removeScore(studentModal, score));
    setShowModal(false);
  };

  const handleAddScore = () => {
    dispatch(addScore(studentModal, score));
    setShowModal(false);
  };

  const handleModalOut = (e) => {
    if (e.currentTarget === e.target) {
      setShowModal(false);
    }
  };

  return (
    <FundoModal onClick={handleModalOut}>
      <ContainerModal>
        <img src={image} alt="foto de perfil" />

        <div>
          <h1>{name}</h1>
          <h2>{house}</h2>

          <Field.Text value={score} setValue={setScore}>
            Pontos:
          </Field.Text>

          <ButtonClose onClick={() => setShowModal(false)}>
            <CloseSVG />
          </ButtonClose>

          <footer>
            <BtnTirarPonto onClick={handleRemoveScore}>
              Tirar pontos
            </BtnTirarPonto>
            <BtnAddPts onClick={handleAddScore}>Adicionar Pontos</BtnAddPts>
          </footer>
        </div>
      </ContainerModal>
    </FundoModal>
  );
};

export default ModalStudent;
