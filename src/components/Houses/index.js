import React from "react";

import { ContainerSchool, SchoolItem } from "./style";

import { useSelector } from "react-redux";

const Houses = () => {
  const { HouseScoreReduce } = useSelector((state) => state);

  return (
    <ContainerSchool>
      {HouseScoreReduce.map(({ id, house, score }) => (
        <SchoolItem key={id}>
          <img src={`./icons/${house}.svg`} alt={house} />
          <h2>{house}</h2>
          <span>{score} pontos</span>
        </SchoolItem>
      ))}
    </ContainerSchool>
  );
};

export default Houses;
