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

const ModalStudent = ({
  studentModal,
  setShowModal,
  setShowMessageAddPts,
  setPontos,
  setShowMessageRemovePts,
}) => {
  const [score, setScore] = React.useState("0");

  const { name, house, image } = studentModal;
  const dispatch = useDispatch();

  let message;

  const validInputPontos = (campo) => {
    const verifyNumber = campo.match(/^[0-9]*$/);
    let isValid = true;

    if (!verifyNumber) {
      isValid = false;
      alert("Só são aceitos números");
    } else if (!campo.length) {
      isValid = false;
      alert("Preencha o campo");
    }

    return isValid;
  };

  const closeMessagePts = () => {
    clearTimeout(message);

    message = setTimeout(() => {
      setShowMessageAddPts(false);
      setShowMessageRemovePts(false);
    }, 3000);
  };

  const handleRemoveScore = () => {
    const isValid = validInputPontos(score);

    if (isValid) {
      dispatch(removeScore(studentModal, score));
      setShowModal(false);

      setPontos(score);
      setShowMessageRemovePts(true);
      closeMessagePts();
    }
  };

  const handleAddScore = () => {
    const isValid = validInputPontos(score);

    if (isValid) {
      dispatch(addScore(studentModal, score));
      setShowModal(false);

      setPontos(score);
      setShowMessageAddPts(true);
      closeMessagePts();
    }
  };

  const handleModalOut = (e) => {
    if (e.currentTarget === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
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
    </>
  );
};

export default ModalStudent;
