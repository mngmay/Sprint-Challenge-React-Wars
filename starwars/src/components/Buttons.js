import React from "react";

const Buttons = props => {
  const { apiNext, apiPrev } = props;

  return (
    <div>
      <button onClick={apiPrev}>Previous Page</button>
      <button onClick={apiNext}>Next Page</button>
    </div>
  );
};
export default Buttons;
