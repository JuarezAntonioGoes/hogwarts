import React from "react";
import { HeaderTag } from "./style";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

const Header = () => {
  return (
    <HeaderTag>
      <Logo />
      <h1>Hogwarts Score Manager</h1>
    </HeaderTag>
  );
};

export default Header;
