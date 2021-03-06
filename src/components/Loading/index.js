import React from "react";

import { ReactComponent as Bruxa } from "../../assets/icons/bruxa.svg";

import { BackgroundLoading } from "./style";

const Loading = () => {
  return (
    <BackgroundLoading>
      <Bruxa />
    </BackgroundLoading>
  );
};

export default Loading;
