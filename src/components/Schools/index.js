import React from "react";
import { ContainerSchool, SchoolItem } from "./style";
import { ReactComponent as Gryffindor } from "../../assets/icons/gryffindor.svg";
import { ReactComponent as Hufflepuff } from "../../assets/icons/hufflepuff.svg";
import { ReactComponent as Ravenclow } from "../../assets/icons/ravenclow.svg";
import { ReactComponent as Slytherin } from "../../assets/icons/slytherin.svg";

const Schools = () => {
  return (
    <ContainerSchool>
      <SchoolItem>
        <Gryffindor />
        <h2>Gryffindor</h2>
      </SchoolItem>

      <SchoolItem>
        <Hufflepuff />
        <h2>Hufflepuff</h2>
      </SchoolItem>

      <SchoolItem>
        <Ravenclow />
        <h2>Ravenclow</h2>
      </SchoolItem>

      <SchoolItem>
        <Slytherin />
        <h2>Gryffindor</h2>
      </SchoolItem>
    </ContainerSchool>
  );
};

export default Schools;
