import React, { useRef } from "react";

import { ClassificationNumber, ContainerSchool, SchoolItem } from "./style";

import { useSelector } from "react-redux";

const Houses = () => {
  const [schoolPosition, setSchoolPosition] = React.useState({});

  const HouseScore = useSelector((state) =>
    state.HouseScoreReduce.sort((att, next) => {
      return next.score - att.score;
    })
  );

  function isEmpty(obj) {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return JSON.stringify(obj) === JSON.stringify({});
  }

  const schoolDiv = useRef({});

  React.useEffect(() => {
    const { current } = schoolDiv;
    const newPosition = {};

    for (const key in current) {
      const left = current[key].offsetLeft;
      const top = current[key].offsetTop;
      newPosition[key] = { left, top };
    }

    if (!isEmpty(schoolPosition)) {
      for (const key in schoolPosition) {
        if (
          schoolPosition[key].left !== newPosition[key].left ||
          schoolPosition[key].top !== newPosition[key].top
        ) {
          const valueX = schoolPosition[key].left - newPosition[key].left;

          if (valueX > 0) {
            console.log(current[key].offsetWidth);
            current[key].style.transform = `translate(-${valueX})`;
          } else {
            current[key].style.transform = `translate(${valueX}px)`;
          }
        }
      }
    }

    setSchoolPosition(newPosition);
  }, [HouseScore]);

  return (
    <ContainerSchool>
      {HouseScore.map(({ id, house, score }, index) => (
        <SchoolItem key={id} ref={(el) => (schoolDiv.current[house] = el)}>
          <img src={`./icons/${house}.svg`} alt={house} />
          <h2>{house}</h2>
          <span>{score} pontos</span>
          <ClassificationNumber>{index + 1}º</ClassificationNumber>
        </SchoolItem>
      ))}
    </ContainerSchool>
  );
};

export default Houses;
