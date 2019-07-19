import React from "react";
import { ButtonsDiv, RWButton } from "./RWStyles";

const Buttons = props => {
  const { nextPage, prevPage } = props;

  return (
    <ButtonsDiv>
      <RWButton onClick={prevPage} type="prev" />
      <RWButton onClick={nextPage} type="next" />
    </ButtonsDiv>
  );
};
export default Buttons;
