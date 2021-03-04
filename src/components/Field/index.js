import React from "react";
import { Input, Label } from "./style";

const Text = ({ children, setValue, value }) => {
  return (
    <Label>
      <span>{children}</span>
      <Input
        type="number"
        onChange={({ target }) => setValue(target.value)}
        value={value}
      />
    </Label>
  );
};

const Field = {
  Text,
};

export default Field;
