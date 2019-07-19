import React from "react";
import styled from "styled-components";

const ButtonsDiv = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 30%;
`;

const Buttons = props => {
  const { nextPage, prevPage } = props;

  return (
    <ButtonsDiv>
      <button onClick={prevPage} type="prev">
        Previous Page
      </button>
      <button onClick={nextPage} type="next">
        Next Page
      </button>
    </ButtonsDiv>
  );
};
export default Buttons;
