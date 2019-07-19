import React from "react";
import styled from "styled-components";

const ButtonsDiv = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 30%;
  background-color: transparent;
`;

const RWButton = styled.button`
  ${props =>
    props.type === "prev"
      ? `width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-right: 20px solid #641d0b;
  border-bottom: 10px solid transparent;`
      : null}

  ${props =>
    props.type === "next"
      ? `width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-left: 20px solid #641d0b;
      border-bottom: 10px solid transparent;`
      : null}
`;

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
